"use client";

import React from "react";
import { socials } from "../constants";


const Footer = () => (
  <div id="footer" className="text-white sm:p-16 xs:p-8 p-6 relative z-10">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center">
      <h1 className="sm:text-[42px] text-[30px] font-medium">Enter the Metaverse</h1>
      <div className="flex gap-4 py-4 px-6 mt-4 bg-[#25618B] rounded-full">
        <img src="/headset.svg" alt="" />
        <h1>ENTER METAVERSE</h1>
      </div>
    </div>
    <div className="w-full h-[1px] bg-slate-100 my-16 mx-auto"/>
    <div className="flex justify-between items-center ">
      <h1 className="text-[22px] font-semibold">METAVERSE</h1>
      <p className="text-slate-400 sm:block hidden">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
      <div className="flex gap-4">
        {socials.map((socio, index)=>(
          <img src={socio.url} alt={socio.name} key={`${socio.name}_${index}`}/>
        ))}
      </div>
    </div>
    <p className="text-slate-400 mt-4 text-[16px] text-center block sm:hidden">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
  </div>
);

export default Footer;
