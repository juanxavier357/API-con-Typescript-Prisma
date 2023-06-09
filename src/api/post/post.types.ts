import { posts as postsModel, Prisma } from '@prisma/client'

export type posts = postsModel

export type postsType =
    | Prisma.postsWhereInput
    | Prisma.postsWhereUniqueInput
    | Prisma.postsCreateInput
    | Prisma.postsUpdateInput
    | Prisma.postsDeleteArgs