import { Router } from 'express'

import {
    getAllUserHandler,
    getUserHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
} from './user.controller'

const router = Router()

// /api/users --> GET
router.get('/', getAllUserHandler)

// /api/users/:id --> GET
router.get('/:id', getUserHandler)

// /api/users --> POST
router.post('/', createUserHandler)

// /api/users/:id --> PATCH
router.patch('/:id', updateUserHandler)

// /api/users/:id --> DELETE
router.delete('/:id', deleteUserHandler)

export default router

