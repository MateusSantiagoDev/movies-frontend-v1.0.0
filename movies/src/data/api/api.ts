import {
  CardDataRequest,
  CardRequest,
  LoginRequest,
  profileRequest,
} from "../types/types";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.post["content-type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
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
    if (error.response.statusCode === 401) {
      if (localStorage.getItem("token")) localStorage.removeItem("token");
    }
  }
);

export const Api = {
  login: async ({ email, password }: LoginRequest) => {
    try {
      const response = await axios.post("/auth", { email, password });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  createPorfile: async ({ movie, serie, anime }: profileRequest) => {
    try {
      const response = await axios.post("/profiles", {
        movie,
        serie,
        anime,
      });
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  getMovie: async () => {
    try {
      const response = await axios.get("/movie");
      return response.data;
    } catch (err) {}
  },

  getSerie: async () => {
    try {
      const response = await axios.get("/serie");
      return response.data;
    } catch (err) {}
  },

  getAnime: async () => {
    try {
      const response = await axios.get("/anime");
      return response.data;
    } catch (err) {}
  },

  createMovie: async ({
    title,
    description,
    avaliation,
    image,
  }: CardRequest) => {
    try {
      const response = await axios.post("/movie", {
        title,
        description,
        avaliation,
        image,
      });
      return response.data;
    } catch (err) {
      console.log("api", err);
    }
  },

  updateMovie: async (data: CardDataRequest) => {
    try {
      const response = await axios.patch("/movie", data);
      return response.data;
    } catch (err) {}
  },

  deleteMovie: async (id: string) => {
    try {
      const response = await axios.delete(`/movie/${id}`);
      return response.data;
    } catch (err) {}
  },

  getMovieById: async (id: string) => {
    try {
      const response = await axios.get(`/movie/${id}`);
      return response.data;
    } catch (err) {}
  },

  createSerie: async ({
    title,
    description,
    avaliation,
    image,
  }: CardRequest) => {
    try {
      const response = await axios.post("/serie", {
        title,
        description,
        avaliation,
        image,
      });
      return response.data;
    } catch (err) {}
  },

  deleteSerie: async (id: string) => {
    try {
      const response = await axios.delete(`/serie/${id}`);
      return response.data;
    } catch (err) {}
  },

  createAnime: async ({
    title,
    description,
    avaliation,
    image,
  }: CardRequest) => {
    try {
      const response = await axios.post("/anime", {
        title,
        description,
        avaliation,
        image,
      });
      return response.data;
    } catch (err) {}
  },

  deleteAnime: async (id: string) => {
    try {
      const response = await axios.delete(`/anime/${id}`);
      return response.data;
    } catch (err) {}
  },
};
