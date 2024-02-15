import axios from "axios";
import { selectToken } from "../store/slices/authSlice";
import { store } from "../store/configureStore";
import { toast } from "react-toastify";
import exceptionService from "./exceptionService";
import { baseUrl } from "../env/env";

const axiosInstance = axios.create({
  baseURL: `${baseUrl}`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = selectToken(state);
    const localToken = localStorage.getItem("Token");
    if (token) {
      config.headers.Authorization = `Bearer ${localToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error)
    toast.error(exceptionService.errorSelector(error.response.data));
    return error;
  }
);

export default axiosInstance;
