import React, { useState } from "react";
import { blackSquare, Flag, profile } from "../assets";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { actions, ProfileActions } from "../redux/store";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const openState = useSelector((state) => state.openMenu);
  const dispatch = useDispatch();

  const [openSearch, setOpenSearch] = useState(true);

  const openProfile = useSelector((state) => state.openProfile);
  const ProfileDispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="flex justify-between px-2 items-center">
        <div className="md:hidden block">
          <CgMenuLeft
            className="text-[24px]"
            onClick={() => {
              dispatch(actions.open());
            }}
          />
        </div>
        <h1 className="text-[20px] font-semibold md:block hidden">Dashboard</h1>
        <div
          style={{
            opacity: !openSearch ? "1" : "0",
          }}
          className="w-full px-4 flex transition-all duration-300 items-end justify-center md:hidden rounded-lg overflow-hidden"
        >
          <input
            type="text"
            className={`${openSearch ? 'pointer-events-none' : 'pointer-events-auto'} w-full h-8 outline-none border-none flex items-center px-4 rounded-md`}
            placeholder="Search"
          />
        </div>
        <div className="flex space-x-4 items-center">
          <div className="w-[34px] h-[34px] flex items-center justify-center relative">
            <div
              className="w-full h-full flex items-center justify-center hover:cursor-pointer md:opacity-0 opacity-100 md:z-0 z-10 absolute"
              onClick={() => {
                setOpenSearch(!openSearch ? true : false);
              }}
            >
              {openSearch ? (
                <FiSearch className="text-[24px]" />
              ) : (
                <AiOutlineClose className="text-[22px]" />
              )}
            </div>
            <div className="w-full h-full flex items-center justify-center hover:cursor-pointer absolute md:opacity-100 md:z-10 z-0 opacity-0">
              <FiSearch className="text-[24px]" />
            </div>
          </div>
          <div className="md:flex hidden space-x-4 items-center">
            <div className="w-[34px] h-[34px] hover:cursor-pointer">
              <img src={Flag} alt="" />
            </div>
            <div className="w-[34px] h-[34px] flex items-center justify-center hover:cursor-pointer">
              <img className="w-[24px]" src={blackSquare} alt="" />
            </div>
            <div className="w-[34px] h-[34px] flex items-center justify-center hover:cursor-pointer">
              <IoMdNotificationsOutline className="text-[26px]" />
            </div>
            <div className="w-[34px] h-[34px] flex items-center justify-center hover:cursor-pointer">
              <AiOutlineSetting className="text-[24px]" />
            </div>
          </div>
          <div
            className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-start justify-center hover:cursor-pointer"
            onClick={() => {
              openProfile.isOpen
                ? ProfileDispatch(ProfileActions.open())
                : ProfileDispatch(ProfileActions.close());
            }}
          >
            <img
              className="w-full h-full object-cover object-top"
              src={profile}
              alt="profile"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] block md:hidden bg-slate-300 mt-4"></div>
    </div>
  );
};

export default Navbar;
