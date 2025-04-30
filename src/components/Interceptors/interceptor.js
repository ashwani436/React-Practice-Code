// axiosClient.js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 👉 Request Interceptor
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 👉 Response Interceptor
axiosClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      alert('Session expired');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default axiosClient;
