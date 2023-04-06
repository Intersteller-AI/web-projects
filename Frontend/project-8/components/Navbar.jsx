"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView={`show`}
      viewport={{once: true}}
      className={`sm:px-16 px-6 py-8 relative`}
    >
      <div className="w-1/2 absolute inset-0"/>
      <div className="w-full flex justify-between items-center">
        <img className="w-[24px] h-[24px]" src="/search.svg" alt="search" />
        <h1 className="font-extrabold text-[24px] leading-[30px] text-white">METAVERSUS</h1>
        <img className="w-[24px] h-[24px]" src="/menu.svg" alt="menu" />
      </div>
    </motion.div>
  );
};

export default Navbar;
