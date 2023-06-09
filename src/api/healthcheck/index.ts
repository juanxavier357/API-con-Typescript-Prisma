import { Router } from 'express'

import healthckeckHandler from './healthcheck.controller'

const router = Router()

router.get('/', healthckeckHandler)

export default router