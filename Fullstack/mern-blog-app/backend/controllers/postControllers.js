// @ts-nocheck
import Post from "../models/Post";
import Comment from "../models/Comment";
import { v4 as uuidv4 } from "uuid";
import User from "../models/User";

import { gfs, gridfsBucket } from "../middleware/uploadPicMiddleware";
import mongoose from "mongoose";

const uploadPostPic = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error("image not found!");
      next(error);
    }

    const user = await User.findById(req.user._id);

    const url = "http://localhost:5000";

    if (user.holdImage) {
      const filename = user.holdImage.split("upload/")[1];
      const file = await gfs.files.findOne({ filename: filename });
      const obj_id = new mongoose.Types.ObjectId(file._id);

      gridfsBucket.delete(obj_id);
      user.holdImage = "";
      await user.save();
    }

    const holdImage = `${url}/api/posts/upload/${req.file.filename}`;

    user.holdImage = holdImage;
    await user.save();

    return res.status(200).json(holdImage);
  } catch (error) {
    next(error);
  }
};

const getPostPic = async (req, res) => {
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

const deletePostPic = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    const filename = req.params.filename;
    const file = await gfs.files.findOne({ filename: filename });
    const obj_id = new mongoose.Types.ObjectId(file._id);

    gridfsBucket.delete(obj_id);

    user.holdImage = "";
    await user.save();

    res.status(200).json({
      message: "image successfully deleted",
    });
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { title, postPicture, caption, body } = req.body;

    const post = new Post({
      title: title || "sample title",
      caption: caption || "sample caption",
      slug: uuidv4(),
      body: body || "<h1>sample body</h1>",
      user: req.user._id,
      photo: postPicture || "images/sample.jpg",
    });

    const loggedUser = await User.findOne({ _id: req.user._id });
    loggedUser.holdImage = "";
    loggedUser.posts.push(post._id);
    await loggedUser.save();

    const createdPost = await post.save();

    return res.json(createdPost);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });

    if (!post) {
      const error = new Error("Post aws not found");
      next(error);
      return;
    }
    const { title, postPicture, caption, body, tags, categories } = req.body;

    post.title = title || post.title;
    post.photo = postPicture || post.photo;
    post.caption = caption || post.caption;
    post.body = body || post.body;
    post.tags = tags || post.tags;
    post.categories = categories || post.categories;

    const updatedPost = await post.save();

    return res.json(updatedPost);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findOneAndDelete({ slug: req.params.slug });
    const user = await User.findById(req.user._id);

    if (!post) {
      const error = new Error("Post was not found");
      return next(error);
    }

    if (post.photo === "images/sample.jpg") {
      post.photo = "";
    }

    if (post.photo) {
      const filename = post.photo.split("upload/")[1];
      const file = await gfs.files.findOne({ filename: filename });
      const obj_id = new mongoose.Types.ObjectId(file._id);

      gridfsBucket.delete(obj_id);
    }

    user.posts = user.posts.filter(
      (postId) => postId.toString() !== post._id.toString()
    );
    await user.save();
    await Comment.deleteMany({ post: post._id });

    return res.json({
      message: "Post is successfully deleted",
    });
  } catch (error) {
    next(error);
  }
};

const getPost = async (req, res, next) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug }).populate([
      {
        path: "user",
        select: ["avatar", "name", "posts"],
      },
      {
        path: "comments",
        match: {
          check: true,
          parent: null,
        },
        populate: [
          {
            path: "user",
            select: ["avatar", "name"],
          },
          {
            path: "replies",
            match: {
              check: true,
            },
            populate: [
              {
                path: "user",
                select: ["avatar", "name"],
              },
            ],
          },
        ],
      },
    ]);

    if (!post) {
      const error = new Error("Post was not found");
      return next(error);
    }

    return res.json(post);
  } catch (error) {
    next(error);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const post = await Post.find({}).populate([
      {
        path: "user",
        select: ["avatar", "name", "verified"],
      },
    ]);
    return res.json(post);
  } catch (error) {
    next(error);
  }
};

const likePost = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.user._id });

    const post = await Post.findOne({ slug: req.params.slug });

    if (!post) {
      const error = new Error("Post was not found");
      next(error);
    }

    if (post.likes.indexOf(user._id) === -1) {
      post.likes.push(user._id);
    } else {
      post.likes.splice(post.likes.indexOf(user._id), 1);
    }
    await post.save();

    return res.json(post);
  } catch (error) {
    next(error);
  }
};

export {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
  uploadPostPic,
  getPostPic,
  deletePostPic,
  likePost,
};
