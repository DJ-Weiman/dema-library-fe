import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dema-library-latest.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
