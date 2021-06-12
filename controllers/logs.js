const logs = require("express").Router();
const logsArray = require("../models/log");
// /logs/
logs.get("/", (req, res) => {
  // const search = req.query.search;
  // console.log(req.query);
  // console.log(search);
  res.json(logsArray);
});

// const path = 'http://localhost:3001      /logs    ?arrayId=25'
// GET /logs ----- arrayId=25
// GET /logs/banana ----- arrayId=25

logs.get("/:arrayIdx", (req, res) => {
  // console.log(req.params);
  const { arrayIdx } = req.params;
  const log = logsArray[arrayIdx];
  if (log) {
    res.json(log);
  } else {
    res.redirect("/404");
  }
});

// POST = /logs
logs.post("/", (req, res) => {
  const { body } = req;
  logsArray.push(body);
  const newIdx = logsArray.length - 1;
  // res.redirect("/");
  res.json(logsArray[newIdx]);
  // res.json(logsArray);
});

// PUT - update action - /logs/:id - put has a body
logs.put("/:arrayIdx", (req, res) => {
  const { arrayIdx } = req.params;
  const { body } = req;
  logsArray[arrayIdx] = body;
  res.json(logsArray[arrayIdx]);
}); 

// DELETE - destroy action - /logs/:id
logs.delete("/:arrayIdx", (req, res) => {
  const { arrayIdx } = req.params; 
  const deletedlog = logsArray.splice(arrayIdx, 1);
  res.json(deletedlog[0]);
})

module.exports = logs; 


