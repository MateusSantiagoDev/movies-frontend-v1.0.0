import { LoginRequest } from "../types/types";

const baseUrl = "https://movies-backend-production.up.railway.app";

export const Api = {
  login: async ({email, password}: LoginRequest) => {
    const response = await fetch(baseUrl + "/auth", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({email, password}),
    });
    const autorization = await response.json();
    return autorization;
  },

  getMovie: async () => {
    const response = await fetch(baseUrl + "/movie");
      const card = response.json();
      return card;      
  }
}