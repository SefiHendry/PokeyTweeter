import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { useHistory } from "react-router";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "blue",
  },
}));

const drawerWidth = 240;

const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const itemList = [
    {
      text: "Home Page",
      icon: <HomeIcon />,
      function: () => {
        history.push("/");
      },
    },
    {
      text: "Tweet",
      icon: <DynamicFeedIcon />,
      function: () => {
        history.push("/tweetBox");
      },
    },
    {
      text: "Profile",
      icon: <AccountCircleIcon />,
      function: () => {
        history.push("/profile");
      },
    },
    {
      text: "Logout",
      icon: <LogoutIcon />,
      function: () => {
        localStorage.removeItem("key");
        history.push("/login");
      },
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        // classes={{ paper: classes.paper }}
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{ overflow: "auto" }}
          style={{
            backgroundColor: "#191919",
            width: "100%",
            height: "100vh",
          }}
        >
          <List>
            {itemList.map((item) => (
              <ListItem button key={item.text} onClick={item.function}>
                <ListItemIcon
                  style={{
                    color: "white",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  style={{
                    color: "white",
                  }}
                  primary={item.text}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
