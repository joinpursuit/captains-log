// DEPENDENCIES
const express = require("express");
// import logsArray
const logsArray = require("./models/log");
const cors = require("cors");

// CONFIGURATION
const app = express();

// connect the controller for logs
const logsController = require("./controllers/logsController");

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	console.log(`testing 101`);
	next();
});

// ROUTES
//  ** use logsController on any path that starts with logs
app.use("/logs", logsController);

// ROOT
app.get("/", (req, res) => {
	res.send("Welcome to my Captain's Log App");
});

app.get("/logs", (req, res) => {
	res.json(logsArray);
});

// 404 PAGE
http: app.get("*", (req, res) => {
	res.status(404).send("Page not Found!");
});

// EXPORT
module.exports = app;

// order the captains
// localhost:3004/logs/captain?order=asc
// app.get("/logs", (req, res) => {
// 	const { order } = req.query;
// 	if (order === "asc") {
// 		res.json(
// 			logsArray
// 				.map((captain) => {
// 					return captain.captainName;
// 				})
// 				.sort()
// 		);
// 	} else {
// 		res.json(
// 			logsArray.map((captain) => {
// 				return captain.captainName;
// 			})
// 		);
// 	}
// });
