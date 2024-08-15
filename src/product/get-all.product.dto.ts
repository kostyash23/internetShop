import { IsEnum, IsOptional, IsString } from 'class-validator'
import { PaginationDto } from 'src/pagination/paginationDto'

export enum EnamProductSort {
  HIGH_PRICE = 'high_price',
  LOW_PRICE = 'low_price',
  NEWEST = 'newest',
  OLDEST = 'oldest'
}

export class GetAllproductDto extends PaginationDto {
  @IsOptional()
  @IsEnum(EnamProductSort)
  sort?: EnamProductSort

  @IsOptional()
  @IsString()
  searchTerm?: string

  @IsOptional()
  @IsString()
  rating?: string

  @IsOptional()
  @IsString()
  minPrice?: string

  @IsOptional()
  @IsString()
  maxPrice?: string

  @IsOptional()
  @IsString()
  categoryId?: string
}
