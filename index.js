const express = require("express");

const mysql = require("mysql2");

const app = express();
const PORT = 4000;

// create the connection to database
const connection = mysql.createConnection({
  host: "147.50.231.19",
  user: "devsriwa_web_info",
  password: "*Nattawut1234",
  database: "devsriwa_web_info",
});

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

app.get("/api", (req, res) => {
  connection.query("SELECT * FROM `test` ", function (err, results, fields) {
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app;
