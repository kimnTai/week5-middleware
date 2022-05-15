import express from "express";
import * as Controller from "../controller";
import * as Service from "../service";

const router = express.Router();

router.get("/", Controller.Post.getPosts);

router.post("/", Service.image.handle, Controller.Post.createPosts);

router.delete("/:id", Controller.Post.deleteById);

router.patch("/:id", Controller.Post.editPosts);

export default router;
