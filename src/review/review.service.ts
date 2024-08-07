import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnReviewObject } from './returtn-review.object'
import { ReviewDto } from './reviewDto'

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async getAllreviews() {
    return this.prisma.review.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        ...returnReviewObject
      }
    })
  }

  async create(userId: number, dto: ReviewDto, productId: number) {
    return this.prisma.review.create({
      data: {
        ...dto,
        product: {
          connect: {
            id: productId
          }
        },
        user: {
          connect: {
            id: userId
          }
        }
      }
    })
  }

  async getAverageValueByProductId(productId: number) {
    return this.prisma.review
      .aggregate({
        where: {
          productId
        },
        _avg: { rating: true }
      })
      .then((data) => data._avg)
  }
}
