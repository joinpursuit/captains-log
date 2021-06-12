const bookmarks = require("express").Router();
const logsArray = require("../models/log");

bookmarks.get("/", (req, res) => {
    res.json(logsArray);
})
bookmarks.get("/:id", (req, res) => {
    res.json(logsArray[id]);
})

module.exports = bookmarks; 