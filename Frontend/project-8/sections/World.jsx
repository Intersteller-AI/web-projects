"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, TitleText } from "../components";

const World = () => (
  <div className="sm:p-16 xs:p-8 p-6 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mx-auto flex flex-col items-center gap-8"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.25, 1)}
        className="w-full flex justify-center items-center flex-col"
      >
        <TypingText
          title={"| People on the world"}
          textStyles={"text-center"}
        />
        <TitleText
          title={
            <>
              Track frieds around you and invite them to play together in the
              same world
            </>
          }
          textStyles={"sm:max-w-[65vw] text-center"}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.35, 1)}
        className="w-full relative"
      >
        <img className="w-full" src="/map.png" alt="GetStarted" />
        <div className="md:w-[70px] md:h-[70px] w-[8vw] h-[8vw] p-[6px] rounded-full z-10 absolute right-[10%] bottom-[10%] drop-shadow-md bg-[#5d6680]">
          <img className="w-full h-full" src="/people-01.png" alt="people" />
        </div>
        <div className="w-[12vw] h-[8vw] p-[6px] sm:flex hidden rounded-3xl z-10 absolute bottom-[30%] left-40 drop-shadow-md bg-[#5d6680]">
          <img className="w-full h-full object-cover rounded-3xl" src="/planet-02.png" alt="people" />
        </div>
        <div className="w-[12vw] h-[8vw] p-[6px] sm:flex hidden rounded-3xl z-10 absolute top-[10%] right-[30%] drop-shadow-md bg-[#5d6680]">
          <img className="w-full h-full object-cover rounded-3xl" src="/planet-01.png" alt="people" />
        </div>
        <div className="md:w-[70px] md:h-[70px] w-[8vw] h-[8vw] p-[6px] rounded-full z-10 absolute left-[10%] top-[20%] drop-shadow-md bg-[#5d6680]">
          <img className="w-full h-full" src="/people-02.png" alt="people" />
        </div>
        <div className="md:w-[70px] md:h-[70px] w-[8vw] h-[8vw] p-[6px] rounded-full z-10 absolute top-[50%] left-[48%] drop-shadow-md bg-[#5d6680]">
          <img className="w-full h-full" src="/people-03.png" alt="people" />
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export default World;
