const express = require("express");
const cors = require("cors");
const app = express();
const logsController = require("./controllers/logsController");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
})

app.use("/logs", logsController);

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
})

module.exports = app;