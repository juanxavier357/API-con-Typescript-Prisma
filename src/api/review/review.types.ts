import { reviews as reviewsModel, Prisma } from '@prisma/client'

export type reviews = reviewsModel

export type reviewsType =
    | Prisma.reviewsWhereInput
    | Prisma.reviewsWhereUniqueInput
    | Prisma.reviewsCreateInput
    | Prisma.reviewsUpdateInput
    | Prisma.reviewsDeleteArgs