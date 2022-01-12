//Dependencies
const express = require('express');
const app = require('../app');
//files
const logsArray = require('../models/log');
//.Router creates a new controller that handles a sub-route. In this case, it will handle everything that starts with /bookmarks.
const logs = express.Router();


logs.get("/", (_, response) => {
    // response.send(JSON.stringify(bookmarksArray)); (*optional*)
    console.log("GET request to /logs")
    response.json(logsArray);
});

logs.get("/:index", (request,response) => {
    const { index } = request.params;
    if(logsArray[index]) {
        response.json(logsArray[index])
    } else {
        response.redirect("/404")
    }
});

logs.post("/", (request, response) => {
    logsArray.push(request.body)
    const newIndex = logArr.length - 1
    response.json(logArr[newIndex])
});



logs.put("/:index", (request, response) => {
    const { index } = request.params;
    if (logsArray[index]) {
    logsArray[index] = request.body;
    response.status(200).json(logsArray);
    } else {
    response.status(404).json({ error: "Logs Not Found" });
    }
});


logs.delete("/:index", (request, response) => {
    const { index } = request.params;
    if(logsArray[index]) {
        const [deleteLogs] = logsArray.splice(index, 1)
        response.status(200).json(deleteLogs)
        } else {
            response.status(404).json({ error: "Bookmark not found"})
        }
    })


module.exports = logs;