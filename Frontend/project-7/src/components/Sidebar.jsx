import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { homeLinks, infoPages, categories } from "../constants";
import { menuActions, categoryActions } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";


const GotoPage = ({ Icon, heading, onClick, styles }) => (
  <div
    style={styles}
    onClick={onClick}
    className={`w-full flex items-center space-x-6 mt-1 hover:cursor-pointer transition-all duration-150 rounded-md p-2`}
  >
    <div className="">
      <Icon className="text-[22px]" />
    </div>
    <h1 className="font-medium capitalize">{heading}</h1>
  </div>
);

const Sidebar = () => {
  const navButt = useSelector((state) => state.menu);
  const catSelector = useSelector((state) => state.category);

  const dispatch = useDispatch();

  return (    
    <div
      style={{
        overflow: navButt.isOpen ? "hidden" : "auto",
      }}
      className="w-full hidden ss:flex z-[5] fixed top-0 justify-end"
    >
      <div
        style={{
          left: !navButt.isOpen ? "-100%" : "0%",
        }}
        className="w-[250px] pointer-events-auto z-[6] transition-all duration-200 top-0 text-white bg-primary max-h-[100vh] overflow-y-scroll hide-scrollbar fixed flex flex-col"
      >
        <div className="flex pl-4 items-center mt-2 space-x-4">
          <div className="w-9 h-9 flex justify-center items-center rounded-full hover:bg-slate-800">
            <RxHamburgerMenu
              onClick={() => {
                dispatch(menuActions.close());
              }}
              className="text-2xl hover:cursor-pointer"
            />
          </div>
          <div className="w-32 md:block hidden">
            <h1 className="text-2xl uppercase font-semibold hover:cursor-pointer">
              Logo
            </h1>
          </div>
        </div>
        <div className="w-full mt-4 px-4">
          {homeLinks.map((val, index) => (
            <GotoPage
              styles={{
                background: val.alias === catSelector.category && "#16223e",
              }}
              onClick={() => dispatch(categoryActions.selectCategory(val.alias))}
              key={`homeLinks_${index}`}
              Icon={val.icon}
              heading={val.name}
            />
          ))}
        </div>
        <div className="mt-4 w-11/12 h-[1px] self-center bg-slate-600">
          <h1 className="opacity-0">.</h1>
        </div>
        <div className="w-full mt-2 px-4">
          <h4 className="font-medium capitalize text-[16px]">categories</h4>
          <div className="w-full mt-4">
            {categories.map((val, index) => (
              <GotoPage
                styles={{
                  background: val.name === catSelector.category && "#16223e",
                }}
                onClick={() =>
                  dispatch(categoryActions.selectCategory(val.name))
                }
                key={`category_${index}`}
                Icon={val.icon}
                heading={val.name}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 w-[95%] h-[1px] bg-slate-600">
          <h1 className="opacity-0">.</h1>
        </div>
        <div className="w-full mt-4 px-4">
          {infoPages.map((val, index) => (
            <GotoPage
              styles={{
                background: val.name === catSelector.category && "#16223e",
              }}
              onClick={() => dispatch(categoryActions.selectCategory(val.name))}
              key={`info_${index}`}
              Icon={val.icon}
              heading={val.name}
            />
          ))}
        </div>
        <div className="w-full mt-4 px-4">
          <h4 className="font-medium capitalize text-[16px]">Subscriptions</h4>
          <div></div>
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(menuActions.close());
        }}
        className="sideOverlay transition-all duration-200"
        style={{
          display: navButt.isOpen ? "initial" : "none",
          opacity: navButt.isOpen ? "1" : "0",
        }}
      ></div>
    </div>
  );
};

export default Sidebar;
