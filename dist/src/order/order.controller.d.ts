import { OrderService } from './order.service';
import { OrderDto } from './order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAllOrder(userId: number): Promise<({
        items: ({
            product: {
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
            };
        } & {
            id: number;
            createdAt: Date;
            updateAt: Date;
            quantity: number;
            price: number;
            orderId: number | null;
            productId: number | null;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updateAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        total: number;
        userId: number;
    })[]>;
    getByUserId(userId: number): Promise<({
        items: ({
            product: {
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
            };
        } & {
            id: number;
            createdAt: Date;
            updateAt: Date;
            quantity: number;
            price: number;
            orderId: number | null;
            productId: number | null;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updateAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        total: number;
        userId: number;
    })[]>;
    placeOrder(dto: OrderDto, userId: number): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        total: number;
        userId: number;
    }>;
}
