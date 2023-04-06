"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Feedback = () => (
  <div className="text-white sm:p-16 xs:p-8 p-6 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mx-auto flex lg:flex-row flex-col gap-6"
    >
      <motion.div
        variants={fadeIn("right", "twwen", 0.25, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="sm:w-full flex justify-end absolute sm:top-[10%] sm:left-[20%] bottom-[-20%] right-[10%] z-20">
          <a href="#explore">
            <img
              src="/stamp.png"
              alt="stamp"
              className="rotate-stamp sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </a>
        </div>
        <div className="feedback-gradient" />
        <div className="sm:mt-[100px]">
          <h1 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px]">
            Samantha
          </h1>
          <h4 className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px]">
            Founder Metaverus
          </h4>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[30px]">
          With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          src="/planet-09.png"
          alt="planet-09"
        />
      </motion.div>
    </motion.div>
  </div>
);

export default Feedback;
