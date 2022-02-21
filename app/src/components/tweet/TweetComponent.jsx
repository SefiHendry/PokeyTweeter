import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import YoutubeEmbed from "../embed/YoutubeEmbed";
import PropTypes from "prop-types";

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
const commonStyles = {
  m: 1,
  border: 2,
  borderRadius: 16,
  height: 40,
};
const TweetComponent = ({ tweet, classes }) => (
  <Box
    //className={classes.boxColor}
    sx={{
      marginTop: 8,
      marginRight: 30,
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
        width: "30%",
        height: "100%",
      }}
    >
      <Card
        style={{ backgroundColor: "#444444" }}
        sx={{ minWidth: 275, maxWidth: 300 }}
      >
        <CardContent>
          <Typography color="white" sx={{ fontSize: 14 }} gutterBottom>
            {tweet.author}
          </Typography>
          <Typography color="white" variant="body2">
            {tweet.body}
            <br />
          </Typography>
          {tweet.embedType == "youtube" && (
            <YoutubeEmbed embedId={tweet.embedID} />
          )}
        </CardContent>
        <CardActions>
          <Typography color="white" size="small">
            {tweet.time}
          </Typography>
        </CardActions>
      </Card>
    </Box>
  </Box>
);

TweetComponent.propTypes = {
  tweet: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default TweetComponent;
