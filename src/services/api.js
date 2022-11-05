import axios from "axios";

const API = axios.create({
  baseURL: "https://api-psytube.herokuapp.com/api/",
});

export default API;
