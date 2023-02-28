import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader } from "../components";


const ArtistDetails = () => {
  const { songid, id: artistId } = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails, error } =
    useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails)
    return <Loader title={`Searcing Song Details`} />;

  if (error) return <Error />;

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
              Sorry, no artist details found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
