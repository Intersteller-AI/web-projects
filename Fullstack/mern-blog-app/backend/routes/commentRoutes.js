import express from "express";
import { createComment, deleteComment, updateComment } from "../controllers/commentControllers";
import { adminGuard, authGuard } from "../middleware/authMiddleware";

const router = express.Router();


router.post("/", authGuard, createComment);
router.route('/:commentId').put(authGuard, updateComment).delete(authGuard, deleteComment)


export default router;
