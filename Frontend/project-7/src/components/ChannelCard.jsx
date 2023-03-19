import React from "react";
import { Link } from "react-router-dom";
import { demoChannelUrl } from "../constants";

const ChannelCard = ({ channelDetail }) => {
  return (
    <div className="rounded-[20px] overflow-hidden ss:mt-14">
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="flex flex-col justify-center text-center items-center">
          <div className="rounded-full h-[180px] w-[180px] overflow-hidden flex items-center justify-center">
            <img
              src={
                channelDetail?.snippet?.thumbnails?.high?.url || demoChannelUrl
              }
              alt={channelDetail?.snippet?.title}
            />
          </div>
          <h1 className="font-semibold sm:text-3xl mt-4 capitalize">{channelDetail?.snippet?.title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
