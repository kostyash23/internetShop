import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAllOrder(userId: number): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        userId: number;
    }[]>;
}
