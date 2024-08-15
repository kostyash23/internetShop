import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { OrderDto } from './order.dto'
import { productReturnObject } from 'src/product/return-product-object'

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.order.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        items: {
          include: {
            product: {
              select: productReturnObject
            }
          }
        }
      }
    })
  }

  async getByUserId(userId: number) {
    return this.prisma.order.findMany({
      where: {
        userId
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        items: {
          include: {
            product: {
              select: productReturnObject
            }
          }
        }
      }
    })
  }

  async pleaceOrder(dto: OrderDto, userId: number) {
    const total = dto.items.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)

    const order = await this.prisma.order.create({
      data: {
        status: dto.status,
        items: {
          create: dto.items
        },
        total,
        user: {
          connect: {
            id: userId
          }
        }
      }
    })
    return order
  }
}
