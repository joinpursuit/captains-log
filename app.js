const express = require("express");
const app = express();
const captainLogs = require("./models/log.js");

// sending the welcome to "/"
app.get("/", (req, res) => {
	res.send("welcome to the captain's log");
});
// sending the whole log ..
app.get("/logs", (req, res) => {
	res.send(captainLogs);
});
// sending the a perticular index
app.get("/logs/:index", (req, res) => {
	const { index } = req.params;
	captainLogs[index]
		? res.send(captainLogs[req.params.index])
		: res.send("/logs/9001");
});

//exporting App
module.exports = app;

// create a route / that says something like welcome to the captain's log
// create a route /logs that shows the array of logs you've created
// create a 404 route that when a user tries to access a route that doesn't exist, they will see this page
