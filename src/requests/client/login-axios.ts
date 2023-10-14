import { User } from "@/types/user";
import { apiRoutesEnum } from "@/utils/enums";
import { axiosInstance } from "@/utils/axios-server";
import { Address } from "@/types/address";
import { cookies } from "next/headers";
import { axiosInstanceClient } from "@/utils/axios-client";

export const login = async (
  login: string,
  password: string,
  lang: "en" | "ru",
) => {
  const res = await axiosInstanceClient.post<User[]>(
    `/${lang}/client${apiRoutesEnum.sign_in}`,
    {
      login,
      password,
    },
  );

  return res.data;
};
