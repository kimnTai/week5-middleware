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
}

const exception = new Exception();

export { exception };
