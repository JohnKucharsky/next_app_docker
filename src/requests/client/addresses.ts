import { PaginatedAddresses } from "@/types/address";
import { apiRoutesEnum } from "@/utils/enums";
import { axiosInstanceClient } from "@/utils/axios-client";

export const getAddressesClient = async () => {
  const res = await axiosInstanceClient.get<PaginatedAddresses>(
    apiRoutesEnum.address,
  );

  return res.data;
};
