const logs = require("express").Router();
const captain = require("../captainlogs/captainlog");

logs.get("/", (req, res) => {
  res.json(captain);
});

logs.get("/:id", (req, res) => {
  const { id } = req.params;
  if (captain[id]) {
    res.json(captain[id]);
  } else {
    res.redirect("/*");
  }
});

module.exports = logs;
