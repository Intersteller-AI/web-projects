import React from "react";
import { BiImageAlt } from "react-icons/bi";


const ArticleDetailSkeleton = () => {
  return (
    <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start animate-pulse">
      <article className="flex-1">
        {/* post image */}
        <div className="rounded-xl w-full aspect-video bg-slate-300 flex justify-center items-center">
          <BiImageAlt className="text-4xl text-slate-400" />
        </div>
        {/* title */}
        <div className="mt-4 md:text-[26px] w-2/5 h-2 rounded-lg bg-slate-400" />
        <div className="mt-4 prose prose-sm sm:prose-base">
          <p className="w-1/2 h-2 mt-6 rounded-lg bg-slate-300"></p>
          <p className="w-full h-2 mt-4 rounded-lg bg-slate-300"></p>
          <p className="w-[70%] h-2 mt-4 rounded-lg bg-slate-300"></p>
          <p className="w-4/5 h-2 mt-4 rounded-lg bg-slate-300"></p>
        </div>
      </article>
    </section>
  );
};

export default ArticleDetailSkeleton;
