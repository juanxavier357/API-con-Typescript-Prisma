import { Router } from 'express'

import {
    getAllReviewHandler,
    getReviewHandler,
    createReviewHandler,
    updateReviewHandler,
    deleteReviewHandler,
} from './review.controller'

const router = Router()

// /api/reviews --> GET
router.get('/', getAllReviewHandler)

// /api/reviews/:id --> GET
router.get('/:id', getReviewHandler)

// /api/reviews --> POST
router.post('/', createReviewHandler)

// /api/reviews/:id --> PATCH
router.patch('/:id', updateReviewHandler)

// /api/reviews/:id --> DELETE
router.delete('/:id', deleteReviewHandler)

export default router

