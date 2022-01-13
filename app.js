const express = require("express");
const app = express();
const logsController = require("./controllers/logsController.js");
// Middleware (new way of writing body-parser)
app.use(express.json());

app.use("/logs", logsController);

app.get("/", (req, res) => {
  res.send(`welcome to the captain's log`)
})
// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;