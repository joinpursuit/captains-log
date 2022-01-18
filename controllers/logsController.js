const express = require("express");
const logsArray = require("../models/logs");
const log = express.Router();

log.get("/", (_, res) => {
  res.send(logsArray);
});

log.get("/:id", (req, res) => {
  logsArray[req.params.id]
    ? res.json(logsArray[req.params.id])
    : res.redirect("/");
});

log.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray);
});

log.delete("/:index", (req, res) => {
  if (logsArray[req.params.index]) {
    const [deletedLog] = logsArray.splice(req.params.index, 1);
    res.status(200).json(deletedLog);
  }
});

// bookmarks.put("/:index", (request, response) => {
//   bookmarksArray[request.params.index] = request.body;
//   response.status(200).json(bookmarksArray);
// });
module.exports = log;
