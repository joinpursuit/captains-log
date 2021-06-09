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

// /logs?order=asc
app.get("/logs/entry?", (req, res) => {
	const { order } = req.query;
	if (order === "asc") {
		res.json(
			logsArray
				.map((entry) => {
					return entry.post;
				})
				.sort()
		);
	}
});

// /logs?order=desc
app.get("/logs/entry?", (req, res) => {
	const { order } = req.query;
	if (order === "asc") {
		res.json(
			logsArray
				.map((entry) => {
					return entry.post;
				})
				.sort()
		);
	}
});

// order the captains
app.get("/logs/captain?", (req, res) => {
	const { order } = req.query;
	if (order === "asc") {
		res.json(
			logsArray
				.map((captain) => {
					return captain.captainName;
				})
				.sort()
		);
	} else {
		res.json(
			logsArray.map((captain) => {
				return captain.captainName;
			})
		);
	}
});
// localhost:3004/logs/captain?order=asc

// 404 PAGE
http: app.get("*", (req, res) => {
	res.status(404).send("Page not Found!");
});

// EXPORT
module.exports = app;
