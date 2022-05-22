"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var Controller = __importStar(require("../controller"));
var utils_1 = __importDefault(require("../utils"));
var router = utils_1.default.catchAsyncRouter(express_1.default.Router());
var upload = (0, multer_1.default)({
    // 限制上傳檔案的大小為 10 MB
    limits: { fileSize: 10 * Math.pow(1024, 2) },
    fileFilter: function (req, file, callback) {
        // 只接受三種圖片格式
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            callback(new Error("請上傳正確的檔案格式"));
            return;
        }
        // 若接受該檔案，呼叫 cb() 並帶入 true
        callback(null, true);
    },
});
router.post("/", upload.single("image"), Controller.Image.getImage);
exports.default = router;
