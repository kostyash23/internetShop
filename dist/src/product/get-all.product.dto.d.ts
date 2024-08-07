import { PaginationDto } from 'src/pagination/paginationDto';
export declare enum EnamProductSort {
    HIGH_PRICE = "high_price",
    LOW_PRICE = "low_price",
    NEWEST = "newest",
    OLDEST = "oldest"
}
export declare class GetAllproductDto extends PaginationDto {
    sort?: EnamProductSort;
    serchTerm?: string;
}
