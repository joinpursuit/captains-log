const express = require("express");
const app = express();
const router = require("./controllers/logsController.js");

//middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>welcome to the captain's log<h2>");
});
app.use("/logs", router);

app.get("*", (req, res) => {
  res.status(404).send({ page: "not found" });
});

module.exports = app;
