import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useScrollBlock from "../components/ScrollBlock";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { BiLike, BiDislike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import {
  AiOutlineCloudDownload,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { SideVideoCard, DetailsLoader, Error } from "../components";
import {
  useGetChannelDetailsQuery,
  useGetSuggestedVideosQuery,
  useGetVideosDetailsQuery,
} from "../redux/fetchData";
import { demoChannelUrl } from "../constants";

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

const VideoDetail = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navButt = useSelector((state) => state.menu);
  const [blockScroll, allowScroll] = useScrollBlock();
  navButt.isOpen ? blockScroll() : allowScroll();
  const [like, setLike] = useState(false);

  const { id } = useParams();
  const { data, isFetching, error } = useGetVideosDetailsQuery(id);
  const { data: suggested } = useGetSuggestedVideosQuery(id);

  const videoDetail = data?.items[0];
  const suggestedVideos = suggested?.items.slice(0, 10);

  const { data: channelInfo } = useGetChannelDetailsQuery(
    videoDetail?.snippet?.channelId
  );

  const channelDetail = channelInfo?.items && channelInfo?.items[0];

  // console.log(videoDetail);
  // console.log(suggestedVideos);
  // console.log(channelDetail);

  const convToMil = (labelValue) => {
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
  };

  if (isFetching) return <DetailsLoader />;

  if (error) return <Error />;

  return (
    <div className="w-full flex flex-col">
      {/* Video Player */}
      <div className="w-full flex justify-center overflow-hidden">
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
        />
      </div>
      {/* info section */}
      <div className="info-sec w-full flex lg:flex-row flex-col mt-4 px-4 items-start lg:space-x-4">
        <div className="flex flex-col">
          <h1 className="sm:text-2xl text-[16px] font-semibold">
            {videoDetail?.snippet.title}
          </h1>
          <div className="lg:w-[60vw] w-[90vw] flex justify-between lg:items-center mt-4 lg:flex-row flex-col items-start space-x-0 lg:space-x-[1vw]">
            {/* channel actions */}
            <div className="flex items-center md:space-x-[1vw] w-full justify-between">
              <div className="flex space-x-3">
                <div className="w-[40px] h-[40px] rounded-full bg-violet-400 overflow-hidden">
                  <img
                    src={
                      channelDetail?.id &&
                      channelDetail?.snippet.thumbnails.high.url
                    }
                    alt=""
                  />
                </div>
                <Link to={channelDetail?.id && `/channel/${channelDetail?.id}`}>
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-[16px]">
                      {videoDetail?.snippet.channelTitle}
                    </h2>
                    <h4 className="font-normal text-[12px] text-slate-400">
                      {convToMil(channelDetail?.statistics.subscriberCount)}{" "}
                      <span>
                        {Number(channelDetail?.statistics?.subscriberCount) > 1
                          ? "subscribers"
                          : "subscriber"}
                      </span>
                    </h4>
                  </div>
                </Link>
              </div>
              <button className="capitalize rounded-full bg-white px-6 py-2 text-[16px] font-semibold hover:bg-slate-200 text-pureBlack">
                subscribe
              </button>
            </div>
            {/* video actions */}
            <div className="lg:mt-0 mt-6 w-[90vw] overflow-x-scroll hide-scrollbar">
              <div className="flex items-center space-x-4 min-w-[320px]">
                <div className="flex items-center py-[6px] px-4 space-x-2 border-[#1e1e1e] border-[2px] rounded-full bg-[#1e1e1e]">
                  <div
                    onClick={() => setLike(like ? false : true)}
                    className="flex items-center border-r-[1px] pr-4 space-x-2 cursor-pointer"
                  >
                    {!like ? (
                      <BiLike className="text-[24px]" />
                    ) : (
                      <AiFillLike className="text-[24px]" />
                    )}
                    <h3 className="text-[16px] font-medium">
                      {convToMil(videoDetail?.statistics.likeCount)}
                    </h3>
                  </div>
                  <BiDislike className="text-[24px] cursor-pointer" />
                </div>
                <div className="flex space-x-2">
                  <div className="flex items-center pr-4 space-x-2 cursor-pointer bg-[#1e1e1e] rounded-full px-4 py-2">
                    <TbShare3 className="text-[24px]" />
                    <h3 className="text-[16px] font-medium">share</h3>
                  </div>
                  <div className="flex items-center pr-4 space-x-2 cursor-pointer bg-[#1e1e1e] rounded-full px-4 py-2">
                    <AiOutlineCloudDownload className="text-[24px]" />
                    <h3 className="text-[16px] font-medium">download</h3>
                  </div>
                  <div className="px-2 py-1 flex items-center justify-center cursor-pointer bg-[#1e1e1e] rounded-full">
                    <BsThreeDots className="text-[24px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* description */}
          <div className="bg-[#272727] lg:w-[60vw] w-[90vw] rounded-xl p-4 mt-6 border-[#2b2a2a] flex flex-col items-start overflow-hidden">
            <div className="w-full mb-2">
              <h1 className="font-medium text-[16px]">
                {videoDetail?.statistics.viewCount} views
              </h1>
              {/* <h1></h1> */}
            </div>
            <div className="w-11/12 border-[1px] border-slate-600"></div>
            <SmartText text={videoDetail?.snippet.description} />
          </div>
        </div>
        {/* playlist section */}
        <div className="flex flex-col items-start mt-4 lg:mt-0 lg:max-w-[450px] overflow-hidden w-full">
          {suggestedVideos?.map((val, index) => (
            <div key={`${val}_${index}`}>
              {val?.id.videoId && <SideVideoCard video={val} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
