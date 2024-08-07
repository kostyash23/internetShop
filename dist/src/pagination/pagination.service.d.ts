import { PaginationDto } from './paginationDto';
export declare class PaginationService {
    getPagination(dto: PaginationDto, defaultPagination?: number): {
        perPage: number;
        skip: number;
    };
}
