// @ts-nocheck
import React, { useEffect } from "react";
import HandlePosts from "../components/admin/ManagePosts";
import { ProfilePicture } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile, logoutSession } from "../services/index/users";
import { useQuery } from "@tanstack/react-query";
import { logout } from "../store/actions/user";

const UserProfile = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/login");
    }
  }, [navigate, userState.userInfo]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, isLoading } = useQuery({
    queryFn: () => getUserProfile(),
    queryKey: ["profile"],
  });

  const { refetch } = useQuery({
    refetchOnWindowFocus: false,
    enabled: false,
    queryFn: () => logoutSession(),
    onSuccess: () => {
      toast.success("Logout Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    queryKey: ["logout"],
  });

  const logoutHandler = () => {
    dispatch(logout);
    navigate("/");
    refetch();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="w-full py-6 px-4 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <button
            onClick={logoutHandler}
            className="lg:block hidden px-4 py-2 bg-red-500 hover:bg-red-400 transition-colors duration-150 rounded-sm font-semibold text-white"
          >
            Logout
          </button>
        </div>
      </header>
      <div className="flex lg:flex-row flex-col-reverse items-center">
        <HandlePosts posts={data?.posts} isLoading={isLoading} />
        <div className="w-full md:w-[80%] lg:w-1/3 p-1 h-screen lg:bg-[#f8f8f8] lg:drop-shadow-md lg:border-b-[3px] border-b">
          <div className="pb-4 w-full h-full lg:bg-white lg:shadow-inner pt-20">
            <div className="w-full h-full flex flex-col items-center gap-4">
              <ProfilePicture avatar={userState?.userInfo?.avatar} />
              <h1 className="md:text-xl text-sm font-normal mt-3">
                {userState?.userInfo?.name}
              </h1>
              <h2 className="md:text-[14px] text-xs">
                Fullstack Developer | Nextjs Expert | Designer
              </h2>
              <h1 className="text-center max-w-sm text-xs leading-normal md:text-[16px]">
                Strategising, questioning, designing, challenging, planning and
                building digital experiences. That is what gets me out of bed.
              </h1>
              <div className="flex justify-center items-center w-full gap-16 mt-8">
                <div className="flex flex-col items-center capitalize">
                  <h1 className="font-semibold">2123</h1>
                  <h1>followers</h1>
                </div>
                <div className="h-9 border-[1px] sm:border-[1px] border-slate-300" />
                <div className="flex flex-col items-center capitalize">
                  <h1 className="font-semibold">{data?.posts?.length}</h1>
                  {data?.posts?.length > 1 ? <h1>posts</h1> : <h1>post</h1>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
