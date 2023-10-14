import { axiosInstance } from "@/utils/axios-server";
import { PaginatedAddresses } from "@/types/address";
import { apiRoutesEnum } from "@/utils/enums";

export const getAddresses = async () => {
  const res = await axiosInstance.get<PaginatedAddresses>(
    apiRoutesEnum.address,
  );

  return res.data;
};
