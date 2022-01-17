const express = require("express");
const cors = require("cors");
const app = express();
const logsArr = require("./models/log.js");
require("dotenv").config();
const PORT = process.env.PORT;
app.use(cors());

app.get("/", (req,res)=>{
    res.send("Welcome to the captain's log")
});

app.get("/logs", (req,res)=>{
    res.json(logsArr)
})


// app.get("/logs/verify", (req,res)=>{
//     const {verify} = req.params
//     const { mistakes} = req.query;
//     // if(order === "asc"){
//     //     let sorted = logsArr.sort((a,b)=>{
//     //         return b.captainName - a.captainName
//     //     })
//     //     console.log(sorted)
//     //     res.send(sorted) }
//      if (verify && mistakes === true){
//         let filteredTrue = logsArr.filter(log=>{
//             return log.mistakesWereMadeToday === true
//         });
//         res.send(filteredTrue)
//         console.log("verify log")

//     } 
//if (mistakes === false){
//         // let filteredFalse = logsArr.filter((log)=>{
//         //     return log.mistakesWereMadeToday === false
//         // })
//         console.log("filteredFalse")
//         res.send(logsArr[0])
//     // } else {
//     //     let filteredFalse = "No logs meet that criteria"
//     //     console.log(filteredFalse)
//     //     res.send(filteredFalse)
//     }
// });


app.get("/logs/:index", (req,res)=>{
    const {index} = req.params;

    if(logsArr[index]){
        res.send(logsArr[index])
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
app.put("/logs/:index", (req,res)=>{
    let {index} = req.params;
    if(!logsArr[index]){
        res.redirect("*")
    } 
    let {captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis} = req.body;
    if(captainName && title && post && mistakesWereMadeToday !== undefined && daysSinceLastCrisis){
        logsArr[index] = {
            captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis
        };
        res.json(logsArr)
    } else {
        res.status(422).json({
            error: "Please provide all fields"
        })
    }
});

app.delete("/logs/:index", (req,res)=>{
    const{index} = req.params;
    if(logsArr[index]){
        let removed = logsArr.splice(index,1)
        res.json(removed)
    } else {
        res.redirect("*")
    }
})

app.listen(PORT, ()=>{
 console.log(`listening on port ${PORT}`)
});

module.exports = app;