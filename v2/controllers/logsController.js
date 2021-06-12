const v2Logs = require("express").Router();
const logsArray = require("../../models/log");

v2Logs.get("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    res.send(
      `<main><h1>${logsArray[id].title}</h1><p>${logsArray[id].post}</p><button onclick="window.history.back()">Go back</button></main>`
    );
  } else {
    res.redirect("/404");
  }
});

v2Logs.get("/", (req, res) => {
  res.send(
    `<ul><li><a href="/v2/logs/0">${logsArray[0].captainName}</a></li><li><a href="/v2/logs/1">${logsArray[1].captainName}</a></li><li><a href="/v2/logs/2">${logsArray[2].captainName}</a></li></ul>`
  );
});

module.exports = v2Logs;
