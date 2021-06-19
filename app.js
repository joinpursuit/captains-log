const express = require("express");
const logsController = require("./controllers/logs.js");
const app = express();

//Home page
app.get("/", (req, res) => {
  res.send("Welcome to the Captain's Log");
});

app.use(express.json());

app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
});

//Shows the logs
app.use("/logs", logsController);


//If page is not found
app.get("*", (req, res) => {
    res.status(404).send("Page Not Found!!!")
})

module.exports = app;