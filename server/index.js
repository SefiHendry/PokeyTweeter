const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mariadb = require("mariadb");

const login = require("./routs/Login");
const register = require("./routs/Register");

const port = 3006;
dotenv.config();
app.use(cors());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/Login", login);
app.post("/register", register);
