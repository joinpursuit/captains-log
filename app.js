const express = require("express");

const app = express();
const logsController = require("./controllers/logscontroller");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the captain's log");
  });


  app.use("/logs", logsController);


app.get("*", (req, res) => {
  res.send("Page not found");
});


module.exports = app