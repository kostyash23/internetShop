import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CategoryDto } from './categoryDto'

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategory() {
    return this.categoryService.getAll()
  }
  @Get('by-slug/:slug')
  async getBySlug(@Param('slug') slug: string) {
    return this.categoryService.bySlyg(slug)
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.categoryService.byId(+id)
  }

  @HttpCode(200)
  @Auth('admin')
  @Post()
  async create() {
    return this.categoryService.create()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth('admin')
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: CategoryDto) {
    return this.categoryService.update(+id, dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth('admin')
  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.categoryService.delete(+id)
  }
}
