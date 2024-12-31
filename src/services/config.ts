import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL || "/";

const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

export default apiClient;
