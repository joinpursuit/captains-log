const express = require("express");
const app = express();


app.use(express.json());

const captainLogs = require("./models/log.js");




app.get("/", (req, res) => {
	res.send("welcome to the captain's log");
});
// sending the whole log ..
app.get("/logs", (req, res) => {
	res.send(captainLogs);
});


app.post("/logs", (req, res) => {
	const newLog = req.body;
	captainLogs.push(newLog);
	res.json(captainLogs[captainLogs.length - 1]);
});

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


module.exports = app;