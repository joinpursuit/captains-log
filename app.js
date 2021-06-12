const express = require("express");
const logsController = require("./controllers/logsController");
const logsArray = require("./models/log");
const app = express();
//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
});

app.use("/logs", logsController);
app.get("/", (req, res) => {
  res.json(logsArray);
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});
module.exports = app;
