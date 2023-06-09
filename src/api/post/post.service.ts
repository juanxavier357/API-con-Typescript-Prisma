import { PrismaClient } from "@prisma/client";

import { posts } from './post.types'

const prisma = new PrismaClient()

// Query with prisma client

export async function getAllPost() {
    const posts = await prisma.posts.findMany()
    return posts
}

export async function getPostById(id: string) {
    const post = await prisma.posts.findUnique({
        where: {
            id,
        },
    })

    return post
}

export async function createPost(data: posts) {
    const post = await prisma.posts.create({
        data,
    })

    return post
}

export async function updatePost(id: string, data: posts) {
    const user = await prisma.users.update({
        where: {
            id,
        },
        data: {
            ...data
        }
    })

    return user
}

export async function deletePost(id: string) {
    const post = await prisma.posts.delete({
        where: {
            id,
        },
    })

    return post
}