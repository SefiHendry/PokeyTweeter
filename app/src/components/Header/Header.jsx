import React from "react";
import { GiEgyptianBird } from "react-icons/gi";
import { HeaderContainer } from "./HeaderStyle";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <HeaderContainer>
      <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }} align="left" >
              <GiEgyptianBird />
            PokeyTwitter
          </Typography>
    </HeaderContainer>
  );
};

export default Header;
