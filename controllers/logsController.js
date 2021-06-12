// set logs as the route
const logs = require("express").Router();

//import logsArray
const logsArray = require("../models/log");

// set the path to logs
logs.get("/", (req, res) => {
	res.json(logsArray);
});

// CREATE
logs.get("/:id", (req, res) => {
	const { id } = req.params;
	if (logsArray[id]) {
		res.json(logsArray[id]);
	} else {
		res.redirect("/404");
	}
});

// POST
logs.post("/", (req, res) => {
	logsArray.push(req.body);
	res.json(logsArray);
});

// PUT
logs.put("/:arrayIdx", (req, res) => {
	const { arrayIdx } = req.params;
	const { body } = req;
	logsArray[arrayIdx] = body;
	res.json(logsArray[arrayIdx]);
});

// localhost:3004/logs/2

// DELETE
logs.delete("/:arrayIdx", (req, res) => {
	const { arrayIdx } = req.params;
	const deletedLog = logsArray.splice(arrayIdx, 1);
	res.json(deletedLog[0]);
});

// EXPORT
module.exports = logs;

// BONUS
// logs.get("/", (req, res) => {
// 	const { order } = req.query;
// 	// take in the query string for ascending or descending
// 	if (order === "asc") {
// 		res.json(
// 			logsArray
// 				.map((entry) => {
// 					return entry.post;
// 				})
// 				.sort()
// 		);
// 	} else if (order === "desc") {
// 		res.json(
// 			logsArray
// 				.map((entry) => {
// 					return entry.post;
// 				})
// 				.sort()
// 				.reverse()
// 		);
// 	}
// });
