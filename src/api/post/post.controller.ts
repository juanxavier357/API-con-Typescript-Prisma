import { Request, Response } from "express";

import {
    getAllPost,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} from './post.service'

export async function getAllPostHandler(req: Request, res: Response) {
    const posts = await getAllPost()

    return res.json(posts)
}

export async function getPostHandler(req: Request, res: Response) {
    const { id } = req.params

    const post = await getPostById(id)

    if (!post) {
        return res.status(404).json({
            message:'Post not found',
        })
    }

    return res.status(200).json(post)
}

export async function createPostHandler(req: Request, res: Response) {
    const data = req.body

    if (!data.title || !data.content) {
        return res.status(400).json({
            error: "Title or content is missing",
        });
    }

    const posts = await getAllPost();
    const existingPost = posts.find((post) => post.title === data.title);
  
    if (existingPost) {
      return res.status(400).json({
        error: "Title must be unique",
      });
    }

    const post = await createPost(data)

    return res.status(201).json(post)
}

export async function updatePostHandler(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const post = await updatePost(id, data);
    if (!post) {
        return res.status(404).json({
            message: "Post not Found",
        });
    }
    return res.status(202).json(post);
}

export async function deletePostHandler(req: Request, res: Response) {
    const { id } = req.params

    const post = await getPostById(id)

    if (!post) {
        return res.status(404).json({
            message: 'Post not found',
        })
    }

    await deletePost(id)

    return res.json({ message: 'Post deleted' })
}