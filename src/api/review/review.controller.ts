import { Request, Response } from "express";

import {
    getAllReview,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
} from './review.service'

export async function getAllReviewHandler(req: Request, res: Response) {
    const reviews = await getAllReview()

    return res.json(reviews)
}

export async function getReviewHandler(req: Request, res: Response) {
    const { id } = req.params

    const review = await getReviewById(id)

    if (!review) {
        return res.status(404).json({
            message: 'Review not found',
        })
    }

    return res.status(200).json(review)
}

export async function createReviewHandler(req: Request, res: Response) {
    const data = req.body

    if (!data.title || !data.comment) {
        return res.status(400).json({
            error: "Title or comment is missing",
        });
    }

    const reviews = await getAllReview();
    const existingReview = reviews.find((review) => review.title === data.title);
  
    if (existingReview) {
      return res.status(400).json({
        error: "Title must be unique",
      });
    }

    const review = await createReview(data)

    return res.status(201).json(review)
}

export async function updateReviewHandler(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const review = await updateReview(id, data);
    if (!review) {
      return res.status(404).json({
        message: "Review not Found",
      });
    }
    return res.status(202).json(review);
}

export async function deleteReviewHandler(req: Request, res: Response) {
    const { id } = req.params

    const review = await getReviewById(id)

    if (!review) {
        return res.status(404).json({
            message: 'Review not found',
        })
    }

    await deleteReview(id)

    return res.json({ message: 'Review deleted' })
}