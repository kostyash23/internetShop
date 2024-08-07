import { StatisticService } from './statistic.service';
export declare class StatisticController {
    private readonly statisticService;
    constructor(statisticService: StatisticService);
    getMainStatistic(id: number): Promise<{
        name: string;
        value: number;
    }[]>;
}
