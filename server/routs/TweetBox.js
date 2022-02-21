const router = require("express").Router();

router.post("/tweetBox", async (req, res) => {
  try {
    let embedType = null;
    let embedID = null;
    const { userID, tweet } = req.body;
    const regexYoutubeLink = /\S*\bwww\.youtube\.com\S*/g;
    if (regexYoutubeLink.test(tweet)) {
      const link = tweet.match(regexYoutubeLink)[0];
      const regexYoutubID = /(?<=v=)[^&]+/;
      embedID = link.match(regexYoutubID)[0];
      embedType = "youtube";
    }
    pool
      .getConnection()
      .then((conn) => {
        conn
          .query(
            "INSERT INTO tweets (userID,tweet,embedType,embedID) value (?,?,?,?)",
            [userID, tweet, embedType, embedID]
          )
          .then((result) => {
            conn.release(); // release to pool
            return res.status(200).send("Tweets posted successfully");
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send("database error");
            conn.release(); // release to pool
          });
      })
      .catch((err) => {
        //not connected
        console.log(err);
        res.status(500).send("unable to connect to the database");
      });
  } catch (error) {
    res
      .status(500)
      .send("internal server error while trying make a registration");
  }
});
module.exports = router;
