// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>
      <section className="bg-dark-hard">
        <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
          <div className="col-span-5 md:col-span-4 lg:col-span-2">
            <h3 className="text-dark-light font-bold md:text-lg">Product</h3>
            <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
              <li>
                <a href="/">Landingpage</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Referral Program</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-4 lg:col-span-2">
            <h3 className="text-dark-light font-bold md:text-lg">Services</h3>
            <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Design</a>
              </li>
              <li>
                <a href="/">Themes</a>
              </li>
              <li>
                <a href="/">Illustrations</a>
              </li>
              <li>
                <a href="/">UI Kit</a>
              </li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2">
            <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
            <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div className="col-span-5 md:col-span-4 lg:col-span-2">
            <h3 className="text-dark-light font-bold md:text-lg">More</h3>
            <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">License</a>
              </li>
              <li>
                <a href="/">Changelog</a>
              </li>
            </ul>
          </div>
          <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
            <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
              Build a modern and creative website with crealand
            </p>
            <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
              <li>
                <a href="/">
                  <AiOutlineTwitter className="w-6 h-auto" />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillYoutube className="w-6 h-auto" />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillInstagram className="w-6 h-auto" />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaFacebook className="w-6 h-auto" />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsTelegram className="w-6 h-auto" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
