import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
// import Helmet from "react-helmet";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    {/* <Helmet bodyAttributes={{style: 'background-color : red'}}/> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
