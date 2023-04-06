"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <div className="sm:py-16 xs:py-8 py-12 sm:pl-32 pl-6 text-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col w-full"
      >
        <div className="flex justify-center flex-col items-center relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase"
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase">
              Ma
            </h1>
            <div className="md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]" />
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase">
              ness
            </h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.25, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <img
            src="/cover.png"
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[60px] relative z-10">
            <a href="#explore">
              <img
                src="/stamp.png"
                alt="stamp"
                className="rotate-stamp sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Hero;
