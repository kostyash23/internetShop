import { ProductService } from './product.service';
import { GetAllproductDto } from './get-all.product.dto';
import { ProductDto } from './productDto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAll(queryDto: GetAllproductDto): Promise<{
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
    getSimilar(id: string): Promise<{
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
    getBySlug(slug: string): Promise<{
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
    getByCategoryg(category: string): Promise<{
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
    createProduct(): Promise<void>;
    updateProduct(id: string, dto: ProductDto): Promise<{
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
    deleteProduct(id: string): Promise<{
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
    getProduct(id: string): Promise<{
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
}
