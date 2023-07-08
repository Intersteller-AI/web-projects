// @ts-nocheck
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { TbPhotoPlus } from "react-icons/tb";
import CropEasy from "./crop/CropEasy";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfilePic } from "../services/index/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userActions } from "../store/reducers/user";
import Cookies from "js-cookie";

const ProfilePicture = ({ avatar, className }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user);
  const [openCrop, setOpenCrop] = useState(false);
  const [photo, setPhoto] = useState(null);

  const { mutate } = useMutation({
    mutationFn: () => {
      return deleteProfilePic();
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      setOpenCrop(false);
      Cookies.set("user", JSON.stringify(data));
      queryClient.invalidateQueries(["profile"]);
      toast.success("Profile Photo is removed");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setPhoto({ url: URL.createObjectURL(file), file });
    setOpenCrop(true);
  };

  const handleDeleteImage = () => {
    if (window.confirm("Do you want to delete your profile picture")) {
      try {
        const formData = new FormData();

        formData.append("profilePicture", undefined);

        mutate();
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    }
  };

  return (
    <>
      {openCrop &&
        createPortal(
          <CropEasy photo={photo} setOpenCrop={setOpenCrop} />,

          document.getElementById("portal")
        )}

      <div className={`w-1/2 flex flex-col items-center gap-4 ${className}`}>
        <div className="relative w-36 h-36 rounded-full border-2 border-blue-500 lutline-primary overflow-hidden">
          <label
            htmlFor="profilePicture"
            className="cursor-pointer absolute inset-0 rounded-full bg-transparent"
          >
            {avatar ? (
              <img
                src={avatar}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-blue-50/50 flex justify-center items-center">
                <TbPhotoPlus className="w-7 h-auto text-primary" />
              </div>
            )}
          </label>
          <input
            type="file"
            className="sr-only"
            id="profilePicture"
            onChange={handleFileChange}
          />
        </div>
        {userState?.userInfo?.avatar && (
        <button
          onClick={handleDeleteImage}
          type="button"
          className="border border-red-500 hover:text-white hover:bg-red-500 transition duration-150 rounded-md px-4 py-2 md:text-[14px] font-normal text-red-500"
        >
          Remove
        </button>
        )} 
      </div>
    </>
  );
};

export default ProfilePicture;
