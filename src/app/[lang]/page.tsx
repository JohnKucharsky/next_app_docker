import * as React from "react";
import Box from "@mui/material/Box";

interface HomePageProps {
  params: {
    lang: string;
  };
}

export default async function HomePage({ params: { lang } }: HomePageProps) {
  return <Box sx={{ display: "flex" }}>Home {lang}</Box>;
}
