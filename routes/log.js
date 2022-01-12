
const express = require("express")
//Files
const logDB = require("../models/log")

// Routing for log
const logRouter = express.Router()
logRouter.use(logger)

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



const {body, validationResult} = require('express-validator')

// Add
logRouter.post("/",
body("daysSinceLastCrisis").isNumeric(), 
body('captainName').isString(),
body("title").isString(),
body('post').isString(),
body('mistakesWereMadeToday').isBoolean(),
(req, res) =>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    console.log("Validation passed. Adding the new req.body to the existing array")
    logDB.push(req.body)
    res.status(200).json(logDB)
}
)



logRouter.delete("/:index", (req, res) => {
 const {index} = req.params
 const deleted = logDB.find((each, i) => i === Number(index))
 console.log(deleted)
 if (deleted) {
     console.log("it is working for deleting")
    //  logDB.filter((each, i) => i !== index)
     logDB.splice(Number(index), 1)
     res.status(200).json(logDB)
 }else {
     console.log("error for deleting. The inputted index was: " + index)
     res.status(404).json({error: "What you are looking for does not exist hence we can't delete it"})
 }
    
})

logRouter.put("/:index", (req, res) => {
       
       
    if (!logDB[req.params.index]) {
        res.status(404).json({error: `${req.params.index} does not exist`})
    }
        logDB[req.params.index] = req.body
    //    logDB.splice(req.params.index, 1, req.body)
       res.status(200).json(logDB)
   })



logRouter.get("/v2/logs", (req, res) => {

   console.log("Respond to vs/logs route")
   const map = logDB.map((each) => {
       return(
           
      `  <h1>Title: ${each.title}</h1>  
       <p>Name: ${each.captainName}</p>
         <p>Post: ${each.post}</p>
         <p>Mistakes Made Today: ${each.mistakesWereMadeToday}</p>
         <p>Days Since Last Crisis: ${each.daysSinceLastCrisis}</p>
      `)
   })
   res.send(`
    <form>
    <ul>
     ${map.join("")}
    </ul>

   </form>
   `)
   })


   logRouter.get("/v2/logs/:index", (req, res) => {
    const {index} = req.params
   
    if (index > logDB.length) {
       res.redirect(`/`)
       }
   
   res.send(
    `<form action="/logs/v2/logs" method="GET">
   <ul>
   <h1>Title: ${logDB[index].title}</h1>  
   <p>Name: ${logDB[index].captainName}</p>
     <p>Post: ${logDB[index].post}</p>
     <p>Mistakes Made Today: ${logDB[index].mistakesWereMadeToday}</p>
     <p>Days Since Last Crisis: ${logDB[index].daysSinceLastCrisis}</p>
   </ul>
   <button>Go Back</button>

  </form>`)
   })
   





   function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


module.exports = logRouter;