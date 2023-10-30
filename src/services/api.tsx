import axios from "axios";

export const api = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
  headers: {
    "X-RapidAPI-Key": "95af4f2ee5msh9b9b3a56d5323bap1514a8jsnd7b7a9981360",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
});
export const apiActive = axios.create({
  baseURL: "https://atromix-be-production.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
  },
});
