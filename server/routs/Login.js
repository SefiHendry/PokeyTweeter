const router = require("express").Router();

router.post("/login", async (req, res) => {
  try {
    const { userName, userPassword } = req.body;
    pool
      .getConnection()
      .then((conn) => {
        conn
          .query("SELECT id FROM users WHERE userName=? AND userPassword=?", [
            userName,
            userPassword,
          ])
          .then((result) => {
            if (!result[0]) {
              return res.status(400).send("user not found");
            }
            return res.status(200).send(result[0]);
            conn.release(); // release to pool
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
