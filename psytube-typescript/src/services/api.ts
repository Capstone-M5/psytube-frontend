import axios from "axios";

const API = axios.create({
  baseURL: "https://api-psytube.herokuapp.com/api/",
  timeout: 2000000,
});

export default API;
