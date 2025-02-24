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
    if (response.status == 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default adminFetch;
