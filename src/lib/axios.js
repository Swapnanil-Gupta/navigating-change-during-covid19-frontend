import axiosMain from "axios";

const axios = axiosMain.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axios;
