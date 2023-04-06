import React from "react";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-col text-white gap-2">
    <div
      className={`flex items-center justify-center w-[70px] h-[70px] rounded-[24px] glassmorphism mb-[16px]`}
    >
      <img
        src={imgUrl}
        alt="icons"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <h2 className="text-[24px] font-semibold">{title}</h2>
    <p className="sm:text-[16px] text-[14px] font-normal text-slate-300">{subtitle}</p>
  </div>
);

export default NewFeatures;
