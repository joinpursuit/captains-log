// DEPENDENCIES
const express = require("express");
const logs = require("../../models/log");
const logsControllers = express.Router();

// ROUTES

//    ID
logsControllers.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send(
    `<div>
      <h1>${logs[id].title}</h1>
      <p>${logs[id].post}</p>
    </div>`
  );
});

//   HOME
logsControllers.get("/", (req, res) => {
  const links = logs
    .map((item, index) => {
      return `<a href="http://localhost:8000/v2/logs/${index}"}>${item.captainName} - ${item.title}</a>`;
    })
    .join("<br>");

  res.send(
    ` <ul style="margin-bottom:10px">
    ${links}
    </ul>`
  );
});

// EXPORT
module.exports = logsControllers;
