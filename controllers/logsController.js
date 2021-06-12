const logs = require("express").Router();
const logsArray = require("../models/log.js");

logs.get("/", (req, res) => {
  res.json(logsArray);
});


// const express = require("express");
// const bookmarks = express.Router();
// const bookmarksArray = require("../models/bookmark.js");

// bookmarks.get("/", (req, res) => {
//     res.json(bookmarksArray);
//   });

module.exports = logs;