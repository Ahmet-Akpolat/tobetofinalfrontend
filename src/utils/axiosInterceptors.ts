import axios from "axios";
import { selectToken } from "../store/slices/authSlice";
import { store } from "../store/configureStore";

const axiosInstance = axios.create({
  baseURL: "http://localhost:60805/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Store'dan güncel state'i alın
    const state = store.getState();
    // State üzerinde selector'u uygulayarak token'ı alın
    const token = selectToken(state);

    // Eğer token varsa, header'a ekleyin
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // İstek yapılandırması sırasında bir hata olursa burada işlenir
    return Promise.reject(error);
  }
);

export default axiosInstance;
