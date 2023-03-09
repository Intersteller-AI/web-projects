import React from "react";

const InfoTag = ({
  Icon,
  heading,
  number,
  dol = false,
  statVal,
  stat = "+",
  iconClass = "24",
}) => {
  return (
    <div className="ss:w-[290px] w-[175px] flex items-end justify-between ss:py-3 ss:px-4 px-3 py-2 bg-[#fffefe] rounded-xl drop-shadow-md hover:cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-blue-400 rounded-[10px]">
          <Icon className={`text-white ss:text-[24px] text-[16px]`} />
        </div>
        <div>
          <h4 className="ss:text-[12px] text-[10px] font-medium text-slate-500 capitalize">
            {heading}
          </h4>
          <p className="ss:text-[18px] text-[14px] font-semibold">
            {dol ? "$" : ""}
            {number}
          </p>
        </div>
      </div>
      <div>
        {" "}
        <code
          className={`ss:text-[12px] text-[8px] ${
            stat === "+" ? "bg-green-100" : "bg-red-100"
          } ${
            stat === "+" ? "text-green-500" : "text-red-500"
          } py-1 px-2 rounded-full`}
        >
          {stat} {statVal}%
        </code>
      </div>
    </div>
  );
};

export default InfoTag;
