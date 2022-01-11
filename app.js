const express = require("express");
const app = express();

// MiddleWare inorder to use json
app.use(express.json());

const captainLogs = require("./models/log.js");

// Url encoded Middleware...
// app.use(express.urlencoded({ extended: false }));

// sending the welcome to "/"
// PART 1
app.get("/", (req, res) => {
	res.send("welcome to the captain's log");
});
// sending the whole log ..
app.get("/logs", (req, res) => {
	res.send(captainLogs);
});

// creating a post request addng a data at the end of the array
app.post("/logs", (req, res) => {
	const newLog = req.body;
	captainLogs.push(newLog);
	res.json(captainLogs[captainLogs.length - 1]);
});

// /logs?order=asc it will organize the logs alphabetically
// /logs?order=asc
app.get("/logs", (req, res) => {
	const { order } = req.query;
	if (order === "asc") {
		for (let e of captainLogs) {
			res.send(e.captainName.sort());
		}
	}
});

// sending the a perticular index or redirect ...
app.get("/logs/:index", (req, res) => {
	const { index } = req.params;
	captainLogs[index]
		? res.send(captainLogs[req.params.index])
		: res.redirect(404);
});

// to delete something from an index...
app.delete("/logs/:index", (req, res) => {
	const deleteLog = captainLogs.splice(req.params.index, 1);
	res.json(deleteLog);
});

//exporting App
module.exports = app;

// /logs?order=desc it will organize the logs in reverse alphabetical order
// /logs?mistakes=true it will only show the logs where the value of mistakesWereMadeToday is true
// /logs?mistakes=false it will only show the logs where the value of mistakesWereMadeToday is false
// /logs?lastCrisis=gt10 it will return all the logs where the daysSinceLastCrisisis greater tthan 10
// /logs?lastCrisis=gte20it will return all the logs where the daysSinceLastCrisisis greater tthan or equal to 20
// /logs?lastCrisis=lte5it will return all the logs where the daysSinceLastCrisisis less tthan or equal to 5
