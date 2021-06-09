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

// /logs?order=asc or desc
//localhost:3004/logs/search?order=desc
http: app.get("/logs/search?", (req, res) => {
	if (order === "asc") {
		res.json(
			logsArray
				.map((entry) => {
					return entry.post;
				})
				.sort()
		);
	} else if (order === "desc") {
		res.json(
			logsArray
				.map((entry) => {
					return entry.post;
				})
				.sort()
				.reverse()
		);
	}
});

//logs?mistakes=true or /logs?mistakes=false
app.get("/logs/mistakes?", (req, res) => {
	const { mistakes } = req.query;

	// mistakes ? mistakes.mistakesWereMadeToday : !mistakes.mistakesWereMadeToday;

	res.json(
		logsArray.map((mistakes) => {
			if (mistakes.mistakesWereMadeToday) {
				return mistakes.mistakesWereMadeToday.filter(true);
			} else {
				return "Nope";
			}
		})
	);
	if (mistakes === true) {
		res.json(
			logsArray.map((mistakes) => {
				return mistakes.mistakesWereMadeToday;
			})
		);
	} else {
		return res.json(
			logsArray.map((mistakes) => {
				return "no mistakes";
			})
		);
	}
});

// order the captains
// localhost:3004/logs/captain?order=asc
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

// 404 PAGE
http: app.get("*", (req, res) => {
	res.status(404).send("Page not Found!");
});

// EXPORT
module.exports = app;
