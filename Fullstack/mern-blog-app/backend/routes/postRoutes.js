// @ts-nocheck
import express from "express";
import {
  createPost,
  deletePost,
  deletePostPic,
  getAllPosts,
  getPost,
  getPostPic,
  likePost,
  updatePost,
  uploadPostPic,
} from "../controllers/postControllers";
import { authGuard } from "../middleware/authMiddleware";
import upload from "../middleware/upload";

const router = express.Router();

router.route("/").post(authGuard, createPost).get(getAllPosts);
router
  .route("/:slug")
  .put(authGuard, updatePost)
  .delete(authGuard, deletePost)
  .get(getPost);

router.post("/upload", authGuard, upload.single("postPicture"), uploadPostPic);
router.get("/upload/:filename", getPostPic);
router.delete("/upload/:filename", authGuard, deletePostPic);
router.post("/likePost/:slug", authGuard, likePost);

export default router;
