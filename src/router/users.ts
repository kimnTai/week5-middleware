import express from "express";
import * as Controller from "../controller";

const router = express.Router();

router.get("/", Controller.User.getUsers);

router.post("/", Controller.User.createUsers);

export default router;
