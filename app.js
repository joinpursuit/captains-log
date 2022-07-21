const express = require("express");
const app = express();
const cors = require("cors");
//midleware to enable CORS on our server
// CORS is our doorman for our API
app.use(cors());
const logsController = require("./controllers/logsController.js");
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`welcome to the captain's log`);
});

app.use("/logs", logsController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});
module.exports = app;
