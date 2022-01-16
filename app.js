const express = require("express");
const app = express();

app.use(express.json())

const logsController = require("./controllers/logsController.js")

app.get("/", (req, res) => {
  res.send("Welcome to Captain's Log!");
});

app.use("/logs", logsController)


app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;
