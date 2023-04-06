"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText, StartSteps } from "../components";
import { startingFeatures } from "../constants";

const GetStarted = () => (
  <div className="sm:p-16 xs:p-8 p-6 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={planetVariants("left")}
        className="flex-1 flex items-center justify-center"
      >
        <img
          className="w-[90%] h-[90%]"
          src="/get-started.png"
          alt="GetStarted"
        />
      </motion.div>
      <motion.div
      variants={fadeIn('left', 'tween', 0.25, 1)}
      className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title={'| How Metaversus Works'}/>
        <TitleText title={<>Get Started with just few clicks</>} textStyles={'max-w-[470px]'}/>
        <div className="mt-[31px] flex items-start flex-col gap-[24px]">
          {startingFeatures.map((feature, index)=>(
            <StartSteps
            key={`startsteps_${index}`}
            number={index+1}
            text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export default GetStarted;
