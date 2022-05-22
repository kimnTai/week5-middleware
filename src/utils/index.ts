import { Request, Response, NextFunction, RequestHandler } from "express";

class Utils {
    catchAsync(func: RequestHandler) {
        return (req: Request, res: Response, next: NextFunction) => {
            Promise.resolve(func(req, res, next)).catch(next);
        };
    }
}

export default new Utils();
