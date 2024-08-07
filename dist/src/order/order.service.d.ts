import { PrismaService } from 'src/prisma.service';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(userId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        userId: number;
    }[]>;
}
