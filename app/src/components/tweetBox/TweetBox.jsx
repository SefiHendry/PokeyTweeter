import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import SideBar from "../sideBar/SideBar";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  InputLabelProps: {
    style: { color: "red" },
  },
  boxColor: {
    backgroundColor: "#313131",
    color: "white",
  },
}));

const TweetBox = () => {
  const [tweetMessageValue, settweetMessageValue] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3006/tweetBox", {
      tweet: tweetMessageValue,
      userID: localStorage.getItem("id"),
    })
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
  const commonStyles = {
    m: 1,
    border: 2,
    borderRadius: 16,
    height: 40,
  };
  return (
    <div>
      <SideBar />
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          className={classes.boxColor}
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...commonStyles,
          }}
          style={{
            width: 350,
            height: 300,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ marginBottom: 3, marginTop: 3 }}
          >
            Whats on your mind?
          </Typography>
          <textarea
            onChange={(event) => {
              settweetMessageValue(event.target.value);
            }}
            rows="60"
            cols="35"
            style={{ display: "flex", resize: "none" }}
          ></textarea>
          <Button
            style={{ width: 280 }}
            variant="contained"
            sx={commonStyles}
            onClick={handleSubmit}
          >
            Post Tweet
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default TweetBox;
