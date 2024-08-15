import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
export declare class StatisticService {
    private prisma;
    private userService;
    constructor(prisma: PrismaService, userService: UserService);
    getMain(userId: number): Promise<({
        name: string;
        value: number;
    } | {
        name: string;
        value: import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.GetOrderAggregateType<{
            _sum: {
                total: true;
            };
        }>>;
    })[]>;
}
