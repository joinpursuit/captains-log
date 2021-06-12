const logs = require("express").Router();
const logsArray = require("../models/logs");

logs.get("/:id", (req, res) => {
  const { id } = req.params;
  if (logsArray[id]) {
    console.log(logsArray[id]);
    res.json(logsArray[id]);
  } else {
    res.redirect("/*");
  }
});

// part 2
logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.post("/", (req, res) => {
  logsArray.push(req.body);
  console.log;
  res.json(logsArray[logsArray.length - 1]);
});

// part 3

logs.put("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (logsArray[id]) {
      logsArray[id] = body
      res.json(logsArray[id])
      console.log(body)
} else {
      res.redirect("/*");
  }
});

logs.delete("/:id", (req, res) => {
    const { id } = req.params;
    const deletedLog = logsArray.splice(id, 1);
    res.json(deletedLog[0])
})

module.exports = logs;
