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
            conn.release(); // release to pool
            return res.status(200).send("user created successfully");
          })
          .catch((err) => {
            conn.release(); // release to pool
            return res.status(500).send("unable to insert user into the database");
          });
      })
      .catch((err) => {
        //not connected
        return res.status(500).send("unable to insert user into the database");
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
