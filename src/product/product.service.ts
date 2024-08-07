import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import {
  productReturnObject,
  productReturnObjectFullset
} from './return-product-object'
import { ProductDto } from './productDto'
import { generateSlug } from 'src/utils/generate-slug'
import { EnamProductSort, GetAllproductDto } from './get-all.product.dto'
import { Prisma } from '@prisma/client'
import { PaginationService } from 'src/pagination/pagination.service'

@Injectable()
export class ProductService {
  constructor(
    private prisma: PrismaService,
    private paginationService: PaginationService
  ) {}

  async getAll(dto: GetAllproductDto = {}) {
    const { sort, serchTerm } = dto

    const prismaSort: Prisma.ProductOrderByWithRelationInput[] = []

    if (sort === EnamProductSort.HIGH_PRICE) {
      prismaSort.push({ price: 'desc' })
    } else if (sort === EnamProductSort.LOW_PRICE) {
      prismaSort.push({ price: 'asc' })
    } else if (sort === EnamProductSort.NEWEST) {
      prismaSort.push({ createdAt: 'asc' })
    } else {
      prismaSort.push({ createdAt: 'desc' })
    }

    const prismaSearchTermFilter: Prisma.ProductWhereInput = serchTerm
      ? {
          OR: [
            {
              category: {
                name: {
                  contains: serchTerm,
                  mode: 'insensitive'
                }
              }
            },
            {
              name: {
                contains: serchTerm,
                mode: 'insensitive'
              }
            },
            {
              description: {
                contains: serchTerm,
                mode: 'insensitive'
              }
            }
          ]
        }
      : {}

    const { perPage, skip } = this.paginationService.getPagination(dto)
    const products = await this.prisma.product.findMany({
      where: prismaSearchTermFilter,
      orderBy: prismaSort,
      skip,
      take: perPage,
      select: productReturnObject
    })

    return {
      products,
      length: await this.prisma.product.count({
        where: prismaSearchTermFilter
      })
    }
  }

  async byId(id: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id
      },
      select: {
        ...productReturnObjectFullset
      }
    })

    if (!product) throw new NotFoundException('Product not found')

    return product
  }

  async bySlyg(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        slug
      },
      select: productReturnObjectFullset
    })

    if (!product) throw new NotFoundException('Product not found')

    return product
  }

  async byCategory(categorySlug: string) {
    const products = this.prisma.product.findMany({
      where: {
        category: {
          slug: categorySlug
        }
      },
      select: productReturnObjectFullset
    })
    if (!products) throw new NotFoundException('Product not found')

    return products
  }

  async getSimilar(id: number) {
    const currentProduct = await this.byId(id)

    if (!currentProduct)
      throw new NotFoundException(' Current product not found')

    const products = this.prisma.product.findMany({
      where: {
        category: {
          name: currentProduct.category.name
        },
        NOT: {
          id: currentProduct.id
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      select: productReturnObject
    })

    return products
  }

  async create() {
    const product = await this.prisma.product.create({
      data: {
        description: '',
        name: '',
        price: 0,
        slug: '',
        category: {
          connect: {
            id: 1 // Provide the category ID or change this logic to dynamically select the category
          }
        }
      }
    })
    return product.id
  }

  async update(id: number, dto: ProductDto) {
    const { description, images, price, name, categoryId } = dto

    const product = await this.prisma.product.update({
      where: {
        id
      },
      data: {
        description,
        images,
        price,
        name,
        slug: generateSlug(name),
        category: {
          connect: {
            id: categoryId
          }
        }
      }
    })
    return product
  }

  async delete(id: number) {
    return this.prisma.product.delete({ where: { id } })
  }
}
