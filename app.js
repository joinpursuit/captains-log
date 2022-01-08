const express = require("express");
const logController = require("./controllers/captainsLogs")
const app = express

app.use("/captainsLogs", logController);

app.get("/", (req, res) => {
    console.log("Get request to /")
    res.send("Welcome to the captain's log")
})


module.exports = app;