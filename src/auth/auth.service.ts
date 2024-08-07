import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { AuthDto } from './dto/auth.dto'
import { faker } from '@faker-js/faker'
import { hash, verify } from 'argon2'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { RefreshTokenDto } from './dto/refreshToken.dto'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService
  ) {}

  async login(dto: AuthDto) {
    const user = await this.validateUser(dto)
    const tokens = await this.issuesToken(user.id)

    return {
      user: this.returnUserFilds(user),
      ...tokens
    }
  }

  async getNewToken(dto: RefreshTokenDto) {
    const result = await this.jwt.verifyAsync(dto.refreshToken)

    if (!result) throw new UnauthorizedException('invalid refrosh token')

    const user = await this.prisma.user.findUnique({
      where: {
        id: result.id
      }
    })

    const tokens = await this.issuesToken(user.id)

    return {
      user: this.returnUserFilds(user),
      ...tokens
    }
  }

  async register(dto: AuthDto) {
    const oldUser = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    })

    if (oldUser) throw new BadRequestException('User alredy exists')

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: faker.name.firstName(),
        avatarPath: faker.image.avatar(),
        phone: faker.phone.number('+380 ## ### ## ##'),
        password: await hash(dto.password)
      }
    })

    const tokens = await this.issuesToken(user.id)

    return {
      user: this.returnUserFilds(user),
      ...tokens
    }
  }

  private async issuesToken(userId: number) {
    const data = { id: userId }

    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h'
    })
    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d'
    })

    return { accessToken, refreshToken }
  }

  private returnUserFilds(user: User) {
    return {
      id: user.id,
      email: user.email
    }
  }

  private async validateUser(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    })

    if (!user) throw new NotFoundException('User not found')

    const isValid = await verify(user.password, dto.password)

    if (!isValid) throw new UnauthorizedException('Invalid password')

    return user
  }
}
