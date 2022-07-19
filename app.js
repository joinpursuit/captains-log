const express = require("express");

const app = express();

const PORT = 3003;

const controlledLogs = require("./controllers/logs.controller");
const logs = require("./models/logs");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Captain's Log!");
});

app.use("/logs", controlledLogs);

app.use("*", (req, res) => {
  res.status(404).send("Oops, no page found!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
