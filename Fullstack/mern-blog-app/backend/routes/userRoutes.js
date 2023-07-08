// @ts-nocheck
import express from "express";
import {
  loginUser,
  registerUser,
  userProfile,
  updateProfile,
  logoutUser,
  getProfilePic,
  uploadProfilePic,
  deleteProfilePic,
} from "../controllers/userControllers";
import { authGuard } from "../middleware/authMiddleware";
import upload from "../middleware/upload";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", authGuard, logoutUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateProfile);
router.post(
  "/uploadProfilePic",
  authGuard,
  upload.single("profilePicture"),
  uploadProfilePic
);
router.get("/uploadProfilePic/:filename", getProfilePic);
router.delete("/deleteProfilePic", authGuard, deleteProfilePic);


export default router;
