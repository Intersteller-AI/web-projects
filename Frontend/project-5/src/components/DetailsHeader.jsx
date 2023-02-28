import React from "react";
import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist_short = artistData?.artists[artistId].attributes;

  return (
    <div className="w-full relative mb-2 overflow-hidden">
      <div className="w-full ss:h-36 h-24 bg-gradient-to-l rounded-l-full from-transparent to-black" />
      <div className="w-full absolute inset-0 flex items-center overflow-hidden">
        <img
          src={
            artistId
              ? artist_short?.artwork?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500")
              : songData?.images?.coverart
          }
          alt="art"
          className="sm:w-32 w-20 sm:h-32 h-20 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist_short.name : songData?.title}
          </p>
          {!artistId && (
              <p className="text-base mt-2 text-gray-400">{songData?.subtitle}</p>
          )}

          <p className="text-base mt-2 text-gray-400">
            {artistId ? artist_short?.genresNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
