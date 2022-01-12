const express = require("express");
const app = express();

//middleware
app.use(express.json());

const logsController = require("./controllers/logsController.js");

app.get("/", (req, res)=> {
    res.send(`welcome to the captain's log`);
});

app.use("/logs", logsController);

module.exports = app;