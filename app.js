const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Request to path /");
  res
    .status(200)
    .send(`You threw dices and got ${Math.floor(Math.random() * 6) + 1} & ${Math.floor(Math.random() * 6) + 1}`);
});
module.exports = app;
