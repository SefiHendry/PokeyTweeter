import React from "react";
import { GiEgyptianBird } from "react-icons/gi";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";


const useStyles = makeStyles((theme) => ({
  boxColor: {
    color: "blue",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="left"
          >
            <GiEgyptianBird />
            PokeyTwitter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
