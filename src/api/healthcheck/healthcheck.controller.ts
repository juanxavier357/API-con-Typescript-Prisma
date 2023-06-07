import { Request, Response } from "express"

function healthcheckHandler(req: Request, res: Response) {
    return res.status(200).json({
        uptime: process.uptime(),
        message: 'OK'
    })
}

export default healthcheckHandler