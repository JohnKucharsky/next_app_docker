import axios from "axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "http://5.61.35.244:8000",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      redirect("/ru/login");
    }
    return await Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use((request) => {
  request.headers.Cookie = `auth=${cookies().get("auth")?.value}`;

  return request;
});
