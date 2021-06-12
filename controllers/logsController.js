const logs = require("express").Router();
const logsArray = require("../models/log");
logs.get("/", (req, res) => {
  res.json(logsArray);
});
logs.get("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    res.json(logsArray[id]);
  } else {
    res.redirect("/*");
  }
  logs.post("/", (req, res) => {
    logsArray.push(req.body);

    res.json(logsArray[logsArray.length - 1]);
  });
  logs.delete("/:id", (req, res) => {
    const deletedlog = logsArray.splice(req.params.id, 1);
    res.json(deletedlog);
  });
  logs.put("/:id", (req, res) => {
    const { id } = req.params;
    const { body } = req;
    if (logsArray[id]) {
      logsArray[id] = body;
      res.json(logsArray[id]);
      console.log(body);
    } else {
      res.redirect("/*");
    }
  });
});
module.exports = logs;
