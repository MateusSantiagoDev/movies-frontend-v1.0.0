import { LoginRequest } from "../types/types";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.post["content-type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if(token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if(error.response.statusCode === 401) {
      if(localStorage.getItem("token")) localStorage.removeItem("token");
    }
}
);

export const Api = {
  login: async ({email, password}: LoginRequest) => {
    try {
      const response = await axios.post("/auth", {email, password});
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      alert(err)
    }
  },

  getPorfile: async () => {
   try {
    const response = await axios.post("/profiles");
    return response.data;
   } catch (err) {
    alert(err)
   }   
  },

  getMovies: async () => {
    try {
      const response = await axios.get("/movies");
      return response.data;
    } catch (err) {

    }
  }
}