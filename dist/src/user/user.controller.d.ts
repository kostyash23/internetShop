import { UserService } from './user.service';
import { UserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updateAt: Date;
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
        _count: {
            orders: number;
            reviews: number;
            favorites: number;
        };
        email: string;
        password: string;
        isAdmin: boolean;
        avatarPath: string;
        phone: string;
        orders: {
            id: number;
            createdAt: Date;
            updateAt: Date;
            status: import(".prisma/client").$Enums.EnumOrderStatus;
            total: number;
            userId: number;
        }[];
        favorites: {
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
    updateUserProfile(id: number, dto: UserDto): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        email: string;
        password: string;
        isAdmin: boolean;
        name: string;
        avatarPath: string;
        phone: string;
    }>;
    toggleFavorite(id: number, productId: number): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        email: string;
        password: string;
        isAdmin: boolean;
        name: string;
        avatarPath: string;
        phone: string;
    }>;
}
