import axios from "./axiosConfig.jsx";
import { toast } from "react-toastify";

export const currentUserService = async () => {
  try {
    const { data } = await axios.get("/users/current-user");
    return data;
  } catch (error) {
    // console.log(error.response.data.message);
    toast.error(error.response.data.message);
  }
};

export const loginService = async (userData) => {
  try {
    const { data } = await axios.post("/users/login", userData);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const signupService = async (userData) => {
  try {
    const { data } = await axios.post("/users/signup", userData);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const logoutService = async () => {
  try {
    const { data } = await axios.get("/users/logout");
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const putProfileService = async (userData) => {
  try {
    const { data } = await axios.put("/users/profile", userData);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const resetPasswordService = async (email) => {
  try {
    const { data } = await axios.post("users/reset-password", email);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
