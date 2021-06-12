const logs = require("express").Router();
const logsArray = require("../models/log");

// INDEX FOR logS /logs/
logs.get("/", (req, res) => {
	// req.query; { bananas: 'Tim' };
  const queryString = req.query.order;

console.log(queryString)
const sorted = logsArray.sort((a, b) => a.captainName - b.captainName);
res.send(sorted)
});

// "http://localhost:3001     /logs     ?apples=Tim&bananas=somethingElse&car=bmw"
// "http://localhost:3001     /logs     ?bananas=Tim"



module.exports = logs; 
