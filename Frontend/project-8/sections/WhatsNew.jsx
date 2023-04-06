"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { TypingText, TitleText, NewFeatures } from "../components";
import { newFeatures } from "../constants";

const WhatsNew = () => (
  <div className="sm:p-16 xs:p-8 p-6 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.25, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title={"| Whats New?"} />
        <TitleText
          title={<>What's new about Metaversus?</>}
          textStyles={"max-w-[570px]"}
        />
        <div className="flex gap-4 mt-6">
          {newFeatures.map((feature, index)=>(
            <NewFeatures
            key={`newfeature_${index}`}
            {...feature}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className="flex-1 flex items-center justify-center"
      >
        <img
          className="w-[90%] h-[90%]"
          src="/whats-new.png"
          alt="GetStarted"
        />
      </motion.div>
    </motion.div>
  </div>
);

export default WhatsNew;
