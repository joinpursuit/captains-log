const express = require("express");
const app = express();
const captainLogs = require("./models/log.js");

// MiddleWare
app.use(express.json());
// it is needded inorder to add something ...
app.use(express.urlencoded({ extended: false }));

// sending the welcome to "/"
app.get("/", (req, res) => {
	res.send("welcome to the captain's log");
});
// sending the whole log ..
app.get("/logs", (req, res) => {
	res.send(captainLogs);
});
// sending the a perticular index or redirect ...
app.get("/logs/:index", (req, res) => {
	const { index } = req.params;
	captainLogs[index]
		? res.send(captainLogs[req.params.index])
		: res.redirect(404);
});
// creatign a post request
app.post("/logs", (req, res) => {
	const data = captainLogs;
	data.push(data);
});

//exporting App
module.exports = app;

// create a route / that says something like welcome to the captain's log
// create a route /logs that shows the array of logs you've created
// create a 404 route that when a user tries to access a route that doesn't exist, they will see this page
