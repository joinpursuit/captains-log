const express = require("express");
const logs = express.Router();
let logsData = require("../models/log.js");

logs.use("/:id", (request, response, next) => {
	if (!logsData[request.params.id]) {
		response.redirect("/*");
	}
	next();
});
//READ
logs.get("/", (request, response) => {
	response.json(logsData);
});
//CREATE
logs.post("/", (request, response) => {
	//console.log("POST REQUESTED");
	logsData.push(request.body);
	response.json(logsData[logsData.length - 1]);
});

//READ
logs.get("/:id", (request, response) => {
	const { id } = request.params;
	if (logsData[id]) {
		response.json(logsData[id]);
	} else {
		//redirect to 404 from app.js
		response.redirect("*");
	}
});
//UPDATE
logs.put("/:id", (request, response) => {
	//console.log("PUT REQUESTED");
	const { id } = request.params;
	logsData[id] = request.body;
	response.send(logsData[id]);
});
//DELETE
logs.delete("/:id", (request, response) => {
	const { id } = request.params;
	logsData.splice(id, 1);
	response.send(logsData);
});

module.exports = logs;
