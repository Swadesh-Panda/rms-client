import React from "react";
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: "Nunito",
    htmlFontSize: 16,
    fontSize: 14,
  },
});

const DefaultTheme = ({children}) => {
  return <ThemeProvider theme={theme} >
    {children}
  </ThemeProvider>
};

export default DefaultTheme;
