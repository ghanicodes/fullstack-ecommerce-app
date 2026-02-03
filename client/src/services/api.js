import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", 
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,           // success responses
  (error) => Promise.reject(error)  // errors
);

export default api;
