import React, { useEffect, useRef } from "react";
import { BiHomeAlt2, BiCategory } from "react-icons/bi";
import { TbBrandYoutubeKids, TbCirclePlus } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

const Navigation = () => {
  const mobileFooter = (() => {
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
  });
  
  useEffect(() => {
    mobileFooter();
  }, [mobileFooter]);


  return (
    <div className="navigation">
      <nav className="mobile-footer" role="menulist">
        <a
          href="#!"
          role="menuitem"
          className="active"
          aria-describedby="nav-current"
        >
          <BiHomeAlt2 className="" />
          Home
        </a>
        <a href="#!" role="menuitem">
          <BiCategory className="" />
          Categories
        </a>
        <a href="#!" role="menuitem">
          <TbCirclePlus className="" />
          Add
        </a>
        <a href="#!" role="menuitem">
          <MdOutlineSubscriptions className="" />
          Subscriptions
        </a>
        <a href="#!" role="menuitem">
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
