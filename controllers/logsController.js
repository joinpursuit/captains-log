const logs = require("express").Router();
const logsArray = require("../models/log.js");

logs.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (logsArray[arrayIndex]) {
    res.json(logsArray[arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

// - `/logs?order=asc` it will organize the logs alphabetically

logs.get("/", (req, res) => {
  const { order, mistakes, lastCrisis} = req.query
  if(order){
    if(order === "asc"){
      const ascArray = logsArray.sort((a, b)=>{
        b.captainName - a.captainName
      })
      // console.log(ascArray)
    }else if(order === "desc"){
      // console.log("going down") 
      // code here sorts array
    }
  }else if(mistakes){
    if(mistakes === true){
      console.log("object")
      // console.log("going up")
      // code here sorts array
    }else if(mistakes === false){
      // console.log("going down") 
      // code here sorts array
    }
  }else if (lastCrisis){
    if(lastCrisis === "gt10"){
      // console.log("going up")
      // code here sorts array
    }else if(lastCrisis === "gte20"){
      // console.log("going down") 
      // code here sorts array
    }else if(lastCrisis === "lte5"){
      // console.log("going down") 
      // code here sorts array
    }
  }else{
    res.json(logsArray);
  }


});

logs.post("/", (req, res) => {
  const { body } = req;
  res.json(logsArray.push(body));
});

logs.put("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const { body } = req;
  logsArray[arrayIndex] = body
  res.json(logsArray)
});

logs.delete("/:arrayIndex", (req, res) => {
  const {arrayIndex} = req.params;
  const deleted = logsArray.splice(arrayIndex,1);
  res.json(deleted[0])
});

logs.patch("/:arrayIndex", (req, res) => {
  const {arrayIndex} = req.params;
  const { body } = req;
  logsArray
})

module.exports = logs;
