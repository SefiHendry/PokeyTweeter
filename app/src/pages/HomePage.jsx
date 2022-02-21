import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Axios from "axios";
import Box from "@mui/material/Box";
import SideBar from "../components/sideBar/SideBar";
import { makeStyles } from "@mui/styles";
import TweetComponent from "../components/tweet/TweetComponent";

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

const HomePage = () => {
  const classes = useStyles();
  const userData = {
    id: localStorage.getItem("id"),
  };
  const history = useHistory();
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    if (!userData["id"]) {
      history.push("/login");
      return;
    }
    Axios.post("http://localhost:3006/drawTweet", {
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

  const commonStyles = {
    m: 1,
    border: 2,
    borderRadius: 16,
    height: 40,
  };
  return (
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
  );
};

export default HomePage;
