//DEPENDENCIES
const express = require("express");

//CONFIGURATION
const logs = require("express").Router();
const logsArray = require("../models/log");

// ROUTE
logs.get("/", (req, res) => {
	const { order } = req.query;
	if (order) {
		// BONUS -- take in the query string for ascending or descending
		if (order === "asc") {
			res.json(
				logsArray
					.map((entry) => {
						return entry;
					})
					.sort()
			);
		} else if (order === "desc") {
			res.json(
				logsArray
					.map((entry) => {
						return entry;
					})
					.sort()
					.reverse()
			);
		}
	} else {
		res.json(logsArray);
	}
});

// SHOW ROUTE AND REDIRECT
logs.get("/:arrayIdx", (req, res) => {
	const { arrayIdx } = req.params;
	const log = logsArray[arrayIdx];
	if (log) {
		res.json(log);
	} else {
		res.redirect(`404`);
		// res.redirect("/404");
	}
});

// POST  create ==> a request to /logs
logs.post("/", (req, res) => {
	const { body } = req;
	logsArray.push(req.body);
	const newIdx = logssArray.length - 1;
	// res.json(logsArray); // send back entire array
	res.json(bookmarksArray[newIdx]);
	// res.redirect("/")
});

// PUT update ==> /logs/:index
logs.put("/:arrayIdx", (req, res) => {
	const { arrayIdx } = req.params;
	const { body } = req;
	if (logsArray[arrayIdx]) {
		logsArray[arrayIdx] = body;
		res.json(logsArray[arrayIdx]);
	} else {
		res.send("Entry not found");
	}
});

// localhost:3004/logs/2

// DELETE destroy ==> /logs/:index
logs.delete("/:arrayIdx", (req, res) => {
	const { arrayIdx } = req.params;
	if (logsArray[arrayIdx]) {
		const deletedLog = logsArray.splice(arrayIdx, 1);
		res.json(deletedLog[0]);
	} else {
		res.send("Entry not found");
	}
});

// EXPORT
module.exports = logs;
