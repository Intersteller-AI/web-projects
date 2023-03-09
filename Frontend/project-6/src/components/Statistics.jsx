import React from "react";
import InfoTag from "./InfoTag";
import { BiPieChart } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import MainChart from "./MainChart";
import { BsThreeDots } from "react-icons/bs";
import { linechart, piechart } from "../assets";
import { topProduct } from "../contants";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TopHeading = ({ heading, showSelect = true, SecondPrm }) => {
  const data = [
    { value: "Yearly", name: "Yearly" },
    { value: "Monthly", name: "Monthly" },
    { value: "Weekly", name: "Weekly" },
    { value: "Daily", name: "Daily" },
    { value: "Hourly", name: "Hourly" },
  ];

  return (
    <div className="flex justify-between">
      <h1 className="font-medium capitalize sm:text-[15px] text-[12px]">
        {heading}
      </h1>
      {showSelect ? (
        <select
          name="time"
          className="bg-transparent text-[16px] cursor-pointer rounded-lg outline-none text-slate-500"
        >
          {data.map((val, index) => {
            return (
              <option className="sm:text-[14px] text-[8px] leading-3" key={index} value={val.value}>
                {val.name}
              </option>
            );
          })}
        </select>
      ) : (
        <SecondPrm className="hover:cursor-pointer" />
      )}
    </div>
  );
};

const TopProduct = ({ id, heading, transaction, sidemoney }) => (
  <div className="w-full flex items-center justify-between mt-6">
    <div className="flex space-x-3 items-center">
      <div className="flex items-center justify-center p-2 leading-3 rounded-[10px] bg-blue-500">
        <h1 className="text-white text-[14px] ss:text-[16px] font-medium">#{id}</h1>
      </div>
      <div>
        <h1 className="font-medium text-slate-500 sm:text-[12px] text-[10px] leading-3">
          {heading}
        </h1>
        <h2 className="mt-2 font-semibold ss:text-[16px] text-[14px] leading-3">
          <span>$</span> {transaction}
        </h2>
      </div>
    </div>
    <div className="bg-[#e9eaecad] px-4 py-2 rounded-lg">
      <h1 className="sm:text-[14px] text-[8px] leading-3 font-semibold">
        {sidemoney}
        <span>k</span>
      </h1>
    </div>
  </div>
);

const Statistics = () => {
  return (
    <div className="statistics-section mt-4 w-full flex flex-col items-start">
      {/* Info tags */}
      <div className="flex gap-4 flex-wrap">
        <InfoTag
          Icon={BiPieChart}
          heading={"revenue"}
          number={"21,456"}
          dol={true}
          statVal={"2.65"}
        />
        <InfoTag
          Icon={FiShoppingBag}
          heading={"orders"}
          number={"5,643"}
          statVal={"0.82"}
          stat="-"
        />
        <InfoTag
          Icon={BsFillPeopleFill}
          heading={"customers"}
          number={"45,254"}
          statVal={"1.04"}
          stat="-"
        />
      </div>
      {/* main chart */}
      <div className="w-full lg:pr-8">
        <MainChart />
      </div>
      {/* multiple charts */}
      <div className="flex mt-4 w-full lg:pr-8 min-w-[300px] overflow-hidden overflow-x-scroll hide-scrollbar">
        <div className="w-full overflow-hidden relative overflow-x-scroll hide-scrollbar">
          <div className="flex gap-4 w-[57rem]">
            {/* first chart */}
            <div id="b1" className="chartbox drop-shadow-xl overflow-hidden">
              <TopHeading heading={"your activity"} />
              {/* heading  2 */}
              <div className="w-full flex justify-between mt-3">
                <div className="flex flex-col">
                  <h4 className="text-[10px] text-slate-500">This Month</h4>
                  <h1 className="font-semibold text-[20px] mt-1">16,543</h1>
                </div>
                <div className="flex items-end space-x-2">
                  <div className="flex items-center justify-center space-x-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <h1 className="sm:text-[12px] text-[8px] text-slate-500 font-medium">
                      Current
                    </h1>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h1 className="sm:text-[12px] text-[8px] text-slate-500 font-medium">
                      Previous
                    </h1>
                  </div>
                </div>
              </div>
              {/* chart */}
              <div className="w-full mt-2 overflow-x-scroll hide-scrollbar">
                <img src={linechart} alt="" />
              </div>
            </div>
            {/* second chart */}
            <div className="chartbox drop-shadow-xl overflow-hidden flex flex-col justify-between">
              <TopHeading heading={"order stats"} />
              {/* chart */}
              <div className="flex items-center justify-center px-10 w-full mt-2 overflow-x-scroll hide-scrollbar">
                <img src={piechart} alt="" />
              </div>
              <div className="w-full h-[1px] md:block hidden bg-slate-300 mt-4"></div>
              {/* heading 2 */}
              <div className="w-full flex justify-between items-center px-4">
                <div className="flex items-center space-x-1 hover:cursor-pointer">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h1 className="sm:text-[12px] text-[8px]">Completed</h1>
                </div>
                <div className="flex items-center space-x-1 hover:cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <h1 className="sm:text-[12px] text-[8px]">Pending</h1>
                </div>
                <div className="flex items-center space-x-1 hover:cursor-pointer">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <h1 className="sm:text-[12px] text-[8px]">Cancel</h1>
                </div>
              </div>
            </div>
            {/* third chart */}
            <div className="chartbox drop-shadow-xl overflow-hidden">
              <TopHeading heading={"your activity"} />
              <div className="w-full flex flex-col justify-between overflow-y-scroll hide-scrollbar">
                {topProduct?.map((val, index) => (
                  <TopProduct key={`topProduct_${index}`} {...val} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
