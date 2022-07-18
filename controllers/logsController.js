const logs = require("../models/log.js");
const express = require("express");
const logsController = express.Router();

logsController.get("/", (req, res) => {
  res.json(logs);
});

logsController.get("/:id", (req, res) => {
  const { id } = req.params;
  if (logs[id]) {
    res.json(logs[id]);
  } else {
    res.redirect("/error");
  }
});

logsController.post("/", (req, res) => {
  logs.push(req.body);
  res.send(logs[logs.length - 1]);
});

logsController.put("/:id", (req, res) => {
  const { id } = req.params;
  if (logs[id]) {
    logs[id] = req.body;
    res.send("updated bookmark");
  } else {
    res.redirect("/error");
  }
});

logsController.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (logs[id]) {
    const removedBookmark = logs.splice(id, 1);
    res.json(removedBookmark);
  } else {
    res.redirect("/error");
  }
});

module.exports = logsController;
