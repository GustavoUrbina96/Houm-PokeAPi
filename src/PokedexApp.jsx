import React from "react";
import "./PokedexApp.css";
import { AppRouter } from "./routers/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import colors from "./theme/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.red,
    },
    secondary: {
      main: colors.salmon,
    },
    text: {
      primary: colors.titles,
      secondary: colors.subtitles,
    },
  },
});

export const PokedexApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};
