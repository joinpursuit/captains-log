//Dependencies
const express = require("express");
// const  engine  = require("express-handlebars");

//files
const captainLogArray = require("../../models/logs");
console.log(captainLogArray);
//.Router creates a new controller that handles a sub-routes.
const v2 = express.Router();

// Handlebars Middleware
// app.engine("handlebars", engine.engine({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// v2.get("/:index", (request, response) => {
//   const { index } = request.params;
//   if (captainLogArray[Number(index)]) {
//     captainLogArray.map(el => {
//       if(el.captainName === captainLogArray[Number(index)]) {
//         response.send(el.captainName);
//       }
//     });
//   }

// });

v2.get("/:index", (request, response) => {
  const { index } = request.params;
  console.log("GET request /v2/logs" + index);
  if (captainLogArray[Number(index)].captainName) {
    let html = "",
      anchor = "",
      button = "";
    captainLogArray.map((el) => {
      if (el.captainName === captainLogArray[Number(index)].captainName) {
        response.format({
          "text/html": () => {
            anchor = "<a>";
            html = "<ul>";
            button = "<button>";
            html += `<h4> Captain Name: ${el.captainName} </h4>`;
            html += `<h1> Title: ${el.title} </h1>`;
            html += `<p> Post: ${el.post} </p>`;
            html += `<p> mistakesWereMadeToday: ${el.mistakesWereMadeToday}</p>`;
            html += `<p> daysSinceLastCrisis: ${el.daysSinceLastCrisis}</p>`;
            html += "</ul>";
            anchor = `<a href=${"/logs"} onmouseover="this.style.backgroundColor='#ffdd00';this.style.color='#aaaaaa'">Visit captain log API</a>`;
            button = `<p><button><a href=${"/v2/logs"}>Back</a> </button><p>`;
          },
        });
      }
    });
    response.send(html + anchor + button);
  } else {
    response.status(406).send("Not Acceptable");
  }
});

module.exports = v2;
