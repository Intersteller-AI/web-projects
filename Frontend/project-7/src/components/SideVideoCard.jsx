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

const SideVideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="rounded-lg overflow-hidden flex items-start p-2 hover:bg-slate-900">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className={`overflow-hidden rounded-md w-[40vw] h-[22vw] lg:w-[10vw] lg:h-[6vw]`}>
          <img
            className="w-full h-full object-cover"
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
          />
        </div>
      </Link>
      <div className=" px-2 mt-2">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className="">
          <h4 className="font-medium lg:text-[0.9vw] text-[2vw]">
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
          <h4 className="font-normal mt-2 opacity-70 lg:text-[12px] text-[14px]">
            {snippet?.channelTitle || demoChannelTitle}
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default SideVideoCard;
