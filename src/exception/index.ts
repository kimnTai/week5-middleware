import { ErrorRequestHandler, Request, Response } from "express";

class Exception {
    constructor() {
        // 初始化，捕捉全域錯誤
        process.on("uncaughtException", (error) => {
            console.error("未捕獲的異常！");
            console.error(error);
            process.exit(1);
        });

        process.on("unhandledRejection", (reason, promise) => {
            console.error("未捕捉到的 rejection :", promise, "原因：", reason);
        });
    }

    /**
     * @description 無此路由錯誤
     * @param {Request} req
     * @param {Response} res
     * @memberof Exception
     */
    notFindRoute = (req: Request, res: Response) => {
        res.status(404).send({ status: "error", message: "無此路由資訊" });
    };

    /**
     * @description 捕捉自訂錯誤
     * @param {*} err
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @type {ErrorRequestHandler}
     * @memberof Exception
     */
    catchCustomError: ErrorRequestHandler = (err, req, res, next) => {
        res.status(500).send({ status: "error", message: err.message });
    };
}

const exception = new Exception();

export { exception };
