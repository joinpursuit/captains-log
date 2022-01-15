const logsController = require("./controllers/logsController");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/logs", logsController);
app.get("/", (req, res) => {
  console.log("GET request to /");
  res.send("Welcome to the Captain's Log");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;
