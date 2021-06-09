const express = require("express");

const app = express();
const logsController = require("./controllers/logsController.js");


app.get("/", (req, res) => {
    res.send("Welcome to the captain's log");
  });


  app.use("/log", logsController);


app.get("*", (req, res) => {
  res.send("Page not found");
});


module.exports = app