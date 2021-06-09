// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
	res.send("Hi ");
});

// 404 PAGE
app.get("*", (req, res) => {
	res.status(404).send("Page not Found!");
});

// EXPORT
module.exports = app;
