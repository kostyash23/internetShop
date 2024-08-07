import { PrismaService } from 'src/prisma.service';
import { ReviewDto } from './reviewDto';
export declare class ReviewService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllreviews(): Promise<{
        product: {
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
        };
        id: number;
        createdAt: Date;
        updateAt: Date;
        userId: number;
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
        rating: number;
        text: string;
        order: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            status: import(".prisma/client").$Enums.EnumOrderStatus;
            userId: number;
        };
        orderId: number;
        productId: number;
    }[]>;
    create(userId: number, dto: ReviewDto, productId: number): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        rating: number;
        text: string;
        productId: number | null;
        orderId: number | null;
        userId: number;
    }>;
    getAverageValueByProductId(productId: number): Promise<{
        rating: number;
    }>;
}
