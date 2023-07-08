// @ts-nocheck
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";

import { images } from "../constants";
import { logout } from "../store/actions/user";
import Avatar from "./Avatar";
import { useQuery } from "@tanstack/react-query";
import { logoutSession } from "../services/index/users";
import { toast } from "react-hot-toast";
import { postActions } from "../store/reducers/post";

const navItemsInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "About us", href: "/about" },
      { title: "Contact us", href: "/contact" },
    ],
  },
];

const MenuItem = ({ onClick = () => {}, label, link = "", className = "" }) => (
  <>
    {link ? (
      <Link to={link}>
        <div
          onClick={onClick}
          className={`${
            className
              ? className
              : "px-4 py-3 hover:bg-neutral-100 transition font-semibold"
          }`}
        >
          {label}
        </div>
      </Link>
    ) : (
      <div
        onClick={onClick}
        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      >
        {label}
      </div>
    )}
  </>
);

const NavItem = ({ item, className = "" }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => !curState);
  };

  return (
    <div className={`relative group ${className}`}>
      {item.type === "link" ? (
        <>
          <Link to={item.href} className="px-4 py-2">
            {item.name}
          </Link>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown className="lg:block hidden" />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navIsVisible, setNavIsVisible] = useState(false);

  const userState = useSelector((state) => state.user);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  const { refetch } = useQuery({
    refetchOnWindowFocus: false,
    enabled: false,
    queryFn: () => logoutSession(),
    onSuccess: () => {
      toast.success("Logout Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    queryKey: ["logout"],
  });

  const logoutHandler = () => {
    dispatch(logout);
    navigate("/");
    refetch();
    setNavIsVisible(false);
  };

  // to get the current URL
  const currentLocation = useLocation().pathname;

  useEffect(() => {
    currentLocation !== "/editor" && dispatch(postActions.resetPostInfo())
  }, [currentLocation]);
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      {/* mobile tab nav */}
      <header className="container relative mx-auto px-5 flex justify-between py-4 items-center">
        <Link to="/">
          <img className="w-10 rounded-lg" src={images.Logo} alt="logo" />
        </Link>
        <div className="lg:hidden z-50 relative">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        {/* mobile nav */}
        {userState.userInfo ? (
          <div
            className={`lg:hidden transition-opacity overflow-hidden duration-200 ${
              navIsVisible
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } top-16 block bg-white w-full z-50 absolute left-0 right-0 drop-shadow-md`}
          >
            <div className="flex flex-col items-center cursor-pointer gap-1">
              <MenuItem
                onClick={() => setNavIsVisible(false)}
                label={`${currentLocation === "/profile" ? "Home" : "Profile"}`}
                link={`${currentLocation === "/profile" ? "/" : "/profile"}`}
              />
              <MenuItem
                onClick={() => setNavIsVisible(false)}
                label="Articles"
                link="/articles"
              />
              <MenuItem onClick={logoutHandler} label="Logout" />
            </div>
          </div>
        ) : (
          <div
            className={`lg:hidden transition-opacity overflow-hidden duration-200 ${
              navIsVisible
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } top-16 block bg-white w-full z-50 absolute left-0 right-0 drop-shadow-md`}
          >
            <div className="flex flex-col items-center cursor-pointer gap-1">
              <MenuItem
                onClick={() => setNavIsVisible(false)}
                label="Articles"
                link="/articles"
              />
              <MenuItem
                onClick={() => setNavIsVisible(false)}
                label={`${currentLocation === "login" ? "Home" : "login"}`}
                link={`${currentLocation === "login" ? "/" : "/login"}`}
              />
            </div>
          </div>
        )}

        {/* desktop nav */}

        <div className="lg:flex gap-10 hidden">
          <div className="text-white items-center lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 gap-y-3 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
            {/* for small devices */}
            {/* <BiMessageSquareAdd/> */}
            {userState.userInfo && (
              <Link to="/editor">
                <BiAddToQueue
                  size={20}
                  className="text-blue-500 lg:block hidden"
                />
              </Link>
            )}
          </div>
          {userState?.userInfo ? (
            <Link to="/profile" className={`cursor-pointer lg:block hidden`}>
              <Avatar
                src={
                  userState?.userInfo?.avatar
                    ? userState.userInfo.avatar
                    : images.userImage
                }
              />
            </Link>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className={`${
                currentLocation === "login" || currentLocation === "register"
                  ? "hidden"
                  : "block"
              } mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300`}
            >
              Sign in
            </button>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
