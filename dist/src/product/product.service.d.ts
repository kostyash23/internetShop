import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './productDto';
import { GetAllproductDto } from './get-all.product.dto';
import { PaginationService } from 'src/pagination/pagination.service';
import { CategoryService } from 'src/category/category.service';
export declare enum EnumProductSort {
    HIGHT_PRICE = "high_price",
    LOW_PRICE = "low_price",
    NEWEST = "newest",
    OLDEST = "oldest"
}
export declare class ProductService {
    private prisma;
    private paginationService;
    private categoryService;
    constructor(prisma: PrismaService, paginationService: PaginationService, categoryService: CategoryService);
    getAll(dto?: GetAllproductDto): Promise<{
        products: {
            name: string;
            id: number;
            createdAt: Date;
            updateAt: Date;
            slug: string;
            description: string;
            price: number;
            images: string[];
            categoryId: number;
            userId: number;
            orderItems: {
                id: number;
                createdAt: Date;
                updateAt: Date;
                quantity: number;
                price: number;
                orderId: number | null;
                productId: number | null;
            }[];
            reviews: {
                id: number;
                createdAt: Date;
                updateAt: Date;
                rating: number;
                text: string;
                productId: number | null;
                orderId: number | null;
                userId: number;
            }[];
            category: {
                id: number;
                createdAt: Date;
                updateAt: Date;
                name: string;
                slug: string;
            };
            user: {
                id: number;
                createdAt: Date;
                updateAt: Date;
                email: string;
                password: string;
                isAdmin: boolean;
                name: string;
                avatarPath: string;
                phone: string;
            };
            _count: {
                orderItems: number;
                reviews: number;
                category: number;
                user: number;
            };
        }[];
        length: number;
    }>;
    private getSortOptional;
    private getSearchTermsFilter;
    private getRatingfilter;
    private getPriceFilter;
    private categotyFilter;
    byId(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updateAt: Date;
        slug: string;
        description: string;
        price: number;
        images: string[];
        categoryId: number;
        userId: number;
        orderItems: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            quantity: number;
            price: number;
            orderId: number | null;
            productId: number | null;
        }[];
        reviews: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            rating: number;
            text: string;
            productId: number | null;
            orderId: number | null;
            userId: number;
        }[];
        category: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            name: string;
            slug: string;
        };
        user: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            email: string;
            password: string;
            isAdmin: boolean;
            name: string;
            avatarPath: string;
            phone: string;
        };
        _count: {
            orderItems: number;
            reviews: number;
            category: number;
            user: number;
        };
    }>;
    bySlyg(slug: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updateAt: Date;
        slug: string;
        description: string;
        price: number;
        images: string[];
        categoryId: number;
        userId: number;
        orderItems: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            quantity: number;
            price: number;
            orderId: number | null;
            productId: number | null;
        }[];
        reviews: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            rating: number;
            text: string;
            productId: number | null;
            orderId: number | null;
            userId: number;
        }[];
        category: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            name: string;
            slug: string;
        };
        user: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            email: string;
            password: string;
            isAdmin: boolean;
            name: string;
            avatarPath: string;
            phone: string;
        };
        _count: {
            orderItems: number;
            reviews: number;
            category: number;
            user: number;
        };
    }>;
    byCategory(categorySlug: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updateAt: Date;
        slug: string;
        description: string;
        price: number;
        images: string[];
        categoryId: number;
        userId: number;
        orderItems: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            quantity: number;
            price: number;
            orderId: number | null;
            productId: number | null;
        }[];
        reviews: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            rating: number;
            text: string;
            productId: number | null;
            orderId: number | null;
            userId: number;
        }[];
        category: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            name: string;
            slug: string;
        };
        user: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            email: string;
            password: string;
            isAdmin: boolean;
            name: string;
            avatarPath: string;
            phone: string;
        };
        _count: {
            orderItems: number;
            reviews: number;
            category: number;
            user: number;
        };
    }[]>;
    getSimilar(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updateAt: Date;
        slug: string;
        description: string;
        price: number;
        images: string[];
        categoryId: number;
        userId: number;
        orderItems: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            quantity: number;
            price: number;
            orderId: number | null;
            productId: number | null;
        }[];
        reviews: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            rating: number;
            text: string;
            productId: number | null;
            orderId: number | null;
            userId: number;
        }[];
        category: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            name: string;
            slug: string;
        };
        user: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            email: string;
            password: string;
            isAdmin: boolean;
            name: string;
            avatarPath: string;
            phone: string;
        };
        _count: {
            orderItems: number;
            reviews: number;
            category: number;
            user: number;
        };
    }[]>;
    create(): Promise<number>;
    update(id: number, dto: ProductDto): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        name: string;
        slug: string;
        description: string;
        price: number;
        images: string[];
        categoryId: number;
        userId: number | null;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        name: string;
        slug: string;
        description: string;
        price: number;
        images: string[];
        categoryId: number;
        userId: number | null;
    }>;
}
