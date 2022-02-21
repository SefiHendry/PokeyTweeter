import React, { useEffect, useState } from "react";
import SideBar from "../sideBar/SideBar";
import Box from "@mui/material/Box";
import Axios from "axios";
import { makeStyles } from "@mui/styles";
import TweetComponent from "../tweet/TweetComponent";

const useStyles = makeStyles((theme) => ({
  divColor: {
    backgroundColor: "#171717",
    color: "white",
  },
  boxColor: {
    backgroundColor: "#313131",
    color: "white",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const userData = {
    id: localStorage.getItem("id"),
  };
  const commonStyles = {
    m: 1,
    border: 2,
    borderRadius: 16,
    height: 40,
  };
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    Axios.post("http://localhost:3006/profile", {
      userID: userData["id"],
    })
      .then((response) => {
        setFeed(response.data);
        console.log(feed);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }, []);
  return (
    <div>
      <SideBar />
      <Box
        className={classes.divColor}
        sx={{
          marginTop: 8,
        }}
      >
        <SideBar />
        <br />
        {feed.length === 0 ? (
          <h1>feed is empty</h1>
        ) : (
          feed.map((tweet) => {
            return <TweetComponent tweet={tweet} classes={classes} />;
          })
        )}
      </Box>
    </div>
  );
};

export default Profile;
