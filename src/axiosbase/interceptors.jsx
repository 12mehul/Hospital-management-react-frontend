import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const adminFetch = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

adminFetch.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

adminFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      setTimeout(() => (window.location.href = "/login"), 1000);
    }
    return Promise.reject(error);
  }
);

export default adminFetch;
