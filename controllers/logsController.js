const express = require("express")
const logs = express.Router()
const logsData = require("../models/log")

const { validateURL } = require("../models/validations")

logs.post("/", validateURL, (req, res) => {
    logsData.push(req.body);
    res.json(logsData[logsData.length - 1]);
  });

logs.get("/", (req, res) => {
    res.json(logsData)
})

logs.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if(logsData[arrayIndex]){
      res.json(logsData[arrayIndex]);
    } else {
      res.redirect("/")
    }
  });

  logs.delete("/:arrayIndex", (req, res)=> {
    const {arrayIndex} = req.params
    const deletedLogs = logsData.splice(arrayIndex, 1)
    res.status(200).json(deletedLogs)
});

logs.put("/:arrayIndex", (req,res) => {
    const {arrayIndex} = req.params
    if(logsData[arrayIndex]){
      logsData[arrayIndex] = req.body
      res.status(200).json(logsData[arrayIndex])
    } else {
      res.redirect("/")
    }
});



module.exports = logs