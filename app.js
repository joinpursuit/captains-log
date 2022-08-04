const express = require("express");
const app = express();
const logsController = require("./controllers/logs.controller.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
	response.send("AHOY THERE MATEYS");
});
app.use("/logs", logsController);
app.get("/*", (request, response) => {
	response.status(404).send("wtf");
});
module.exports = app;
