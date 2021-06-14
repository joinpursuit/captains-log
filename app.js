//DEPENDENCIES
const express = require("express");
const captainsController = require("./controllers/captainsController.js");

//CONFIGURATION
const app = express();


// MIDDLEWARE
app.use(express.json());

//ROUTES

//Route to Welcome page
app.get("/", (req, res) => {
    res.send(`welcome to the captain's log`);
});

//Route to Controller
app.use("/logs", captainsController)

//Page not Found Route
app.get("*", (req, res) => {
    res.status(404).send("Page Not Found!");
});


//EXPORT
module.exports = app;