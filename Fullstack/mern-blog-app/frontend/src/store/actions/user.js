import Cookies from "js-cookie";
import { userActions } from "../reducers/user";

export const logout = (dispatch) => {
  dispatch(userActions.resetUserInfo());
  Cookies.remove("user");
};

