const express = require("express");
const logs = require("./models/logs.js")
const app = express();

app.use(express.json())

app.get("/",  (req, res) => {
    res.send("Welcome to the captain's log app")
 })
 
app.get("/logs", (req, res) => {
    res.send(logs);
})


const logsController = require("./controllers/logsController.js");

app.use("/logs", logsController)

app.get("*", (req, res) => {
    res.json({error: "page not found"})
})

module.exports= app;

