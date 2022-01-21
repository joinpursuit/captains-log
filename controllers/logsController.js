const express=require("express");
//when you create routes on a separate page, you need to import Router method
const logsRoutes=express.Router();
//import our bookmark array
const logsArray=require("../models/log.js");


logsRoutes.get("/",(req,res)=>{
    res.json(logsArray);
})

logsRoutes.get("/:arrayIndex",(req,res)=>{
    const { arrayIndex } = req.params;
    if(logsArray[arrayIndex]){
        res.json(logsArray[arrayIndex]);
    } else {
        res.redirect("*");
        // res.status(404).json({message:"Not found"});
        // res.status(404).json({error:"Page not found"});
    }
});

logsRoutes.post("/",(req,res)=>{
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length-1]);
})

logsRoutes.put('/:arrayIndex',(req,res)=>{
    const { arrayIndex } = req.params;
    logsArray [arrayIndex] = req.body;
    res.json(logsArray);
})


logsRoutes.delete("/:index",(req,res)=>{
    const { index } = req.params;
    res.json(logsArray.splice(index,1 ));
});
module.exports = logsRoutes;