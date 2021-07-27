import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoneyfs.netlify.app/api",
});
