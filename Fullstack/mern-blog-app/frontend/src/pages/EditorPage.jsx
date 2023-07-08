// @ts-nocheck
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Input } from "../components/editor";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import parse from "html-react-parser";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbPhotoPlus } from "react-icons/tb";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  createPost,
  deletePostImage,
  updatePost,
  uploadPostImage,
} from "../services/index/posts";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/reducers/post";

const EditorPage = () => {
  const postInfo = useSelector((state) => state.post);
  const [isUpadating, setIsUpadating] = useState(false);
  const dispatch = useDispatch();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [modal, setModal] = useState(false);
  const [post, setPost] = useState({
    title: "",
    caption: "",
    body: "",
    postPicture: "",
  });
  const [postSlug, setPostSlug] = useState(null);

  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const currentLocation =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  const [file, setFile] = useState("");
  // uploading post thumbnail
  const { mutate, isLoading } = useMutation({
    mutationFn: (formData) => uploadPostImage({ formData: formData }),
    onSuccess: (data) => {
      setPost({ ...post, postPicture: data });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // to delete the thumbnail
  const { mutate: mutateDeleteImage, isLoading: isLoadingDeleteImage } =
    useMutation({
      mutationFn: () => {
        const filename = post.postPicture.split("upload/")[1];
        return deletePostImage({ filename });
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["profile"]);
        toast.success("Photo is removed");
        const formData = new FormData();
        formData.append("postPicture", undefined);
        setPost({ ...post, postPicture: "" });
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const newForm = new FormData();
        newForm.append("name", file.name);
        newForm.append("postPicture", file);
        mutate(newForm);
      }
    };
    getImage();
  }, [file, mutate]);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [HTMLContent, setHTMLContent] = useState("");

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setHTMLContent(html);
  }, [editorState]);

  useEffect(() => {
    setPost({ ...post, body: String(HTMLContent) });
  }, [HTMLContent]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [modal, currentLocation]);

  const handleDeleteImage = () => {
    if (window.confirm("Do you want to delete your profile picture")) {
      try {
        mutateDeleteImage();
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    }
  };

  const { mutate: submitMutate } = useMutation({
    mutationFn: ({ formData }) => createPost({ formData }),
    onSuccess: () => {
      toast.success("Post created successfully");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleClickClose = () => {
    setModal(false);
    if (post.postPicture) {
      handleDeleteImage();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", post.title);
    formData.append("body", post.body);
    formData.append("postPicture", post.postPicture);
    formData.append("caption", post.caption);

    submitMutate({ formData });
  };

  const { mutate: updateMutate } = useMutation({
    mutationFn: ({ formData, slug }) => updatePost({ formData, slug }),
    onSuccess: () => {
      toast.success("Post updated successfully");
      dispatch(postActions.resetPostInfo());
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (postInfo.userPost) {
      setIsUpadating(true);
      setPost({
        title: postInfo?.userPost.title,
        caption: postInfo?.userPost.caption,
        postPicture:
          postInfo?.userPost.photo === "images/sample.jpg"
            ? ""
            : postInfo.userPost.photo,
        body: setHTMLContent(postInfo?.userPost.body),
      });
      setPostSlug(postInfo?.userPost.slug);
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", post.title);
    formData.append("body", post.body);
    formData.append("postPicture", post.postPicture);
    formData.append("caption", post.caption);

    console.log(postSlug);
    updateMutate({ formData, slug: postSlug });
  };
  return (
    <div className="min-h-screen px-8 md:px-36 flex flex-col relative overflow-hidden">
      <h1 className="self-center font-semibold md:text-[28px]">
        Create a new blog
      </h1>
      <hr className="w-full bg-gray-400 mt-3" />
      <div className="mt-6">
        <div
          className={`absolute w-full h-full bg-white z-10 ${
            modal ? "block" : "hidden"
          } opacity-70`}
        />
        <form
          method="post"
          className="flex flex-col gap-6"
          onSubmit={isUpadating ? handleUpdate : handleSubmit}
        >
          <Input
            onChange={handleChange}
            value={post.title}
            label="title"
            className="text-lg md:text-[24px]"
          />
          <div className={`w-full overflow-hidden my-4`}>
            <h1 className="mb-3 text-xl font-semibold">Body</h1>
            {/* pagination indicators */}
            <div className="w-full flex items-center">
              <div className="flex items-center justify-center rounded-t-[3px] overflow-hidden">
                <span
                  className={`indicator font-normal text-[16px] md:text-[20px] cursor-pointer px-2 bg-slate-200 ${
                    currentSlide === 0 ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(0)}
                >
                  Editor
                </span>
                <span
                  className={`indicator font-normal text-[16px] md:text-[20px] cursor-pointer px-2 bg-slate-200 ${
                    currentSlide === 1 ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(1)}
                >
                  Html Editor
                </span>
                <span
                  onClick={() => setCurrentSlide(2)}
                  className={`indicator font-normal text-[16px] md:text-[20px] cursor-pointer px-2 bg-slate-200 ${
                    currentSlide === 2 ? "active" : ""
                  }`}
                >
                  Preview
                </span>
              </div>
            </div>
            {/* slides */}
            <div className="overflow-x-hidden w-full h-full">
              <div
                className="slides-inner w-full h-full transition duration-200 flex snap-mandatory snap-x"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div
                  className="w-full h-full snap-center flex-shrink-0"
                  id="slide-1"
                >
                  <div className="BodyEditor">
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={setEditorState}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                      toolbar={{
                        options: ["inline", "blockType"],
                      }}
                      hashtag={{
                        separator: " ",
                        trigger: "#",
                      }}
                      mention={{
                        separator: " ",
                        trigger: "@",
                        suggestions: [
                          {
                            text: "JavaScript",
                            value: "javascript",
                            url: "js",
                          },
                          { text: "Python", value: "python", url: "py" },
                        ],
                      }}
                    />
                  </div>
                </div>
                <div
                  className="w-full min-h-[40vh] snap-center p-2 border-2 border-slate-300 flex-shrink-0"
                  id="slide-2"
                >
                  <textarea
                    className="w-full h-full outline-none flex-wrap"
                    name="body"
                    type="text"
                    value={HTMLContent}
                    onChange={(e) => setHTMLContent(e.target.value)}
                  />
                </div>
                <div
                  className="w-full h-full snap-center p-2 border-2 border-slate-300 flex-shrink-0"
                  id="slide-3"
                >
                  <div className="preview min-h-[40vh]">
                    {parse(HTMLContent)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setModal(true)}
            type="button"
            className={`bg-black rounded-md px-4 py-2 text-white self-center text-2xl`}
          >
            Create
          </button>
          <div
            className={`z-20 flex flex-col duration-300 transition-opacity absolute md:top-0 md:translate-y-0 left-[50%] translate-x-[-50%] w-10/12 lg:w-1/2 bg-white drop-shadow-lg rounded-sm px-6 py-2 
            ${modal ? "opacity-100" : "opacity-0"} 
            ${modal ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            <AiOutlineCloseCircle
              onClick={handleClickClose}
              className="self-end text-black hover:text-red-400 mb-10"
              size={20}
            />
            <Input
              label="caption"
              onChange={handleChange}
              value={post.caption}
            />
            <div className="my-10 w-full flex flex-col items-center gap-4">
              <h1 className="self-start font-semibold text-lg">Thumbnail</h1>
              <div className="relative w-full md:h-56 h-[30vh] rounded-md border-2 border-blue-500 lutline-primary overflow-hidden">
                <label
                  htmlFor="postPicture"
                  className="cursor-pointer absolute inset-0 rounded-full bg-transparent"
                >
                  {post.postPicture ? (
                    <img
                      src={post.postPicture}
                      alt="postPic"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-50/50 flex justify-center items-center">
                      <TbPhotoPlus className="w-7 h-auto text-primary" />
                    </div>
                  )}
                  {isLoading && (
                    <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">
                      <img
                        className="w-28 h-28"
                        src="/Infinity-loader.svg"
                        alt=""
                      />
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  className="sr-only"
                  id="postPicture"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {post.postPicture && (
                <button
                  disabled={isLoadingDeleteImage}
                  onClick={handleDeleteImage}
                  type="button"
                  className={`border border-red-500 hover:text-white hover:bg-red-500 transition duration-150 rounded-md px-4 py-2 md:text-[14px] font-normal text-red-500 disabled:bg-red-400`}
                >
                  Remove
                </button>
              )}
              <button
                disabled={isLoading}
                type="submit"
                className={`bg-green-500 disabled:bg-green-200 rounded-md px-4 py-2 text-white self-center text-lg mt-4`}
              >
                {isUpadating ? "Update" : "Publish"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditorPage;
