import { Router } from 'express'

import healthckeckHandler from './healthcheck.controller'

const router = Router()

router.get('/', healthckeckHandler)
// router.get('/db', userHandler)
// router.get('/socket', userHandler)
// router.get('/loggs', userHandler)

export default router