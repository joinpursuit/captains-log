const express = require("express");
const logRoutesV2 = express.Router();
const logArr2 = require("../../models/log.js");

// *** PART 2 - Create & Show
logRoutesV2.get("/", (req, res)=>{
    const listItem = logArr2.map((post, index)=>{
        return (`<li><a href="/v2/logs/${index}"
            style="padding:7px; 
            background-color:lightblue; 
            border-radius:5px;
            color:white;"
       
        >${post.title}</a> - Captain ${post.captainName} <small>(page ${index})</small></li>`)
    })
    res.send(`
    <div style="background-image:url('https://freepngimg.com/download/light/5-2-light-transparent.png');
        background-size:130%;">
    <h3>V2 Logs List</h3>
    <ul 
        style="border:5px double lightblue; 
            padding-top:15px; 
            padding-bottom:15px;"
    >${listItem}
    </ul>
    </div>`);
})

logRoutesV2.get("/:id", (req, res)=>{
    const { id } = req.params;
    if (logArr2[id]){
        // console.log(logArr2[id].title)
        res.send(`
        <div style="background-image:url('https://freepngimg.com/download/light/5-2-light-transparent.png');
            background-size:130%;
            border:5px double lightblue; 
            padding-bottom:15px;
            padding-left:15px;"
        >
        <h1>Title: ${logArr2[id].title}</h1>
        <p>Post: ${logArr2[id].post}</p>
        <p>Captain Name: ${logArr2[id].captainName}</p>
        <p>Mistakes Were Made Today: ${logArr2[id].mistakesWereMadeToday}</p>
        <p>Days Since Last Crisis: ${logArr2[id].daysSinceLastCrisis}</p>
        <a href="/v2/logs" 
            style="padding:10px; 
            background-color:navy; 
            border-radius:5px;
            color:white;"
        >Back to Logs</a>
        </div>
        `)
    }
})

module.exports = logRoutesV2;