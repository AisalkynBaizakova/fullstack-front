import axios from "axios";

const $axios = axios.create({
  baseURL: "http://localhost:8008/api",
});
$axios.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("token")) || "";
  config.headers = {
    Authorization: `JWT ${token.accessToken}`,
  };

  return config;
});

export default $axios;
