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
                config.headers.Authorization = `Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQiLCJlbWFpbCI6ImFobWV0QGFobWV0LmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhaG1ldCBhaG1ldCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlN0dWRlbnQiLCJuYmYiOjE3MDU1MDU4NDMsImV4cCI6MTcwNTUwNjQ0MywiaXNzIjoibkFyY2hpdGVjdHVyZUBrb2RsYW1hLmlvIiwiYXVkIjoic3RhcnRlclByb2plY3RAa29kbGFtYS5pbyJ9.2Ps0sFs4sFK3pVM6u6J9PSIN64uUi01PwU-6JIH2IWaQKIIZ6_seRAt4M3wjyU0bahQfya_qgHgxARsOA2gX3w`;
            }
        }
    }
    
    return config;
}, error => {
    // İstek yapılandırması sırasında bir hata olursa burada işlenir
    return Promise.reject(error);
});

export default axiosInstance;
