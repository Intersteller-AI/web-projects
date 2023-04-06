"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText, InsightCard } from "../components";
import { insights } from "../constants";

const Insights = () => (
  <div className="sm:p-16 xs:p-8 p-6 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mx-auto flex flex-col"
    >
      <TypingText title={"| Insight"} textStyles={"text-center"} />
      <TitleText title={"Insight about metaverse"} textStyles={"text-center"} />
      <div className="mt-[50px] flex flex-col gap-[40px] self-center">
        {insights.map((insight, index) => (
          <InsightCard key={`${insight.subtitle}_${index}`} {...insight}/>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Insights;
