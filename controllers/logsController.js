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
    res.redirect("/404");
  }
});
logs.post("/", (req, res)=> {
  logsArray.push(req.body)
  res.json(logsArray)
})

logs.put("/:id", (req, res)=> {
  const {id} = req.params
  const {body} = req
  logsArray[id] = body
  res.json(logsArray[id])
})

logs.delete("/:id", (req, res)=>{
  const {id} = req.params
  const deletedLog = logsArray.splice(id, 1)
  res.json(deletedLog[0])
})



module.exports = logs;
