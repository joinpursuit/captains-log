const express = require("express");
const logController = require("./controllers/logs")
const app = express();

app.use(express.json())
app.use("/logs", logController);
// HOME ROUTE
app.get("/", (req, res) => {
    console.log("Get request to /")
    res.send("Welcome to the captain's log")
});
// ERROR HANDLER 
app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"})
});




module.exports = app;