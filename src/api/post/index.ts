import { Router } from 'express'

import {
    getAllPostHandler,
    getPostHandler,
    createPostHandler,
    updatePostHandler,
    deletePostHandler,
} from './post.controller'

const router = Router()

// /api/posts --> GET
router.get('/', getAllPostHandler)

// /api/posts/:id --> GET
router.get('/:id', getPostHandler)

// /api/posts --> POST
router.post('/', createPostHandler)

// /api/posts/:id --> PATCH
router.patch('/:id', updatePostHandler)

// /api/posts/:id --> DELETE
router.delete('/:id', deletePostHandler)

export default router

