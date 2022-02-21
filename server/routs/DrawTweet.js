const router = require("express").Router();

router.post("/drawTweet", async (req, res) => {

  try {
    const { userID } = req.body;
    pool
      .getConnection()
      .then((conn) => {
        conn
          .query("SELECT userName AS author, tweet AS body, DATE_FORMAT(createdAt, '%d/%m/%y %H:%i') as time, embedType, embedID FROM tweets JOIN users ON (tweets.userID = users.id) WHERE userID IN (SELECT followedID FROM followers WHERE followerID = ? UNION SELECT ? )", [
            userID,
            userID
          ])
          .then((result) => {
            conn.release();
            return res.status(200).send(result)
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
