const express = require("express");
const logs = express.Router();
const logsArray = require("../../models/log.js");

logs.get("/", (req, res) => {
  const logsArrayCopy = [...logsArray];

  res.status(200).send(`
    <ul>
      ${logsArrayCopy
        .map(
          (log, index) => `
        <li style="list-style-type: none">
          <h3>${log.captainName}</h3>
          <a href = "/v2/logs/${index}">${index}</a>
        </li>
      `
        )
        .join("")}
    </ul>
  `);
});

logs.get("/:index", (req, res) => {
  if (logsArray[req.params.index]) {
    const logIndex = logsArray[req.params.index];

    res.send(`
      <h1>Title: ${logIndex.title}</h1>
      <h2>Captain Name: ${logIndex.captainName}</h2>
      <p>Post: ${logIndex.post}</p>
      <h4>Mistakes today: ${logIndex.mistakesWereMadeToday}</h4>
      <h4>Days Since Last Crisis: ${logIndex.daysSinceLastCrisis}</h4>
      <a href="/v2/logs"> <--- Back to main logs </a>
    `);
  } else {
    res.status(404).redirect("/error");
  }
});

module.exports = logs;
