import { Injectable } from '@nestjs/common'
import { PaginationDto } from './paginationDto'

@Injectable()
export class PaginationService {
  getPagination(dto: PaginationDto, defaultPagination = 30) {
    const page = dto.page ? +dto.page : 1
    const perPage = dto.perPage ? +dto.perPage : defaultPagination

    const skip = (page - 1) * perPage

    return { perPage, skip }
  }
}
