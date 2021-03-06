"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: [true, "用戶名稱未填寫"] },
    email: { type: String, required: [true, "email 未填寫"] },
    photo: { type: String, default: "https://i.imgur.com/tPmUQVM.png" },
}, { versionKey: false, timestamps: true });
var Users = mongoose_1.default.model("user", userSchema);
exports.default = Users;
