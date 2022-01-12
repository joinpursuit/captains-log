const express = require("express");
const logRoutesV2 = express.Router();
const logArr2 = require("../../models/log.js");

// *** PART 2 - Create & Show
logRoutesV2.get("/", (req, res)=>{
    res.send(`
    
    <h1>Title</h1>
    <p>Post</p>
    <a href="http://localhost:3003/v2/logs">Back button to go back to /v2/logs</a>
    
    `)
})

module.exports = logRoutesV2;