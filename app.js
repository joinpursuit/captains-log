const express = require("express");
const app = express();
//middleware that turns our JSON into usable JAVASCRIPT
app.use(express.json());
// we can make our middleware ourselves

// app.use((req, res, next) => {
//     console.log("8.4 IS THE COOLEST!@#!@#!@!@");
//     next();
// });

const logController = require("./controllers/logsController.js");

app.get("/", (req, res) => {
    res.send("welcome to the captain's log")
});
// app.use is a fucntion that allows express to use code in the process of servicing a reuqest
// in this case once we get the route '/bookmarks' express will use the bookmarksController
app.use("/logs", logController);
//  this is a catch all route that must be at the BOTTOM of our routes;
//  this route will handle any bad reoutes and reply with a 404 and a json object
app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

app.delete('/logs/:id', function(req, res) {
    var id = req.params.id;
    app.db('tasks').remove({
      id: id
    });
    return res.status(201).end();
  });

module.exports = app;