import { getAddresses } from "@/requests/server/addresses";
import { Grid } from "@mui/material";
import Addresses from "@/content/Addresses/Addresses";
import { I18nProviderClient } from "@/translations/locales/client";

interface AddressesProps {
  params: {
    lang: string;
  };
}

export default async function AddressesPage({
  params: { lang },
}: AddressesProps) {
  const data = await getAddresses();

  return (
    <>
      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <I18nProviderClient locale={lang}>
            <Addresses addresses={data} />
          </I18nProviderClient>
        </Grid>
      </Grid>
    </>
  );
}
