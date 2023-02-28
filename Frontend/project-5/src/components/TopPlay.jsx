import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazanCore";

import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePause,
  handlePlay,
}) => (
  <div className="w-full flex flex-row justify-between items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <div className="flex-1 flex items-center text-white space-x-2">
      <div>
        <h3 className="font-bold">{i + 1}.</h3>
      </div>
      <div className="w-[50px] h-auto rounded-md overflow-hidden">
        <img src={song.images.coverart} alt={song.title} />
      </div>
      <div className="truncate ss:w-44 w-36">
        <Link to={`/songs/${song.key}`}>
          <h1 className="md:text-md font-bold">{song?.title}</h1>
        </Link>
        {/* <Link to={`/artists/${song?.artists[0].adamid}`}> */}
          <p className="text-base text-gray-300 mt-1">{song.subtitle}</p>
        {/* </Link> */}
      </div>
    </div>
    <div className="w-[30px] h-[30px] text-white">
      <PlayPause
        butt_size={25}
        song={song}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePause={handlePause}
        handlePlay={handlePlay}
      />
    </div>
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const topPlays = data?.tracks.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="lg:ml-6 ml-0 lg:mb-0 mb-6 flex-1 lg:max-w-[420px] max-w-full flex flex-col"
    >
      {/* top charts */}
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl text-white font-bold">Top Charts</h2>
          <Link to={`/top-charts`}>
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              song={song}
              i={i}
              key={song.key}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePause={handlePauseClick}
              handlePlay={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>
      {/* top artists */}
      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl text-white font-bold">Top Artists</h2>
          <Link to={`/top-artists`}>
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className={`mt-4`}
        >
          {topPlays?.map((song, i) => (
            <SwiperSlide
              key={song?.key}
              style={{ width: "25%", height: "auto" }}
              className={`shadow-md rounded-full overflow-hidden animate-slideright`}
            >
              <img src={song?.images.background} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
