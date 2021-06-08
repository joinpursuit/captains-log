const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Hey Girlies`);
});

module.exports = app;
