const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  console.log("Request to path /");
  res.status(200).send(`You throwed a dice and got ${Math.floor(Math.random() * 6) + 1}`);
});
module.exports = app, port;