import { returnUserObject } from './../user/return-user.object'
import { Prisma } from '@prisma/client'

export const returnReviewObject: Prisma.ReviewSelect = {
  user: {
    select: { ...returnUserObject }
  },
  createdAt: true,
  text: true,
  rating: true,
  id: true
}
