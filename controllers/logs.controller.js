const express = require("express");
const logs = express.Router();
let logsData = require("../models/log.js");

logs.get("/", (request, response) => {
	response.json(logsData);
});
logs.get("/:id", (request, response) => {
	const { id } = request.params;
	if (logsData[id]) {
		response.json(logsData[id]);
	} else {
		//redirect to 404 from app.js
		response.redirect("*");
	}
});
logs.post("/", (request, response) => {
	console.log("POST REQUESTED");
	//logsData.push(request.query);
	response.status(303).send("help, and lots of it");
});

module.exports = logs;
