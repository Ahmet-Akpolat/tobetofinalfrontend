import axios from "axios";
import { selectToken } from "../store/slices/authSlice";
import { store } from "../store/configureStore";
import { toast } from "react-toastify";
import exceptionService from "./exceptionService";

const axiosInstance = axios.create({
  baseURL: "https://tobeto.azurewebsites.net/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Store'dan güncel state'i alın
    const state = store.getState();
    // State üzerinde selector'u uygulayarak token'ı alın
    const token = selectToken(state);
    const localToken = localStorage.getItem("Token");
    // Eğer token varsa, header'a ekleyin
    if (token) {
      config.headers.Authorization = `Bearer ${localToken}`;
    }
    return config;
  },
  (error) => {
    // İstek yapılandırması sırasında bir hata olursa burada işlenir
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    toast.error(
      error.response.data
    );
    return error;
  }
);

export default axiosInstance;
