import axios from "axios";
import { redirect } from "next/navigation";

export const axiosInstanceClient = axios.create({
  withCredentials: true,
});

axiosInstanceClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      redirect("/login");
    }
    return await Promise.reject(error);
  },
);
