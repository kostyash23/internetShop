import { StatisticService } from './statistic.service';
export declare class StatisticController {
    private readonly statisticService;
    constructor(statisticService: StatisticService);
    getMainStatistic(id: number): Promise<({
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
