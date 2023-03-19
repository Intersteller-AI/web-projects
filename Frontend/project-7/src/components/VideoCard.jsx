import React from "react";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../constants";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {

  return (
    <div className="rounded-md overflow-hidden">
      <Link
        to={videoId ? `/video/${videoId}` : demoVideoUrl}
        className={`w-full overflow-hidden rounded-md  flex items-center justify-center`}
      >
        <img
          className="w-full h-[195px] object-cover"
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
        />
      </Link>
      <div className="w-full h-[110px] px-2 mt-2">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className="">
          <h4 className="font-medium lg:text-[18px] text-[16px]">
            {snippet?.title || demoVideoUrl}
          </h4>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
          className=""
        >
          <h4 className="font-normal mt-2 opacity-70 sm:text-[16px] text-[14px]">
            {snippet?.channelTitle || demoChannelTitle}
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
