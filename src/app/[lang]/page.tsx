import * as React from "react";
import Box from "@mui/material/Box";

import { getDictionary } from "@/translations/dictionary";
import { redirect } from "next/navigation";

interface HomePageProps {
  params: {
    lang: string;
  };
}

export default async function HomePage({ params: { lang } }: HomePageProps) {
  const dict = await getDictionary(lang);

  return <Box sx={{ display: "flex" }}>{dict.products.cart}</Box>;
}
