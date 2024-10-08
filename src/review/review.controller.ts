import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { ReviewService } from './review.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { ReviewDto } from './reviewDto'

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UsePipes(new ValidationPipe())
  @Auth('admin')
  @Get()
  async getAll() {
    return this.reviewService.getAllreviews()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('leave/:productId')
  async leaveReview(
    @CurrentUser('id') id: number,
    @Body() dto: ReviewDto,
    @Param('productId') productId: number
  ) {
    return this.reviewService.create(id, dto, +productId)
  }

  @Get('averege-by-product/:productId')
  async getAverageByProduct(@Param('productId') productId: string) {
    return this.reviewService.getAverageValueByProductId(+productId)
  }
}
