import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnUserObject } from './return-user.object'
import { UserDto } from './user.dto'
import { hash } from 'argon2'
import { Prisma } from '@prisma/client'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async byId(id: number, selectOject: Prisma.UserSelect = {}) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      },
      select: {
        ...returnUserObject,
        favorites: {
          select: {
            id: true,
            name: true,
            price: true,
            images: true,
            slug: true,
            category: {
              select: {
                slug: true
              }
            },
            reviews: true
          }
        },
        ...selectOject
      }
    })

    if (!user) throw new Error('User not found')

    return user
  }

  async updateUserProfile(id: number, dto: UserDto) {
    const isSameUser = await this.prisma.user.findUnique({
      where: { email: dto.email }
    })
    if (isSameUser && id === isSameUser.id)
      throw new BadRequestException('Email already in use')

    const user = await this.byId(id)

    return this.prisma.user.update({
      where: {
        id
      },
      data: {
        email: dto.email,
        name: dto.name,
        avatarPath: dto.avatarPath,
        phone: dto.phone,
        password: dto.password ? await hash(dto.password) : user.password
      }
    })
  }

  async toggleFavorite(userId: number, productId: number) {
    const user = await this.byId(userId)

    if (!user) throw new NotFoundException('User not found')
    const isExists = user.favorites.some((product) => product.id === productId)
    return this.prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        favorites: {
          [isExists ? 'disconnect' : 'connect']: {
            id: +productId
          }
        }
      }
    })
  }
}
