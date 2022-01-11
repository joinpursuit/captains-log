const express = require("express");
const app = express();
const logs = require("./models/log.js");
app.get("/", (req, res) => {
  res.send("<h2>welcome to the captain's log<h2>");
});
app.get("/logs", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;
  //organize the logs alphabetically
  if (order == "asc") {
    const copyLogs = [...logs];
    const logs_asc = copyLogs.sort((a, b) => {
      if (a.captainName.toLowerCase() < b.captainName.toLowerCase()) return -1;
      if (a.captainName.toLowerCase() > b.captainName.toLowerCase()) return 1;
      else return 0;
    });
    res.send(logs_asc);
  }
  //organize the logs in reverse alphabetically
  else if (order == "desc") {
    const copyLogs = [...logs];
    const logs_desc = copyLogs.sort((a, b) => {
      if (a.captainName.toLowerCase() < b.captainName.toLowerCase()) return 1;
      if (a.captainName.toLowerCase() > b.captainName.toLowerCase()) return -1;
      else return 0;
    });
    res.send(logs_desc);
  }
  // mistakesWereMadeToday is true
  else if (mistakes === "true") {
    res.send(logs.filter((log) => log.mistakesWereMadeToday));
  }
  // mistakesWereMadeToday is false
  else if (mistakes === "false") {
    res.send(logs.filter((log) => !log.mistakesWereMadeToday));
  }
  // lte 5
  else if (lastCrisis == "lte5") {
    res.send(logs.filter((log) => log.daysSinceLastCrisis <= 5));
  }
  //gte 20
  else if (lastCrisis == "gte20") {
    res.send(logs.filter((log) => log.daysSinceLastCrisis >= 20));
  }

  //gt 10
  else if (lastCrisis == "gt10") {
    res.send(logs.filter((log) => log.daysSinceLastCrisis > 10));
  } else res.send(logs);
});

app.get("*", (req, res) => {
  res.status(404).send({ page: "not found" });
});

module.exports = app;
