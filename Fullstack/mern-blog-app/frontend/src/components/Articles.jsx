/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from "react";
import { FaArrowRight } from "react-icons/fa";

import ArticleCard from "./ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getAllPosts } from "../services/index/posts";
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import ErrorMessage from "./ErrorMessage";

const Articles = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className="article-cards">
        {isLoading ? (
          [...Array(3)].map((item, index) => (
            <ArticleCardSkeleton
              key={index}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />
          ))
        ) : isError ? (
          <ErrorMessage message='could not fetch the post data' />
        ) : (
          data.map((post) => (
            <ArticleCard
              post={post}
              key={post._id}
              className="md:h-[500px] h-[400px]"
            />
          ))
        )}
      </div>
      <button className="mt-10 mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>More articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
    </section>
  );
};

export default Articles;
