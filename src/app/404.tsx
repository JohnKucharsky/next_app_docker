import { Box, Typography, Container, styled, Stack, css } from "@mui/material";
import Head from "next/head";
import type { ReactElement } from "react";
import Link from "next/link";

const MainContent = styled(Box)(
  () => css`
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
  `,
);

const TopWrapper = styled(Box)(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(6)};
  `,
);

function Status404() {
  return (
    <>
      <Head>
        <title>Status - 404</title>
      </Head>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="md">
            <Box textAlign="center">
              <Typography variant="h2" sx={{ my: 2 }}>
                Данная страница не существует
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
                sx={{ mb: 4 }}
              >
                Мы поменяли адрес страницы, перейдите по одной из ссылок из
                списка ниже
              </Typography>
              <Stack spacing={2}>
                <Link href={"/analytics"}>Аналитика</Link>
                <Link href={"/transactions"}>Операции</Link>
              </Stack>
            </Box>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default Status404;
