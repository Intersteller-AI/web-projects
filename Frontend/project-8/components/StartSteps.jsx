import React from "react";

const StartSteps = ({ number, text }) => (
  <div className="flex items-center justify-center gap-4">
    <div className="w-[70px] h-[70px] flex justify-center items-center rounded-3xl bg-[#323f5d]">
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>
    <h2 className="max-w-[400px] text-[18px] font-medium text-slate-300">{text}</h2>
  </div>
);

export default StartSteps;
