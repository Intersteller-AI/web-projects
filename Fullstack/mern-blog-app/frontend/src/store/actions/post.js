import { postActions } from "../reducers/post";

export const clearPost = (dispatch) => {
  dispatch(postActions.resetPostInfo());
};
