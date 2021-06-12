const express = require("express");
const logsController = require("./controllers/logsController");


const app = express();

app.use("/logs", logsController);

app.get("/", (req, res) => {
  res.send("Welcome to Flower and OB's Captain's log App!!");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found!!")
})

module.exports = app;