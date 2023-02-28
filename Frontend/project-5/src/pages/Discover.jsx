import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazanCore";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = "Pop";

  console.log(data)

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="text-3xl text-white font-bold text-left">
          Discover
        </h2>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-4 ss:gap-8">
        {data.tracks?.map((song, i) => (
          <SongCard
            key={song.key}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            song={song}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};
export default Discover;
