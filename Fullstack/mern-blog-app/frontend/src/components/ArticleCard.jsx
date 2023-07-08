/* eslint-disable react/prop-types */
// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { images } from "../constants";
import { Link } from "react-router-dom";

const ArticleCard = ({ post}) => {
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] flex flex-col`}
    >
      <div className="w-full flex-1">
        <Link to={`/articles/${post.slug}`}>
          <img
            src={post.photo ? post.photo : images.samplePostImage}
            alt="title"
            className="w-full h-full object-cover object-center"
          />
        </Link>
      </div>
      <div className="p-5">
        <Link to={`/articles/${post.slug}`}>
          <h2 className="w-full truncate font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
            {post.title}
          </h2>
          <p className="text-dark-light mt-3 text-sm md:text-lg w-full truncate">
            {post.caption}
          </p>
        </Link>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={post?.user?.avatar ? post.user.avatar : images.userImage}
              alt="post profile"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-bold capitalize text-dark-soft text-sm md:text-base">
                {post?.user?.name}
              </h4>
              <div className="flex items-center gap-x-2">
                <span
                  className={`${
                    post?.user?.verified ? "bg-[#36B37E]" : "bg-red-500"
                  } w-fit bg-opacity-20 rounded-full`}
                >
                  {post?.user?.verified ? (
                    <BsPatchCheckFill size={15} className="text-blue-500" />
                  ) : (
                    <AiOutlineClose className="w-1.5 h-1.5 text-red-500" />
                  )}
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  {post?.user?.verified ? "Verified" : "Unverified"} writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base">
            {new Date(post?.createdAt).getDate()}{" "}
            {new Date(post?.createdAt).toLocaleString("default", {
              month: "long",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
