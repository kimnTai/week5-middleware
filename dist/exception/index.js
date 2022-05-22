"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exception = void 0;
var Exception = /** @class */ (function () {
    function Exception() {
        /**
         * @description 無此路由錯誤
         * @param {Request} req
         * @param {Response} res
         * @memberof Exception
         */
        this.notFindRoute = function (req, res) {
            res.status(404).send({ status: "error", message: "無此路由資訊" });
        };
        /**
         * @description 捕捉自訂錯誤
         * @param {CustomError} err
         * @param {Request} req
         * @param {Response} res
         * @param {NextFunction} next
         * @memberof Exception
         */
        this.catchCustomError = function (err, req, res, next) {
            if (err.name === "ValidationError" || err.name === "CastError") {
                return res.status(400).send({ status: "error", message: err.message });
            }
            if (err.type === "entity.parse.failed") {
                return res.status(400).send({ status: "error", message: err.type });
            }
            // 開發模式回傳錯誤訊息
            if (process.env.NODE_ENV === "dev") {
                return res.status(400).json({ status: "error", message: err.message, err: err });
            }
            res.status(500).send({ status: "error", message: "系統錯誤" });
        };
        // 初始化，捕捉全域錯誤
        process.on("uncaughtException", function (error) {
            console.error("未捕獲的異常！");
            console.error(error);
            process.exit(1);
        });
        process.on("unhandledRejection", function (reason, promise) {
            console.error("未捕捉到的 rejection :", promise, "原因：", reason);
        });
    }
    return Exception;
}());
var exception = new Exception();
exports.exception = exception;
