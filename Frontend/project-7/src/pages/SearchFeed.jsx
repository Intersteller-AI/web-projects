import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFromAPI } from "../constants/fetchApi";
import { VideoCard, ChannelCard, DetailsLoader, Error } from "../components";
import useScrollBlock from "../components/ScrollBlock";
import { useParams } from "react-router-dom";
import { useGetVideosBySearchQuery } from "../redux/fetchData";
import { urlActions } from "../redux/store";

const SearchFeed = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(urlActions.setUrl(window.location.pathname));
  }, []);

  const navButt = useSelector((state) => state.menu);
  const [blockScroll, allowScroll] = useScrollBlock();
  navButt.isOpen ? blockScroll() : allowScroll();

  const { searchTerm } = useParams();

  const { data, isFetching, error } = useGetVideosBySearchQuery(searchTerm);

  const videos = data?.items;

  if (isFetching) return <DetailsLoader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;

  return (
    <div className="w-full px-4 py-2">
      <h1 className="font-bold text-white text-4xl">
        Search results for:{" "}
        <span className="text-violet-600">{searchTerm.searchTerm}</span>
      </h1>
      <div className="videos-section w-full">
        {videos?.map((val, index) => (
          <div key={`${val}_${index}`}>
            {val.id.videoId && <VideoCard video={val} />}
            {val?.id?.channelId && <ChannelCard channelDetail={val} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFeed;
