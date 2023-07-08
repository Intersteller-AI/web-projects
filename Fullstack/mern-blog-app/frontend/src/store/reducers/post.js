import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const postInitialState = { userPost: null };

const userPost = createSlice({
  name: "post",
  initialState: postInitialState,
  reducers: {
    setPostInfo: (state, action) => {
      state.userPost = action.payload;
      Cookies.set("post", JSON.stringify(state.userPost), { expires: 1 });
    },
    resetPostInfo: (state) => {
      state.userPost = null;
      Cookies.remove("post");
    },
  },
});

const postActions = userPost.actions;
const postReducers = userPost.reducer;

export { postActions, postReducers };
