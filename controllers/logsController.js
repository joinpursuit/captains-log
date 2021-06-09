const logs = require("express").Router();
const logsArray = require("../models/logs");

logs.get("/", (req, res) => {
res.json(logsArray);
})