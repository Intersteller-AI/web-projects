import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrapper, Menu, MobileMenu } from "../components";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { fetchFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

const NotyIcon = ({ Icon, data, linkJump = "/" , cartEmpty = true}) => (
  <Link href={linkJump}>
    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center cursor-pointer hover:bg-black/[0.05] relative">
      <Icon className="text-[15px] md:text-[20px]" />
      <div className={`h-[14px] md:h-[18px] min-w-[15px] md:min-w-[18px] rounded-full ${cartEmpty ? "" : 'bg-red-600'} absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]`}>
        {data}
      </div>
    </div>
  </Link>
);

const Header = () => {
  const {cartItems}  = useSelector((state) => state.cart);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState("");

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      window.scrollY > lastScrollY && !mobileMenu
        ? setShow("-translate-y-[80px]")
        : setShow("drop-shadow-sm");
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  return (
    <div
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className={`flex h-[60px] items-center justify-between`}>
        <Link href="/">
          <Image
            priority="false"
            src="/assets/logo.svg"
            alt="logo"
            width={90}
            height={90}
            className="w-[40px] md:w-[60px]"
          />
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />

        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          <NotyIcon Icon={IoMdHeartEmpty} data={3} />
          <NotyIcon Icon={BsCart} data={cartItems?.length} linkJump={"/cart"} cartEmpty={cartItems?.length > 0 ? false : true}/>
          {/* mobile menu */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center cursor-pointer hover:bg-black/[0.05] relative">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[16px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
