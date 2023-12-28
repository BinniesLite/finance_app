// import axios from 'axios';
// import baseUrl from '../api/baseUrl';
// import { useAuthContext } from '../hooks/useAuthContext';
// const axiosInstance = axios.create({
//   baseURL: baseUrl
// });

// const { user } = useAuthContext();

// axiosInstance.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('user');
//     if (token) {
//       config.headers.Authorization = `Bearer ${user.token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );

// export default axiosInstance;