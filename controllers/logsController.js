const logs = require("express").Router();
const logsArray = require("../models/log.js");

logs.get("/:arrayIndex", (req,res)=>{
    const { arrayIndex } = req.params;
    res.json( logsArray[arrayIndex])
  })

logs.get("/", (req, res) => {
    res.json(logsArray);
})




module.exports = logs; 