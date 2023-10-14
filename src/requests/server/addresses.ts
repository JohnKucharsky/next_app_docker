import { axiosInstance } from "@/utils/axios-server";
import { Address } from "@/types/address";
import { apiRoutesEnum } from "@/utils/enums";
import { cookies } from "next/headers";

export const getAddresses = async () => {
  const res = await axiosInstance.get<Address[]>(apiRoutesEnum.address);

  return res.data;
};
