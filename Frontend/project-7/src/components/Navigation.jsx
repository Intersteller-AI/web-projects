import React, { useEffect, useRef, useState } from "react";
import { BiHomeAlt2, BiCategory } from "react-icons/bi";
import { TbBrandYoutubeKids, TbCirclePlus } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../redux/store";
import { categories } from "../constants";

const Navigation = () => {
  const catSelector = useSelector((state) => state.category);
  const dispath = useDispatch();

  const setHidden = () => {
    console.log(document.body.style.overflow);
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const [lander, setLander] = useState(false);

  const mobileFooter = () => {
    var d = document,
      i18n = { current: "current" },
      navs = d.querySelectorAll(".mobile-footer");
    [].forEach.call(navs, function (nav, index) {
      var links = nav.getElementsByTagName("a"),
        line = nav.getElementsByClassName("line")[0],
        a = 0,
        c = 0,
        i = 1; // active, current, increment
      if (!line) {
        line = d.createElement("i");
        line.setAttribute("aria-hidden", true);
        line.className = "line";
        line.innerHTML = i18n.current;
        nav.appendChild(line);
      }
      line.id = "nav-current" + index;
      if (!line.innerHTML.length) line.innerHTML = i18n.current;
      [].forEach.call(links, function (link, index) {
        links[index].removeAttribute("aria-describedby");
        if (links[index].className.match(/\bactive\b/g))
          place(line, links[index]);
        link.addEventListener("click", function (e) {
          a = index;
          var t = setInterval(function () {
            links[c].classList.remove("traversing");
            links[c].classList.remove("active");
            if (a > c) i = 1;
            else if (a < c) i = -1;
            c += i;
            links[c].classList.add("traversing");
            if (c != -1) {
              links[c - i].classList.remove("active");
            }
            if (c == a) {
              e.target.classList.remove("traversing");
              e.target.classList.add("active");
              i = 0;
              clearInterval(t);
            }
          }, 100);
          place(line, e.target);
        });
      });
    });
    function place(l, a) {
      a.setAttribute("aria-describedby", l.id || "nav-current");
      l.style.width = a.offsetWidth + "px";
      l.style.left = a.offsetLeft + a.offsetWidth / 2 + "px";
    }
  };

  useEffect(() => {
    mobileFooter();
  }, [dispath]);

  return (
    <div className="navigation">
      <div
        style={{
          opacity: !lander ? "0" : "1",
          pointerEvents: !lander ? "none" : "initial",
          transition: "all 0.4s ease-in-out",
        }}
        className="absolute h-72 w-[95vw] drop-shadow-lg special-grad left-[50%] translate-x-[-50%] bottom-[110%] rounded-lg overflow-y-scroll hide-scrollbar"
      >
        <div className="w-full flex flex-wrap p-4 z-50">
          {categories.map((val, index) => (
            <div
              onClick={() => {
                setLander(false);
                dispath(categoryActions.selectCategory(val.name));
              }}
              className="px-3 mx-1 my-2 py-1 drop-shadow-xl bg-darkBlue rounded-md"
              key={`nav_${val}_${index}`}
            >
              <h1 className="font-semibold text-[5vw]">{val.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <nav className="mobile-footer" role="menulist">
        <a
          href="#home"
          role="menuitem"
          className="active"
          aria-describedby="nav-current"
          onClick={() => {
            setLander(false);
            dispath(categoryActions.selectCategory("New Videos"));
          }}
        >
          <BiHomeAlt2 className="" />
          Home
        </a>
        <a
          onClick={() => {
            setLander(true);
          }}
          className=""
          href="#categories"
          role="menuitem"
        >
          <BiCategory className="" />
          Categories
        </a>
        <a
          onClick={() => {
            setLander(false);
          }}
          href="#add"
          role="menuitem"
        >
          <TbCirclePlus className="" />
          Add
        </a>
        <a
          onClick={() => {
            setLander(false);
          }}
          href="#subscription"
          role="menuitem"
        >
          <MdOutlineSubscriptions className="" />
          Subscriptions
        </a>
        <a
          onClick={() => {
            setLander(false);
          }}
          href="#settings"
          role="menuitem"
        >
          <AiOutlineSetting className="" />
          Settings
        </a>
        <i className="line" id="nav-current">
          current item
        </i>
      </nav>
    </div>
  );
};

export default Navigation;
