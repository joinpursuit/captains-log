//Dependencies
const express = require("express");

//files
const captainLogArray = require("../../models/logs");

//.Router creates a new controller that handles a sub-routes.
const v2 = express.Router();


v2.get("/:index", (request, response) => {
  const { index } = request.params;
  console.log("GET request /v2/logs" + index);

  if(index > captainLogArray.length - 1) {response.status(404).send({error: 'Array Index Out Of Bounds'})} else {


  if (captainLogArray[Number(index)].captainName) {
    let html = "",
      anchor = "",
      button = "";
    captainLogArray.map((el) => {
      if (el.captainName === captainLogArray[Number(index)].captainName) {
            anchor = "<a>";
            html = "<ul style='border-collapse: separate; border:2px solid #ff9900;'>";
            button = "<button>";
            html += `<h4> Captain Name: ${el.captainName} </h4><hr>`;
            html += `<h1> Title: ${el.title} </h1><hr>`;
            html += `<p> Post: ${el.post} </p><hr>`;
            html += `<p> mistakesWereMadeToday: ${el.mistakesWereMadeToday}</p><hr>`;
            html += `<p> daysSinceLastCrisis: ${el.daysSinceLastCrisis}</p>`;
            html += "</ul>";
            anchor = `<a href=${"/logs"} onmouseover="this.style.backgroundColor='#ffdd00';this.style.color='#aaaaaa'">Visit captain log API</a>`;
            button = `<p><button style='border-collapse: separate;'><a href=${"/v2/logs"}>Back</a> </button><p>`;
      }
    });
    response.send(html + anchor + button);
  } 
}
});

module.exports = v2;
