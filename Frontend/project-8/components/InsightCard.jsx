'use client';


import React from "react";

const InsightCard = ({imgUrl, title, subtitle}) => (
  <div className="w-full flex sm:flex-row flex-col text-white justify-between items-center gap-8">
    <div className="sm:w-[270px] sm:h-[250px] w-full max-h-[300px] rounded-3xl overflow-hidden">
      <img className="w-full h-full object-cover" src={imgUrl} alt="" />
    </div>
    <div className="flex-1 flex flex-col sm:items-start items-center">
      <h1 className="sm:text-[42px] text-[30px] sm:text-start text-center font-medium max-w-3xl">{title}</h1>
      <h3 className="sm:text-[16px] text-[14px] sm:text-start text-center text-slate-400 font-normal max-w-lg">{subtitle}</h3>
    </div>
    <div className="w-[100px] h-[100px] sm:block hidden border-2 rounded-full p-7 hover:rotate-[30deg] transition-all duration-700">
      <img className="w-full h-full" src="/arrow.svg" alt="" />
    </div>
  </div>
);

export default InsightCard;
