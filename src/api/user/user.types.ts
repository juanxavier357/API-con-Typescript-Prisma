import { users as usersModel, PrismaClient, Prisma } from '@prisma/client'

export type users = usersModel

export type usersType =
    | Prisma.usersCreateInput
    | Prisma.usersUpdateInput
    | Prisma.usersWhereUniqueInput