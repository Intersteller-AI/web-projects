import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VideoCard, ChannelCard, DetailsLoader, Error } from "../components";
import useScrollBlock from "../components/ScrollBlock";
import { useGetCategoriesQuery } from "../redux/fetchData";
import { urlActions } from "../redux/store";

const Feed = () => {
  // console.log(window.location.pathname);

  const dispath = useDispatch();

  useEffect(() => {
    dispath(urlActions.setUrl(window.location.pathname));
  }, []);

  const navButt = useSelector((state) => state.menu);
  const [blockScroll, allowScroll] = useScrollBlock();
  navButt.isOpen ? blockScroll() : allowScroll();

  const { category } = useSelector((state) => state.category);

  const { data, isFetching, error } = useGetCategoriesQuery(category);

  const videos = data?.items;

  if (isFetching) return <DetailsLoader title={`Searching ${category}...`} />;

  if (error) return <Error />;

  return (
    <div className="w-full px-4 py-2">
      <h1
        style={{ display: category.split(" ")[0] === "New" ? "none" : "block" }}
        className={`font-bold text-4xl`}
      >
        {category}{" "}
        <span className="text-violet-600">
          {category.split(" ")[1] === "Videos" ? "" : "Videos"}
        </span>
      </h1>
      {/* {videos?.id?.channelId && <ChannelCard channelDetail={videos} />} */}
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

export default Feed;
