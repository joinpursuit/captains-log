const express = require("express");
const app = express();
const logsArr = require("./models/log.js");
require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req,res)=>{
    res.send("Welcome to the captain's log")
});

app.get("/logs", (req,res)=>{
    res.send(logsArr)
})

// app.get("/logs", (req,res)=>{
//     const {asc} = req.query;
//     res.send(`It is logging alphabeticall`)
// })

app.get("/logs/:arrayIndex", (req,res)=>{
    const {arrayIndex} = req.params;

    if(logsArr[arrayIndex]){
        res.send(logsArr[arrayIndex])
    }else{
        res.redirect("*")
    }
})
app.get("*", (req,res)=>{
    res.status(404).json({error: "Page not found"});
})
app.post("/logs", (req,res)=>{
    const newLog = {
        captainName: "Picard",
        title: "Stars",
        post: "Today I contemplated that there sure are a lot of stars in the sky",
        mistakesWereMadeToday: true,
        daysSinceLastCrisis: "10",
      };
    console.log(newLog)
    logsArr.push(newLog);
    res.json(logsArr[logsArr.length-1])
});
app.put("/logs/:arrayIndex", (req,res)=>{
    let {arrayIndex} = req.params;
    if(!logsArr[arrayIndex]){
        res.redirect("*")
    } 
    let {captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis} = req.body;
    if(captainName && title && post && mistakesWereMadeToday !== undefined && daysSinceLastCrisis){
        logsArr[arrayIndex] = {
            captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis
        };
        res.json(logsArr)
    } else {
        res.status(422).json({
            error: "Please provide all fields"
        })
    }
});

app.delete("/logs/:arrayIndex", (req,res)=>{
    const{arrayIndex} = req.params;
    if(logsArr[arrayIndex]){
        let removed = logsArr.splice(arrayIndex,1)
        res.json(removed)
    } else {
        res.redirect("*")
    }
})

app.listen(PORT, ()=>{
 console.log(`listening on port ${PORT}`)
});

module.exports = app;