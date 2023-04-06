"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import {exploreWorlds} from '../constants'

const Explore = () => {

  const [active, setActive] = useState('world-2')

  return (
    <div className="sm:p-16 xs:p-8 px-6 py-12" id="explore">
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={'show'}
      viewport={{once: false, amount: 0.25}}
      className="w-full mx-auto flex flex-col"
      >
      <TypingText title='| The World' textStyles='text-center'/>
      <TitleText title={<>Choose the world you want <br className="md:block hidden"/> to explore</>} textStyles={'text-center'}/>
      <div className="mt-[50px] flex sm:flex-row flex-col min-h-[70vh] gap-5">
        {exploreWorlds.map((world, index)=>(
          <ExploreCard 
          key={world.id} 
          {...world}
          index={index}
          active={active}
          handleClick={setActive}
          />
        ))}
      </div>
      </motion.div>
    </div>
  );
};
export default Explore;
