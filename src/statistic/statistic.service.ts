import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'

@Injectable()
export class StatisticService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService
  ) {}

  async getMain(userId: number) {

    const orderCount = await this.prisma.order.count()
    const userCount = await this.prisma.user.count()
    const reviewCount = await this.prisma.review.count()

    const total = this.prisma.order.aggregate({
      _sum: {
        total: true
      }
    })
    const user = await this.userService.byId(userId, {
      orders: {
        select: {
          items: true
        }
      },
      reviews: true
    })

    return [
      {
        name: 'Orders',
        value: orderCount
      },
      {
        name: 'Review',
        value: userCount
      },
      {
        name: 'Favorites',
        value: reviewCount
      },
      {
        name: 'Orders',
        value: total
      }
    ]
  }
}
