import express from "express";
import * as Controller from "../controller";
import * as Service from "../service";
import Utils from "../utils";

const router = express.Router();

router.get("/", Utils.catchAsync(Controller.Post.getPosts));

router.post("/", Service.image.handle, Utils.catchAsync(Controller.Post.createPosts));

router.delete("/:id", Utils.catchAsync(Controller.Post.deleteById));

router.patch("/:id", Utils.catchAsync(Controller.Post.editPosts));

export default router;
