const express = require("express");
const logs = express.Router();

const logArray = require("../../models/log");

// SUB ROUTE W/PARAMETER POINTING TO INDEX POSITION, SEND ERROR MESSAGE
logs.get("/:index", (req, res) => {
  const { index } = req.params;
  console.log("GET request to /v2/logs" + index);
  if (index > logArray.length - 1) {
    res.status(404).send({ error: "Captain not found" });
  }
  //   IF FOUND, FORMAT HTML THEN SEND HTML
  if (logArray[Number(index)].captainName) {
    let anchor = "",
      button = "",
      html = "";
    logArray.map((element) => {
      if (element.captainName === logArray[Number(index)].captainName) {
        res.format({
          "text/html": () => {
            anchor = "<a>";
            button = "<button>";
            html = "<ul>";
            html += `<h4> Captain Name: ${element.captainName} </h4>`;
            html += `<h1> Title: ${element.title} </h1>`;
            html += `<li> Post: ${element.post} </li>`;
            html += `<li> mistakesWereMadeToday: ${element.mistakesWereMadeToday}</li>`;
            html += `<li> daysSinceLastCrisis: ${element.daysSinceLastCrisis}</li>`;
            html += "</ul>";
            anchor = `<a href=${"/logs"}>Visit captain log API</a>`;
            button = `<p><button><a href=${"/v2/logs"}>Back</a> </button><p>`;
          },
        });
      }
    });
    res.send(html + anchor + button);
  }
});

module.exports = logs;
