// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { userReducers } from "./reducers/user";
import { postReducers } from "./reducers/post";

const userInfoFromCookie = Cookies.get("user")
  ? JSON.parse(Cookies.get("user"))
  : null;
const updatedPostFromCookie = Cookies.get("post")
  ? JSON.parse(Cookies.get("post"))
  : null;

const initialState = {
  user: {
    userInfo: userInfoFromCookie,
  },
  post: {
    userPost: updatedPostFromCookie,
  },
};

const store = configureStore({
  reducer: {
    user: userReducers,
    post: postReducers,
  },
  preloadedState: initialState,
});

export default store;
