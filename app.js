const logController = require("./controllers/logController.js");
const express = require("express");
const app = express();


app.use(express.json());

app.get("/", (request, response) => {
    response.send("Welcome to the captain's log");
});

app.use("/logs", logController);

app.get("*", (request, response) => {
    response.status(404).json({error: "Page not found"});
});


module.exports = app;