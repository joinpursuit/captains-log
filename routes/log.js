
const express = require("express")
//Files
const logDB = require("../models/log")

// Routing for log
const logRouter = express.Router()




logRouter.get("/", (req, res) => {
  
    const {order, mistakes, lastCrisis} = req.query // ?order=asc => {"order": "asc"}
    console.log(order)
    const arrayCopy = logDB.slice()

    if (order === "asc") {
        console.log("Organizing alphabetically")
        const sortAsc = arrayCopy.sort((a, b) => a.captainName.localeCompare(b.captainName))
        return res.json(sortAsc)
    }
    else if (order === "desc") {
        console.log("Organizing non-alphabetically")
        const sortAsc = arrayCopy.sort((a, b) => b.captainName.localeCompare(a.captainName))
        return res.json(sortAsc)
    }   

    if (mistakes === "true") {
        console.log("Find mistakes") 
        const find = logDB.filter((each) => {
           if (each.mistakesWereMadeToday) {
               return each
           }  
        }) 
        res.json(find)
    } 
    else if (mistakes === "false") {
        console.log("false?")
        const filter = logDB.filter((each) => !each.mistakesWereMadeToday)
        res.json(filter)
    }

    if (lastCrisis === "gt10") {
        const find = logDB.filter((each) => {
            if (each.daysSinceLastCrisis > 10) {
                return each
            }
        })
        console.log("Greater than 10")
        res.json(find)
    }
    else if (lastCrisis === "gte20") {
        const find = logDB.filter((each) => {
            if (each.daysSinceLastCrisis >= 20) {
                return each
            }
        })
        console.log("Greater or equal to 20")
        res.json(find)
    }
    else if (lastCrisis === "lte5") {
        const find = logDB.filter((each) => {
            if (each.daysSinceLastCrisis <= 5) {
                return each
            }
        })
        console.log("Less or equal to 20")
        res.json(find)
    }

    console.log("Just return the array")
    res.json(logDB)
})


logRouter.get("/:index", (req, res) => {
 const {index} = req.params

 if (index > logDB.length) {
    res.redirect(`/`)
    }

res.json(logDB[index])
})

logRouter.post("/", (req, res)=> {

    const user = req.body
    console.log(req.body)
    logDB.push(user)   
    res.status(201).json(logDB)
})

logRouter.delete("/:index", (req, res) => {
 const {index} = req.params
 const deleted = logDB.find((each, i) => i === Number(index))
 console.log(deleted)
 if (deleted) {
     console.log("it is working for deleting")
     logDB.splice(Number(index), 1)
     res.status(200).json(logDB)
 }else {
     console.log("error for deleting. The inputted index was: " + index)
     res.status(404).json({error: "What you are looking for does not exist hence we can't delete it"})
 }
    
})


module.exports = logRouter;