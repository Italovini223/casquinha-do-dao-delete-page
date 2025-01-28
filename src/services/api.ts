import axios from "axios";
export const api = axios.create({
  baseURL: "https://casquinha-do-dao-api.onrender.com",
})