import { PrismaClient } from "@prisma/client";

import { reviews } from './review.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllReview() {
    const reviews = await prisma.reviews.findMany()
    return reviews
}

export async function getReviewById(id: string) {
    const review = await prisma.reviews.findUnique({
        where: {
            id,
        },
    })

    return review
}

export async function createReview(data: reviews) {
    const review = await prisma.reviews.create({
        data,
    })

    return review
}

export async function updateReview(id: string, data: reviews) {
    const review = await prisma.reviews.update({
        where: {
            id,
        },
        data: {
            ...data
        }
    })

    return review
}

export async function deleteReview(id: string) {
    const review = await prisma.reviews.delete({
        where: {
            id,
        },
    })

    return review
}