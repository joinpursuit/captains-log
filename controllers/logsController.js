const logs = require("express").Router();
const logsArray = require("../models/log");

// Part 1 and BONUS
logs.get("/", (req, res) => {
  const { order } = req.query;
  if (order) {
    // take in the query string for ascending or descending
    if (order === "asc") {
      res.json(
        logsArray
          .map((entry) => {
            return entry;
          })
          .sort()
      );
    } else if (order === "desc") {
      res.json(
        logsArray
          .map((entry) => {
            return entry;
          })
          .sort()
          .reverse()
      );
    }
  } else {
    res.json(logsArray);
  }
});

logs.get("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    res.json(logsArray[id]);
  } else {
    res.redirect("/404");
  }
});
logs.post("/", (req, res) => {
  logsArray.push(req.body);
  res.json(logsArray);
});

logs.put("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (logsArray[id]) {
    logsArray[id] = body;
    res.json(logsArray[id]);
  } else {
    res.redirect("/404");
  }
});

logs.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    const deletedLog = logsArray.splice(id, 1);
    res.status(200).json(deletedLog[0]);
  } else {
    res.status(404).send("404 Page Not Found!!!");
  }
});

module.exports = logs;
