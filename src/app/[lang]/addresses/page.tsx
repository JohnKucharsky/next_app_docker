import * as React from "react";
import Container from "@mui/material/Container";
import { getAddresses } from "@/requests/server/addresses";
import PageHeaderCw from "@/content/Addresses/components/PageHeaderCw";
import { Grid } from "@mui/material";
import ResultsCw from "@/content/Addresses/components/ResultsCw";

export default async function AddressesPage() {
  const data = await getAddresses();

  return (
    <>
      <PageTitleWrapper>
        <PageHeaderCw />
      </PageTitleWrapper>
      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <ResultsCw />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
