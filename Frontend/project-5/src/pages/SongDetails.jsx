import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, DetailsLoader } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazanCore";

const SongDetails = () => {
  const { songid, id: artistId } = useParams();

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails, error } =
    useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails)
    return <DetailsLoader title={`Searcing Song Details`} />;

  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col text-white">
      <DetailsHeader artistId={""} songData={songData} />
      <div className="mt-6">
        <h2 className="font-bold mb-5 text-3xl">Lyrics</h2>
        <div className="">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p key={`lyri_${i}`} className="text-gray-400 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, no lyrics found
            </p>
          )}
        </div>
      </div>
      {/* <RelatedSongs
        data={relatedSongs}
        artistId={artistId}
        activeSong={activeSong}
        isPlaying={isPlaying}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      /> */}
    </div>
  );
};

export default SongDetails;
