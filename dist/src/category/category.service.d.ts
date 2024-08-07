import { PrismaService } from 'src/prisma.service';
import { CategoryDto } from './categoryDto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number): Promise<{
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
    bySlyg(slug: string): Promise<{
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
    getAll(): Promise<{
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
    update(id: number, dto: CategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        name: string;
        slug: string;
    }>;
    create(): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        name: string;
        slug: string;
    }>;
    delete(id: number): Promise<string>;
}
