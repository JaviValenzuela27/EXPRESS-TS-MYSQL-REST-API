import { Router } from "express";

const router = Router();

import {
  getPosts,
  createPost,
  getPost,
  deletePost,
  updatePost,
} from "../controllers/post.controllers";

router.route("/").get(getPosts).post(createPost);

router.route("/:postId").get(getPost).delete(deletePost).put(updatePost);

export default router;
