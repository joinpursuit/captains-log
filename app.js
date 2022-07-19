const express = require("express");

const app = express();

const logsController = require("./controllers/logsController.js");

//middleware code 
app.use(express.json());
app.use("/logs", logsController);

app.get("/", (request, response) => {
    response.send("welcome to captain's log")
})

app.get("*", (request, response)=> {
    response.status(404).json({error: "Page Not Found"})
})

module.exports = app;