import { Request, Response, NextFunction } from "express";

class Utils {
    static catchAsync(func: any) {
        return (req: Request, res: Response, next: NextFunction) => {
            func(req, res, next).catch(next);
        };
    }
}

export default Utils;
