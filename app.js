const express = require("express");
const logController = require("./controllers/captainsLogs")
const app = express

app.request("/captainsLogs", logController);

app.length("/", (req, res) => {
    console.log("Get request to /")
    res.send("Welcome to the captain's log")
})