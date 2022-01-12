//files
const logsController = require('./controllers/logs');

// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();


app.use(express.json())

app.use("/logs", logsController)

// THE HOME ROUTE
app.get("/", (request, response) => {
    console.log("GET request to /");
    response.send("welcome to the captain's log");
});

//Star (*) Match anything we haven't matched yet.
app.get("/*", (request, response) => {
response.status(404).json({ error: "Page not found" })
})


// EXPORT
module.exports = app;