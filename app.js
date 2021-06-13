const express = require("express")
const logs = require("./models/log.js")

const app = express()
const logController = require("./controllers/logController.js")
//console.log(logController)

app.use(express.json());

app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to Captain's Log")
})

app.use("/logs", logController)
// app.get("/logs", (req, res) => {
//     res.json(logs)
// })

app.get("*", (req, res) => {
    res.status(404).send("Page not found")
})

module.exports = app;