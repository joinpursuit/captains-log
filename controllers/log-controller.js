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
router.get('/:arrayIndex', (request, response) => {
  if (captainLogs[request.params.arrayIndex]) {
    response.json(captainLogs[request.params.arrayIndex]);
  } else {
    response.status(403).send('Not a valid Index!');
  }
});
router.delete('/:arrayIndex', (request, response) => {
  const { arrayIndex } = request.params;
  if (!captainLogs[arrayIndex]) {
    response.send('Not a valid index number');
  } else {
    captainLogs.splice(arrayIndex, 1);
    response.send(captainLogs);
  }
});

module.exports = router;
