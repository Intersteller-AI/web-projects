import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import { BiArrowBack } from "react-icons/bi";

const CouroselDiv = ({ imgSrc, urlSrc }) => (
  <>
    <Image
      className="aspect-[16/10] md:aspect-auto object-cover"
      src={imgSrc}
      width={3000}
      height={2000}
      alt="imageCor"
      priority
    />
    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
      Shop now
    </div>
  </>
);

const Hero = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30x] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            onClick={clickHandler}
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext)=>(
          <div
            className="absolute right-0 bottom-0 w-[30x] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            onClick={clickHandler}
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <CouroselDiv imgSrc={"/assets/slide-1.png"}/>
        </div>
        <div>
          <CouroselDiv imgSrc={"/assets/slide-2.png"} />
        </div>
        <div>
          <CouroselDiv imgSrc={"/assets/slide-3.png"} />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
