import { Request, Response } from "express";
import * as Model from "../model";

class PostsController {
    /**
     * @description 取得所有資料
     * @param {Request} req
     * @param {Response} res
     * @return {*}  {Promise<void>}
     * @memberof PostsController
     */
    getPosts = async (req: Request, res: Response): Promise<void> => {
        const { sort, keyword } = req.query;
        const result = await Model.Posts.find(keyword ? { content: new RegExp(`${keyword}`) } : {})
            .populate({ path: "user", select: "name photo" })
            .sort(`${sort === "new" ? "-" : ""}createdAt`);
        res.send({ status: "success", result });
    };

    /**
     * @description 新增單筆資料
     * @param {Request} req
     * @param {Response} res
     * @return {*}  {Promise<void>}
     * @memberof PostsController
     */
    createPosts = async (req: Request, res: Response): Promise<void> => {
        try {
            const { content, type, user, image } = req.body;
            const result = await Model.Posts.create({ content, type, user, image });
            res.send({ status: "success", result });
        } catch (error: any) {
            res.status(400).send({ status: "error", message: error.message });
        }
    };

    /**
     * @description 刪除所有資料
     * @param {Request} req
     * @param {Response} res
     * @return {*}  {Promise<void>}
     * @memberof PostsController
     */
    deleteAll = async (req: Request, res: Response): Promise<void> => {
        await Model.Posts.deleteMany({});
        res.send({ status: "success", message: "刪除成功" });
    };

    /**
     * @description 編輯單筆資料
     * @param {Request} req
     * @param {Response} res
     * @return {*}  {Promise<void>}
     * @memberof PostsController
     */
    editPosts = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { content, type, name } = req.body;
        try {
            await Model.Posts.findByIdAndUpdate(id, { content, type, name });
            const result = await Model.Posts.findById(id);
            res.send({ status: "success", result });
        } catch (error: any) {
            res.status(400).send({ status: "error", message: error.message });
        }
    };

    /**
     * @description 刪除單筆資料
     * @param {Request} req
     * @param {Response} res
     * @return {*}  {Promise<void>}
     * @memberof PostsController
     */
    deleteById = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const deleteResult = await Model.Posts.findByIdAndDelete(id);
        if (deleteResult) {
            res.send({ status: "success", message: "刪除成功" });
        } else {
            res.status(400).send({ status: "error", message: "無此 id" });
        }
    };
}

export default new PostsController();
