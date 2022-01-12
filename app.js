const express = require("express");

const app = express();

const logsController = require("./controllers/logsController.js");
app.use(express.json());
app.use("/logs", logsController);
//both get and use don't work

app.get("/", (_, response) => {
    response.send("welcome to captain's log")
})

app.get("*", (_, response)=> {
    response.status(404).json({error: "Page Not Found"})
})

module.exports = app;