//DEPENDENCIES 
const express = require("express");
const logsController = require("./controllers/logsController.js")

//CONFIGURATION 
const app = express();
app.use(express.json())

//Controller
app.use("/logs", logsController)

//ROUTES & CALLBACK
app.get("/", (_, response) => {
    console.log("GET request received to route: /")
    response.send("Welcome to the captain's log")
});

// CREATE 404 route and redirect (WITH *, ORDER MATTERS, so have redirects last to catch all missed routes)
app.get("*", (_, response) => {
    response.status(404).json({error: "Resource not found"})
})

//EXPORT
module.exports = app;