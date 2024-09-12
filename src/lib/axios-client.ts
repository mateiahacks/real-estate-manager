import axios from "axios";

export const API_BASE_URL =
  "https://api.real-estate-manager.redberryinternship.ge/api";
export const PERSONAL_TOKEN = "9cfda933-2e1e-4469-b1ee-71379ffb4dc2";

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${PERSONAL_TOKEN}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    console.log(response);

    throw error;
  }
);

export default axiosClient;
