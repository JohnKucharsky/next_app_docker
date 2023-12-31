import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Inter({
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
