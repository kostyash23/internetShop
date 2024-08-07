import { CategoryService } from './category.service';
import { CategoryDto } from './categoryDto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAllCategory(): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updateAt: Date;
        slug: string;
        _count: {
            products: number;
        };
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
            userId: number | null;
        }[];
    }[]>;
    getBySlug(slug: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updateAt: Date;
        slug: string;
        _count: {
            products: number;
        };
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
            userId: number | null;
        }[];
    }>;
    getById(id: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updateAt: Date;
        slug: string;
        _count: {
            products: number;
        };
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
            userId: number | null;
        }[];
    }>;
    create(): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        name: string;
        slug: string;
    }>;
    update(id: string, dto: CategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        name: string;
        slug: string;
    }>;
    delete(id: string): Promise<void>;
}
