const express = require("express");
const app = express();
const logsController = require("./controllers/logController.js")

app.use("/logs", express.json(), logsController);


app.get("/", (req, res) => {
    res.send(`welcome to the captain's log`) 
});

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;