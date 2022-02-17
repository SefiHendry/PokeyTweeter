const router = require("express").Router();

router.post("/register", async (req, res) => {
  try {
    const { email, userName, userPassword } = req.body;
    pool
      .getConnection()
      .then((conn) => {
        conn
          .query("INSERT INTO users (email, userName, userPassword) value (?,?,?)",[email, userName, userPassword])
          .then((result) => {
            res.status(200).send("user created successfully");
            conn.release(); // release to pool
          })
          .catch((err) => {
            res.status(500).send("unable to insert user into the database");
            conn.release(); // release to pool
          });
      })
      .catch((err) => {
        //not connected
        res.status(500).send("unable to connect to the database");
      });
  } catch (error) {
    res
      .status(500)
      .send("internal server error while trying make a registration");
  }
  // console.log(req.body);
  // res.sendStatus(200);
});
module.exports = router;
