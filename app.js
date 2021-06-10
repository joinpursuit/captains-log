const express = require("express");
const app = express();
const logs = require("./controllers/logsController");

app.use("/logs", logs);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("*", (req, res)=>{
  res.status(404).send("Page not found")
})

module.exports = app;
