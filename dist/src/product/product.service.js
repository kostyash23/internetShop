"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const return_product_object_1 = require("./return-product-object");
const generate_slug_1 = require("../utils/generate-slug");
const get_all_product_dto_1 = require("./get-all.product.dto");
const pagination_service_1 = require("../pagination/pagination.service");
const category_service_1 = require("../category/category.service");
let ProductService = class ProductService {
    constructor(prisma, paginationService, categoryService) {
        this.prisma = prisma;
        this.paginationService = paginationService;
        this.categoryService = categoryService;
    }
    async getAll(dto = {}) {
        const { sort, searchTerm } = dto;
        const prismaSort = [];
        if (sort === get_all_product_dto_1.EnamProductSort.HIGH_PRICE) {
            prismaSort.push({ price: 'desc' });
        }
        else if (sort === get_all_product_dto_1.EnamProductSort.LOW_PRICE) {
            prismaSort.push({ price: 'asc' });
        }
        else if (sort === get_all_product_dto_1.EnamProductSort.NEWEST) {
            prismaSort.push({ createdAt: 'asc' });
        }
        else {
            prismaSort.push({ createdAt: 'desc' });
        }
        const prismaSearchTermFilter = searchTerm
            ? {
                OR: [
                    {
                        category: {
                            name: {
                                contains: searchTerm,
                                mode: 'insensitive'
                            }
                        }
                    },
                    {
                        name: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    },
                    {
                        description: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    }
                ]
            }
            : {};
        const { perPage, skip } = this.paginationService.getPagination(dto);
        const products = await this.prisma.product.findMany({
            where: prismaSearchTermFilter,
            orderBy: prismaSort,
            skip,
            take: perPage,
            select: return_product_object_1.productReturnObject
        });
        return {
            products,
            length: await this.prisma.product.count({
                where: prismaSearchTermFilter
            })
        };
    }
    getSortOptional(sort) {
        switch (sort) {
            case EnumProductSort.HIGHT_PRICE:
                return { price: 'desc' };
            case EnumProductSort.LOW_PRICE:
                return { price: 'asc' };
            case EnumProductSort.NEWEST:
                return { createdAt: 'desc' };
            default:
                return { createdAt: 'asc' };
        }
    }
    getSearchTermsFilter(searchTerm) {
        return {
            OR: [
                {
                    category: {
                        name: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    }
                },
                {
                    name: {
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                },
                {
                    description: {
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                }
            ]
        };
    }
    getRatingfilter(ratings) {
        return {
            reviews: {
                some: {
                    rating: {
                        in: ratings
                    }
                }
            }
        };
    }
    getPriceFilter(minPrice, maxPrice) {
        let priceFilter = undefined;
        if (minPrice) {
            priceFilter = {
                ...priceFilter,
                gte: minPrice
            };
        }
        if (maxPrice) {
            priceFilter = {
                ...priceFilter,
                lte: maxPrice
            };
        }
        return {
            price: priceFilter
        };
    }
    categotyFilter(categoryId) {
        return {
            categoryId
        };
    }
    async byId(id) {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            },
            select: {
                ...return_product_object_1.productReturnObjectFullset
            }
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return product;
    }
    async bySlyg(slug) {
        const product = await this.prisma.product.findUnique({
            where: {
                slug
            },
            select: return_product_object_1.productReturnObjectFullset
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return product;
    }
    async byCategory(categorySlug) {
        const products = this.prisma.product.findMany({
            where: {
                category: {
                    slug: categorySlug
                }
            },
            select: return_product_object_1.productReturnObjectFullset
        });
        if (!products)
            throw new common_1.NotFoundException('Product not found');
        return products;
    }
    async getSimilar(id) {
        const currentProduct = await this.byId(id);
        if (!currentProduct)
            throw new common_1.NotFoundException(' Current product not found');
        const products = this.prisma.product.findMany({
            where: {
                category: {
                    name: currentProduct.category.name
                },
                NOT: {
                    id: currentProduct.id
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            select: return_product_object_1.productReturnObject
        });
        return products;
    }
    async create() {
        const product = await this.prisma.product.create({
            data: {
                description: '',
                name: '',
                price: 0,
                slug: '',
                category: {
                    connect: {
                        id: 1
                    }
                }
            }
        });
        return product.id;
    }
    async update(id, dto) {
        const { description, images, price, name, categoryId } = dto;
        const product = await this.prisma.product.update({
            where: {
                id
            },
            data: {
                description,
                images,
                price,
                name,
                slug: (0, generate_slug_1.generateSlug)(name),
                category: {
                    connect: {
                        id: categoryId
                    }
                }
            }
        });
        return product;
    }
    async delete(id) {
        return this.prisma.product.delete({ where: { id } });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pagination_service_1.PaginationService,
        category_service_1.CategoryService])
], ProductService);
//# sourceMappingURL=product.service.js.map