// Dependencies
const express = require("express");
const logsController = require("./controllers/logsController");

// Configuration
const app = express();

app.use("/logs", logsController);

//Home
app.get("/", (req, res) => {
  res.send(`Welcome to the Captain's logs`);
});
module.exports = app;
