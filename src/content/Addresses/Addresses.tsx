"use client";
import Box from "@mui/material/Box";
import { PaginatedAddresses } from "@/types/address";
import { FC, useCallback } from "react";
import { useI18n } from "@/translations/locales/client";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { getAddressesClient } from "@/requests/client/addresses";
import { Button } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const Addresses: FC<{ addresses: PaginatedAddresses }> = ({
  addresses: _addresses,
}) => {
  const { data: addresses } = useQuery({
    queryKey: ["addresses"],
    queryFn: getAddressesClient,
    initialData: _addresses,
  });

  const t = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const passParamClick = async () => {
    await router.push(
      `${pathname}?${createQueryString(
        "sortOrder",
        "desc",
      )}?${createQueryString("orderBy", "updatedAt")}`,
    );
  };

  return (
    <Box>
      <Typography>{t("Name")}</Typography>
      <Typography>{t("Search")}</Typography>
      <Typography>{t("Analytics")}</Typography>
      <Button onClick={passParamClick}> Pass Param</Button>
      {addresses?.data.map((a) => (
        <Typography key={a.id}>{a.country} </Typography>
      ))}
    </Box>
  );
};

export default Addresses;
