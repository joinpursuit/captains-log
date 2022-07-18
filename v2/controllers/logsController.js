const express = require('express');
const logsArr = require('../../models/log');
const versionlogs = express.Router();
versionlogs.use(express.json());

versionlogs.get('/', (req, res) => {
  let logList = '';
  logsArr.map((log, index) => {
    logList += `
    <li style="list-style-type:none" ><a style='text-decoration:none' href="/v2/logs/${index}">${log.title}</a></li>`;
  });
  res.send(
    `<h1>Logs List<h1>
    <ul>${logList}</ul>`
  );
});

versionlogs.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const log = { ...logsArr[id] };
  if (id < 0 || id >= logsArr.length) {
    res.redirect(404);
    return;
  } else {
    res.send(`
        <div>
          <h1>${log.captainName}</h1>
          <p>${log.title}</p>
          <p>${log.post}</p>
          <p>${log.mistakesWereMadeToday}</p>
          <p>${log.daysSinceLastCrisis}</p>
          <a style='text-decoration:none' href="/v2/logs/">Back to</a>
        </div>`);
  }
});

module.exports = versionlogs;
