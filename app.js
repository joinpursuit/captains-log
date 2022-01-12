// Dependencies
const express = require("express");
const logsController = require("./controllers/logsController");

// Configuration
const app = express();
app.use(express.json());

app.use("/logs", logsController);

//Home
app.get("/", (req, res) => {
  res.send(`Welcome to the Captain's logs`);
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});
module.exports = app;
