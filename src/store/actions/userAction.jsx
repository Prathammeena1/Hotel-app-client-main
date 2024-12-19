import { renderIntoDocument } from "react-dom/test-utils";
import {
  currentUserService,
  loginService,
  logoutService,
  signupService,
} from "../../api/userServices";
import { login, logout } from "../reducers/userSlice";

export const asynccurrentuser = () => async (dispatch) => {
  const user = await currentUserService();  
  dispatch(login(user));
  !user && dispatch(logout());
};

export const asyncsignup = (user) => async (dispatch) => {
  const data = await signupService(user);
  dispatch(asynccurrentuser());
};

export const asynclogin = (user) => async (dispatch) => {
  const data = await loginService(user);
  dispatch(asynccurrentuser());
  return data;
};

export const asycnlogout = () => async (dispatch) => {
  const res = await logoutService();
  dispatch(logout());
};
