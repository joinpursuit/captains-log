const logs = require("express").Router();
const logsArray = require("../models/log");

logs.get("/", (req, res) => {
  const { order, mistakes, lastCrisis } = req.query;
  if (order === "asc") {
    res.json(
      logsArray.sort((a, b) => (a.captainName > b.captainName ? 1 : -1))
    );
  } else if (order === "desc") {
    res.json(
      logsArray.sort((a, b) => (a.captainName > b.captainName ? -1 : 1))
    );
  } else if (mistakes === "true") {
    res.json(
      logsArray.filter((log) => {
        return log.mistakesWereMadeToday === true;
      })
    );
  } else if (mistakes === "false") {
    res.json(
      logsArray.filter((log) => {
        return log.mistakesWereMadeToday === false;
      })
    );
  } else if (lastCrisis === "gt10") {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis > 10;
      })
    );
  } else if (lastCrisis === "gte20") {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis >= 20;
      })
    );
  } else if (lastCrisis === "lte5") {
    res.json(
      logsArray.filter((log) => {
        return log.daysSinceLastCrisis <= 5;
      })
    );
  } else {
    res.json(logsArray);
  }
});

logs.get("/:id", (req, res)=>{
  const log= logsArray[req.params.id]
  if(log) {
  res.json(log)
} else {
  res.redirect('/404')
}
})


logs.post("/", (req, res)=>{
  if(typeof(req.body.captainName)=== "string" && typeof(req.body.title) === "string" && typeof(req.body.post)==="string" && typeof(req.body.mistakesWereMadeToday)==="boolean" && typeof(req.body.daysSinceLastCrisis)==="number") {
    logsArray.push(req.body)
    const newBook = logsArray.length-1
    res.json(logsArray[newBook])
  } else {
     res.send("Error! Invalid input")
  }
  // console.log(req.body)
})


module.exports = logs;
