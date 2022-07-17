const express = require("express");
const app = express();

const logsController = require("./controllers/logsController")

app.get("/", (req, res) => {
    res.send("Welcome to logs!")
})

app.use("/logs", logsController)
module.exports = app;