"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const post_controllers_1 = require("../controllers/post.controllers");
router
  .route("/")
  .get(post_controllers_1.getPosts)
  .post(post_controllers_1.createPost);
router
  .route("/:postId")
  .get(post_controllers_1.getPost)
  .delete(post_controllers_1.deletePost)
  .put(post_controllers_1.updatePost);
exports.default = router;
