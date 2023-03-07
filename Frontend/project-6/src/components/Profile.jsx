import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { profile } from "../assets";
import { useSelector } from "react-redux";

const Activity = ({ date, month, dilouge, extralink = "" }) => (
  <div className="flex space-x-2 items-center mt-4">
    <div className="flex flex-col items-center py-2 px-4 pointer-events-none bg-[#e4e7ec] rounded-md">
      <h2 className="text-[16px] leading-4 capitalize font-semibold">{date}</h2>
      <h3 className="text-[13px] font-medium leading-4 text-slate-700">
        {month}
      </h3>
    </div>
    <div className="sm:w-[200px] w-[75vw] flex flex-col">
      <p className="sm:text-[14px] font-medium text-slate-500 truncate">
        {dilouge}
      </p>
      {extralink ? (
        <a
          className="text-[12px] text-blue-600 font-semibold"
          href={`${extralink}`}
        >
          Read more
        </a>
      ) : (
        ""
      )}
    </div>
  </div>
);

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);

  const openProfile = useSelector((state) => state.openProfile);

  return (
    <>
      <div className="md:w-[300px] w-full flex md:flex-col flex-row sm:flex-nowrap max-h-[120vh] rounded-lg overflow-y-scroll hide-scrollbar mt-4 drop-shadow-md bg-[#fffefe]">
        {/* profile info */}
        <div className="w-full lg:flex hidden flex-col items-center md:w-auto">
          <div className="w-full h-[100px] bg-blue-300 flex justify-end p-2 relative">
            <BsThreeDots className="hover:cursor-pointer" />
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden bg-white absolute bottom-[-30%] left-[50%] translate-x-[-50%] p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover object-top"
                  src={profile}
                  alt="profile"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center pt-10">
              <h2 className="font-semibold capitalize">Priyanshu Sahu</h2>
              <p className="text-slate-600 text-[14px] capitalize">
                React Developer
              </p>
            </div>
            <div className="w-full flex items-center py-8">
              <div className="flex-1 text-center">
                <h1 className="font-semibold sm:text-[18px]">1,269</h1>
                <p className="text-slate-600 font-medium sm:text-[13px]">
                  Products
                </p>
              </div>
              <div className="w-[1px] sm:h-12 bg-slate-400"></div>
              <div className="flex-1 text-center">
                <h1 className="font-semibold sm:text-[18px]">5.2k</h1>
                <p className="text-slate-600 font-medium sm:text-[13px]">
                  Followers
                </p>
              </div>
            </div>
          </div>
          <div className="w-11/12 h-[1px] bg-slate-300"></div>
        </div>
        {/* earnings info */}
        <div className="text-center flex-1 sm:flex flex-col hidden items-center">
          <div className="w-full flex justify-between items-center px-4 py-4">
            <h1 className="font-semibold sm:text-[16px] text-[14px]">
              Earning
            </h1>
            <AiOutlineInfoCircle />
          </div>
          <div className="flex items-center justify-center pt-2">
            <div
              className="semi-donut-model-2 margin"
              style={{ "--percentage": `76`, "--fill": "#039BE5" }}
            >
              <h2 className="text-primary text-[20px] font-semibold">76%</h2>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="font-semibold sm:text-[18px] text-[12px]">
              $26,256
            </h1>
            <h4 className="sm:text-[16px] text-[10px] font-medium text-slate-700 mb-4">
              Earning this Month
            </h4>
            <p className="capitalize font-medium sm:text-[14px] text-[8px] text-slate-500">
              <code className="bg-green-100 text-green-500 py-1 px-2 rounded-full">
                + 2.65%
              </code>
              from previous period
            </p>
          </div>
          <div className="w-11/12 h-[1px] md:block hidden bg-slate-300 mt-4"></div>
        </div>
        <div className="flex-1">
          {/* activity info */}
          <div className="w-full mt-3 px-4 flex-1 md:py-0 py-4">
            <h2 className="sm:text-[16px] font-semibold">Recent Activity</h2>
            <div className="overflow-y-scroll hide-scrollbar md:h-[200px]">
              <Activity
                date="12"
                month="Sep"
                dilouge={`Responded to need "Volunteer Activities"`}
              />
              <Activity
                date="11"
                month="Sep"
                dilouge={`Everyone realizes would be desirable`}
                extralink={`now`}
              />
              <Activity
                date="10"
                month="Sep"
                dilouge={`Joined the group "Boardsmanship Forum"`}
              />
              <Activity
                date="10"
                month="Sep"
                dilouge={`Joined the group "Boardsmanship Forum"`}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          animation: !openProfile.isOpen ? 'slidedown 0.8s ease-in-out forwards' : 'slideup 0.8s ease-in-out forwards'
        }}
        className={`w-[95vw] sm:hidden flex flex-col max-h-[120vh] rounded-lg drop-shadow-md bg-[#fffefe] absolute top-20 -translate-x-[50%] left-[50%] overflow-hidden`}
      >
        {/* profile section */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full h-[100px] bg-blue-300 flex justify-end p-2 relative">
            <BsThreeDots className="hover:cursor-pointer" />
            <div className="w-[70px] h-[70px] rounded-full overflow-hidden bg-white absolute bottom-[-30%] left-[50%] translate-x-[-50%] p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover object-top"
                  src={profile}
                  alt="profile"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center pt-10">
              <h2 className="font-semibold capitalize">Priyanshu Sahu</h2>
              <p className="text-slate-600 text-[14px] capitalize">
                React Developer
              </p>
            </div>
            <div className="w-full flex items-center py-8">
              <div className="flex-1 text-center">
                <h1 className="font-semibold sm:text-[18px]">1,269</h1>
                <p className="text-slate-600 font-medium sm:text-[13px]">
                  Products
                </p>
              </div>
              <div className="flex-1 text-center border-l-2">
                <h1 className="font-semibold sm:text-[18px]">5.2k</h1>
                <p className="text-slate-600 font-medium sm:text-[13px]">
                  Followers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 h-[1px] self-center block bg-slate-300 mt-4"></div>
        {/* earning section */}
        <div className="text-center flex-1 flex flex-col items-center mb-8">
          <div className="w-full flex justify-between items-center px-4 py-4">
            <h1 className="font-semibold sm:text-[16px] text-[14px]">
              Earning
            </h1>
            <AiOutlineInfoCircle />
          </div>
          <div className="flex items-center justify-center pt-2">
            <div
              className="semi-donut-model-2 margin"
              style={{ "--percentage": `76`, "--fill": "#039BE5" }}
            >
              <h2 className="text-primary text-[20px] font-semibold">76%</h2>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="font-semibold sm:text-[18px] text-[16px]">
              $26,256
            </h1>
            <h4 className="sm:text-[16px] text-[12px] font-medium text-slate-700 mb-4">
              Earning this Month
            </h4>
            <p className="capitalize font-medium sm:text-[14px] text-[10px] text-slate-500">
              <code className="bg-green-100 text-green-500 py-1 px-2 rounded-full mr-2">
                + 2.65%
              </code>
              from previous period
            </p>
          </div>
          <div className="w-11/12 h-[1px] md:block hidden bg-slate-300 mt-4"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
