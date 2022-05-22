import express from "express";
import * as Controller from "../controller";
import Utils from "../utils";

const router = express.Router();

router.get("/", Utils.catchAsync(Controller.User.getUsers));

router.post("/", Utils.catchAsync(Controller.User.createUsers));

export default router;
