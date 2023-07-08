// @ts-nocheck
import { gfs, gridfsBucket } from "../middleware/uploadPicMiddleware";
import User from "../models/User";
import mongoose from "mongoose";
import { sendToken } from "../utils/jwtToken";

// const sendToken = async (user, statusCode, res) => {
//   const token = await user.getJwtToken();

//   const options = {
//     expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
//     withCredentials: true,
//     httpOnly: false,
//     sameSite: "none",
//     secure: true,
//   };

//   const responseUser = {
//     _id: user._id,
//     email: user.email,
//     name: user.name,
//     avatar: user.avatar,
//     verified: user.verified,
//     admin: user.admin,
//   };

//   await res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user: responseUser,
//     token,
//   });
// };

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // check if the user is already exist
    let user = await User.findOne({ email });

    if (user) {
      throw new Error("user have already registered");
    }

    // creating a new user
    user = await User.create({
      name,
      email,
      password,
    });

    return sendToken(user, 201, res);
  } catch (err) {
    // return res.status(500).json({ message: "somthing went wrong" });
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Email not found");
    }

    if (await user.comparePassword(password)) {
      sendToken(user, 201, res);
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    next(error);
  }
};

const userProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: "posts",
      populate: {
        path: "user",
        select: ["avatar", "name", "verified"],
      },
    });

    if (user) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
        posts: user.posts,
      });
    } else {
      let error = new Error("User not found");

      error.statusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);

    if (!user) {
      throw new Error("user is not found");
    }
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      throw new Error("this email is already registered, please try another");
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password && req.body.password.length < 6) {
      throw new Error("password length must be at least 6 characters");
    } else if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUserProfile = await user.save();

    sendToken(updatedUserProfile, 201, res);
  } catch (error) {
    next(error);
  }
};

const uploadProfilePic = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error("image not found!");
      next(error);
    }

    const user = await User.findById(req.user._id);

    const url = "http://localhost:5000";
    if (user.avatar) {
      const filename = user.avatar.split("uploadProfilePic/")[1];
      const file = await gfs.files.findOne({ filename: filename });
      const obj_id = new mongoose.Types.ObjectId(file._id);

      gridfsBucket.delete(obj_id);
      user.avatar = "";
      await user.save();
    }

    const avatar = `${url}/api/users/uploadProfilePic/${req.file.filename}`;

    user.avatar = avatar;
    await user.save();

    res.status(200).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      token: await user.getJwtToken(),
    });
  } catch (error) {
    next(error);
  }
};

const getProfilePic = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    // const readStream = gfs.createReadStream(file.filename);
    // readStream.pipe(res);
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteProfilePic = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    const filename = user.avatar.split("uploadProfilePic/")[1];
    const file = await gfs.files.findOne({ filename: filename });
    const obj_id = new mongoose.Types.ObjectId(file._id);

    gridfsBucket.delete(obj_id);

    user.avatar = "";
    await user.save();

    res.status(200).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      token: await user.getJwtToken(),
    });
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(201).json({
      success: true,
      message: "Log out successful!",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};


export {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  uploadProfilePic,
  getProfilePic,
  deleteProfilePic,
  logoutUser,
};
