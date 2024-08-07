import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './productDto';
import { GetAllproductDto } from './get-all.product.dto';
import { PaginationService } from 'src/pagination/pagination.service';
export declare class ProductService {
    private prisma;
    private paginationService;
    constructor(prisma: PrismaService, paginationService: PaginationService);
    getAll(dto?: GetAllproductDto): Promise<{
        products: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            name: string;
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
    byId(id: number): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        name: string;
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
        id: number;
        createdAt: Date;
        updateAt: Date;
        name: string;
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
        id: number;
        createdAt: Date;
        updateAt: Date;
        name: string;
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
        id: number;
        createdAt: Date;
        updateAt: Date;
        name: string;
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
