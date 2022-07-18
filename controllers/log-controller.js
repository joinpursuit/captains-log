const express = require('express');
const router = express.Router();
const captainLogs = require('../models/log');

router.get('/', (request, response) => {
  response.send(captainLogs);
});
/*router.get('/', (request, response) => {
  response.json(captainLogs);
}); */
router.post('/', (request, response) => {
  captainLogs.push(request.body);
  response.json(captainLogs[captainLogs.length - 1]);
});

module.exports = router;
