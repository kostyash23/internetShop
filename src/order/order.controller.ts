import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { OrderService } from './order.service'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { OrderDto } from './order.dto'

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @Auth('admin')
  getAllOrder(@CurrentUser('id') userId: number) {
    return this.orderService.getAll()
  }

  @Get('by-user')
  @Auth()
  getByUserId(@CurrentUser('id') userId: number) {
    return this.orderService.getByUserId(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  placeOrder(@Body() dto: OrderDto, @CurrentUser('id') userId: number) {
    return this.orderService.pleaceOrder(dto, userId)
  }
}
