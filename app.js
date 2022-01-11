const express = require("express");
const app = express();
const logsController = require("./controllers/logsController.js");

app.get("/", (req, res) => {
  res.send(`welcome to the captain's log`)
})

app.use("/logs", logsController);
// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;