const logsController = require("./controllers/logsController");

const express = require("express");

const app = express();

app.use("/logs", logsController);

app.get("/", (req, res) => {
  console.log("GET request to /");
  res.send("Welcome to the Captain's Log");
});

module.exports = app;
