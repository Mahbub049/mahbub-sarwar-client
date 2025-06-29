import axios from "axios";

const instance = axios.create({
  baseURL: "https://mahbub-sarwar-server.onrender.com", // Replace with your backend API base URL
});

export default instance;
