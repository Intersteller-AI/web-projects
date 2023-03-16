import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdMic, IoIosNotifications } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import {SearchBar} from '../components'

import { logo, profile } from "../assets";

import { menuActions } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const navButt = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  return (
    <div className="w-full h-14 fixed z-[2] text-white bg-[#1e1e1e] flex justify-between top-0 items-center px-2">
      <div className="flex items-center">
        <div
          onClick={() => {
            dispatch(menuActions.open());
          }}
          className="p-2 rounded-full hover:bg-slate-800 hover:cursor-pointer"
        >
          <RxHamburgerMenu className="text-2xl" />
        </div>
        <div className="h-full w-32 md:block hidden ml-2">
          <Link to='/'>
            <h1 className="text-2xl uppercase font-semibold hover:cursor-pointer">
              Logo
            </h1>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <SearchBar/>
        <div className="p-2 rounded-full border-[2px] border-slate-700 hover:cursor-pointer">
          <IoMdMic className="text-xl" />
        </div>
      </div>
      <div className="flex space-x-2 items-center text-2xl md:mr-2">
        <div className="rounded-full md:block hidden hover:bg-slate-800 hover:cursor-pointer p-2">
          <AiOutlineVideoCameraAdd />
        </div>
        <div className="rounded-full md:block hidden hover:bg-slate-800 hover:cursor-pointer p-2">
          <IoIosNotifications />
        </div>
        <div className="rounded-full overflow-hidden flex items-start justify-center w-8 h-8 hover:cursor-pointer">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
