import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:60805/api/"
});

axiosInstance.interceptors.request.use((config) => {
    // Her istek gönderilmeden hemen önce token'ı localStorage'dan al
    const persistedState = localStorage.getItem('persist:root');
    if (persistedState) {
        const parsedPersistedState = JSON.parse(persistedState);
        const authState = parsedPersistedState.auth;
        if (authState) {
            const parsedAuthState = JSON.parse(authState);
            const token = parsedAuthState.token;

            // Eğer token varsa, bunu Authorization header'ına ekle
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
    }
    
    return config;
}, error => {
    // İstek yapılandırması sırasında bir hata olursa burada işlenir
    return Promise.reject(error);
});

export default axiosInstance;
