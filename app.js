const express = require("express");
const logsController = require("./controllers/logsController");
const app = express();

app.use(express.json())

app.use((req, res, next) => {
    next();
})

app.use("/logs", logsController);

app.get("/", (req, res) => {
    res.send("Welcome to the captain's log")
})

// app.get("*", (req, res) => {
//     res.status(404).send("Invalid Route")
// });


module.exports = app;