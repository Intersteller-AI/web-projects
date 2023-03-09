import React, { useState } from "react";
import { arrowRight, squareSvg } from "../assets";
import {
  data,
  applicationData,
  pagesArray,
  componentsArray,
} from "../contants";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/store";

const DropDownMenu = ({ propname, data, headname }) => {
  const [upSide, setUpSide] = useState("90deg");
  const [customHeight, setCustomHeight] = useState("30px");

  return (
    <div className="w-full">
      <h5 className="text-[11px] text-white uppercase opacity-60">
        {headname}
      </h5>
      <div
        className="w-full mt-2 relative flex flex-col justify-between overflow-hidden"
        style={{ height: `${customHeight}` }}
      >
        <div
          style={{
            opacity: `${upSide === "90deg" ? "0.6" : "1"}`,
          }}
          className={`menu-item z-10 flex justify-between items-center bg-darkBlue opacity-70 hover:cursor-pointer`}
          onClick={() => {
            setUpSide(upSide === "90deg" ? "-90deg" : "90deg");
            setCustomHeight(upSide === "90deg" ? "max-content" : "30px");
          }}
        >
          <div className="flex md:space-x-3">
            <img className="h-[26px]" src={squareSvg} alt="" />
            <h5 className="text-[18px] font-medium">{propname}</h5>
          </div>
          <img
            style={{ rotate: `${upSide}` }}
            className={`transition-all duration-100`}
            src={arrowRight}
            alt="arrow"
          />
        </div>
        <div
          style={{
            transform: `translateY(${upSide === "90deg" ? "-110%" : "0%"})`,
            opacity: `${upSide === "90deg" ? "0" : "0.7"}`,
          }}
          className={`z-[0] transition-all duration-200 space-y-2 mt-2`}
        >
          {data.map((val, index) => (
            <div key={`${propname}_${index}`} className={`op1 pl-[40px]`}>
              <h1 className="text-[18px] font-normal hover:cursor-pointer">
                {val}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FullMenu = ({ headname, dataArray }) => (
  <div className="w-full mt-4">
    <h5 className="text-[11px] text-gray-300 uppercase opacity-60">
      {headname}
    </h5>
    <div className="w-full px-3">
      {dataArray?.map((val, index) => (
        <div
          key={`application_${index}`}
          className={`flex items-center space-x-4 mt-6 opacity-60 transition-all duration-200 hover:opacity-[1] hover:cursor-pointer`}
        >
          <val.icon className="md:text-[22px]"></val.icon>
          <h2 className="sm:text-[18px] font-normal capitalize">
            {val.appName}
          </h2>
        </div>
      ))}
    </div>
  </div>
);

const Sidebar = () => {
  const openState = useSelector((state) => state.openMenu);

  const dispatch = useDispatch()


  return (
    <>
      <div className="w-[250px] md:px-2 h-[100vh] md:block hidden fixed left-0 top-0 text-white overflow-y-auto hide-scrollbar">
        <div className="w-full flex justify-end px-3">
          <CgMenuLeft className="text-2xl my-6 hover:cursor-pointer" />
        </div>
        <DropDownMenu data={data} propname={`Dashboards`} headname={`menu`} />
        <FullMenu dataArray={applicationData} headname={`applications`} />
        <h5 className="text-[11px] opacity-70 text-gray-300 uppercase mt-6">
          Layouts
        </h5>
        <FullMenu headname={`pages`} dataArray={pagesArray} />
        <FullMenu headname={`components`} dataArray={componentsArray} />
      </div>
      {/* for mobile */}
      <div style={{
        left: !openState.isOpen ? '-100%' : '0%'
      }}
       className="w-[250px] px-2 h-[100vh] fixed bg-darkBlue md:hidden block z-20 text-white overflow-y-auto hide-scrollbar transition-all duration-150">
        <div className="w-full flex justify-end px-3">
          <AiOutlineClose className="text-2xl my-6 hover:cursor-pointer" onClick={()=>{dispatch(actions.close())}}/>
        </div>
        <DropDownMenu data={data} propname={`Dashboards`} headname={`menu`} />
        <FullMenu dataArray={applicationData} headname={`applications`} />
        <h5 className="text-[11px] opacity-70 text-gray-300 uppercase mt-6">
          Layouts
        </h5>
        <FullMenu headname={`pages`} dataArray={pagesArray} />
        <FullMenu headname={`components`} dataArray={componentsArray} />
      </div>
    </>
  );
};

export default Sidebar;
