const logs = require("express").Router();
const logsArray = require("../models/log");

logs.get("/:arrayIndex", (req, res) => {
    // const { arrayIndex } = req.params;
    // const filterArr = logsArray.filter((obj, i) => {
    //     return obj === logsArray[arrayIndex];
    // })
    // res.json(...filterArr)
    const log = logsArray[req.params.arrayIndex];
    if(log) {
        res.json(log)
    } else {
        res.redirect("/404")
    }
});


logs.get("/", (req, res) => {
    res.json(logsArray)
});

logs.post("/", (req, res) => {
    console.log(req.body)
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1])
})

module.exports = logs;
