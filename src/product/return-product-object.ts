import { returnCategoryObject } from 'src/category/return-category.object'
import { returnReviewObject } from './../review/returtn-review.object'
import { Prisma } from '@prisma/client'

export const productReturnObject: Prisma.ProductSelect = {
  images: true,
  description: true,
  id: true,
  price: true,
  createdAt: true,
  slug: true,
  name: true,
  category: {
    select: returnCategoryObject
  },
  reviews: {
    select: {
      ...returnReviewObject
    },
    orderBy: {
      createdAt: 'desc'
    }
  }
}

export const productReturnObjectFullset: Prisma.ProductSelect = {
  ...productReturnObject,
  reviews: {
    select: {
      ...returnReviewObject
    }
  },
  category: {
    select: returnCategoryObject
  }
}
