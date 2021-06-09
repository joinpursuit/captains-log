// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
// import logsArray
const logsArray = require("./models/log");
// connect the controller for logs
const logsController = require("./controllers/logsController");

// ROUTES
//  ** use logsController on any path that starts with logs
app.use("/logs", logsController);

app.get("/", (req, res) => {
	res.json(logsArray);
});

// 404 PAGE
app.get("*", (req, res) => {
	res.status(404).send("Page not Found!");
});

// EXPORT
module.exports = app;
