import { Application } from 'express'

import healthcheckRouter from './api/healthcheck'
import userRouter from './api/user'
import postRouter from './api/post'
import reviewRouter from './api/review'

function routes(app: Application) {
    app.use('/api/healthcheck', healthcheckRouter)
    app.use('/api/users', userRouter)
    app.use('/api/posts', postRouter)
    app.use('/api/reviews', reviewRouter)
}

export default routes