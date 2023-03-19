import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VideoCard, DetailsLoader, Error } from "../components";
import { demoProfilePicture, demoThumbnailUrl } from "../constants";
import useScrollBlock from "../components/ScrollBlock";
import { useSelector } from "react-redux";
import {
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
} from "../redux/fetchData";

const SmartText = ({ text, length = 180 }) => {
  const [showLess, setShowLess] = useState(true);

  if (text?.length < length) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: showLess ? `${text?.slice(0, length)}...` : text,
        }}
      ></p>
      <a
        className="text-blue-500 cursor-pointer"
        onClick={() => setShowLess(!showLess)}
      >
        View {showLess ? "More" : "Less"}
      </a>
    </div>
  );
};

const ChannelDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navButt = useSelector((state) => state.menu);
  const [blockScroll, allowScroll] = useScrollBlock();
  navButt.isOpen ? blockScroll() : allowScroll();

  const { id } = useParams();
  const { data, isFetching, error } = useGetChannelDetailsQuery(id);
  const { data: channelVideos } = useGetChannelVideosQuery(id);
  const ChannelDetail = data?.items[0];
  const videos = channelVideos?.items;

  // console.log(ChannelDetail)
  // console.log(videos)

  function convToMil(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + "K"
      : Math.abs(Number(labelValue));
  }

  if (isFetching) return <DetailsLoader />;

  if (error) return <Error />;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full min-h-[200px] h-[24vw] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={
            ChannelDetail?.brandingSettings?.image?.bannerExternalUrl ||
            demoThumbnailUrl
          }
          alt={ChannelDetail?.snippet?.title}
        />
      </div>
      <div className="w-full flex ss:flex-row ss:text-start text-center flex-col ss:items-start items-center ss:space-x-6 ss:px-16 px-4 ss:mt-20 -mt-16">
        <div className="ss:w-[14vw] w-36 rounded-full overflow-hidden">
          <img
            className=""
            src={
              ChannelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={ChannelDetail?.snippet?.title}
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="sm:text-[26px] text-[30px] font-medium">
            {ChannelDetail?.snippet?.title}
          </h1>
          <div className=" flex ss:flex-row flex-col items-center space-x-3 ss:space-y-0 space-y-2 ss:mt-0 mt-2">
            <h4 className="text-[18px] font-semibold text-slate-400">
              {ChannelDetail?.snippet?.customUrl}
            </h4>
            <h4 className="text-[18px] font-medium text-slate-400">{`${convToMil(
              ChannelDetail?.statistics?.subscriberCount
            )} ${
              Number(ChannelDetail?.statistics?.subscriberCount) > 1
                ? "subscribers"
                : "subscriber"
            }`}</h4>
            <h4 className="text-[18px] font-medium text-slate-400">{`${convToMil(
              ChannelDetail?.statistics?.videoCount
            )} ${
              Number(ChannelDetail?.statistics?.videoCount) > 1
                ? "videos"
                : "video"
            }`}</h4>
          </div>
          <h3 className="text-[16px] ss:mt-4 mt-2 max-w-[680px] text-slate-400">
            <SmartText text={ChannelDetail?.snippet.description} />
          </h3>
        </div>
        <div className="flex-[0.4] ss:space-x-3 space-x-0 mt-4 flex ss:flex-row flex-col items-center ss:space-y-0 space-y-2">
          <button className="capitalize rounded-full bg-[#1e1e1e] px-6 py-2 text-[16px] font-medium hover:bg-slate-800">
            subscribe
          </button>
          <button className="capitalize rounded-full bg-slate-100 px-4 py-2 text-[16px] text-black font-semibold hover:bg-slate-300">
            join
          </button>
        </div>
      </div>
      <div className="ss:w-[95vw] w-[90vw] border-[1px] mt-10 border-slate-600 self-center"></div>
      <div className="w-full videos-section px-4 sm:px-20">
        {videos?.map((val, index) => (
          <div key={`${val}_${index}`}>
            {val.id.videoId && <VideoCard video={val} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelDetail;
