import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdMic, IoIosNotifications } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "../components";
import { FiSearch } from "react-icons/fi";
import { logo, profile } from "../assets";
import { IoMdClose } from "react-icons/io";
import { TbHomeHand } from "react-icons/tb";

import { menuActions, categoryActions } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const urlFinder = useSelector((state) => state.urlFinder);

  console.log(urlFinder.url);
  const dispatch = useDispatch();
  const [buttSwitch, setButtSwitch] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <div className="w-full h-14 fixed z-[2] text-white bg-[#1e1e1e] flex justify-between top-0 items-center px-2">
      <div className="flex items-center">
        <div
          onClick={() => {
            dispatch(menuActions.open());
          }}
          className="p-2 rounded-full ss:block hidden hover:bg-slate-800 hover:cursor-pointer"
        >
          <RxHamburgerMenu className="text-2xl" />
        </div>
        <div className="h-full w-32 md:block hidden ml-2">
          <Link
            to="/"
            onClick={() => {
              dispatch(categoryActions.selectCategory("New Videos"));
            }}
          >
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="sm:flex hidden items-center space-x-3">
        <SearchBar />
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
        <div className="flex justify-between sm:w-fit ss:w-[90vw] w-[95vw] h-full items-center">
          <div className="sm:hidden block w-[30vw]">
            {urlFinder.url === "/" ? (
              <Link
                to="/"
                onClick={() => {
                  dispatch(categoryActions.selectCategory("New Videos"));
                }}
              >
                <img src={logo} alt="" />
              </Link>
            ) : (
              <Link
                to="/"
                onClick={() => {
                  dispatch(categoryActions.selectCategory("New Videos"));
                }}
              >
                <TbHomeHand />
              </Link>
            )}
          </div>
          <div className="flex-1 px-4 flex sm:hidden items-center space-x-4">
            <form
              action=""
              onSubmit={handleSubmit}
              className={`flex-1 transition-all duration-300 ${
                buttSwitch ? "pointer-events-auto" : "pointer-events-none"
              } ${buttSwitch ? "opacity-100" : "opacity-0"}`}
            >
              <input
                className="w-full outline-none bg-transparent px-2 font-medium text-white text-[20px] border-b-[1px]"
                type=""
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </form>
            <div
              className="flex-[0.1] cursor-pointer"
              onClick={() => {
                setButtSwitch(!buttSwitch ? true : false);
              }}
            >
              {!buttSwitch ? <FiSearch /> : <IoMdClose />}
            </div>
          </div>
          <div className="rounded-full overflow-hidden flex items-start justify-center w-8 h-8 hover:cursor-pointer ss:mr-0 mr-1">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
