// set logs as the route
const logs = require("express").Router();

//import logsArray
const logsArray = require("../models/log");

// set the path to logs
logs.get("/", (req, res) => {
	res.json(logsArray);
});

// export logs
module.exports = logs;
