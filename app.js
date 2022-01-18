const express = require("express");
const app = express();
const router1 = require("./controllers/logsController.js");
const cors = require("cors");
//const router2 = require("./v2/controllers/logsController.js");

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h2>welcome to the captain's log<h2>");
});
app.use("/logs", router1);
//app.use("/v2/logs", router2);
app.get("*", (req, res) => {
  res.status(404).send({ page: "not found" });
});

module.exports = app;
