import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../store/slices/authSlice';
import { store } from '../store/configureStore';
import { Token } from 'typescript';
import { TokenModel } from '../models/responses/AuthResponses/TokenModel';

const axiosInstance = axios.create({
    baseURL: "http://localhost:60805/api/"
});

const token:TokenModel = store.dispatch(selectToken)

axiosInstance.interceptors.request.use(async (config) => {
   
    config.headers.Authorization = `Bearer` + token ;
    return config;

}, error => {
    // İstek yapılandırması sırasında bir hata olursa burada işlenir
    return Promise.reject(error);
});

export default axiosInstance; 