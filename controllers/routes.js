const express = require('express');
const router = express.Router();
const logs = require('../models/log');

router.use('/logs/:id', (req, res, next) => {
  if (!logs[req.params.id]) {
    res.status(404).redirect('/error');
  } else {
    next();
  }
});

router.get('/', (req, res) => {
  res.send("<h1>Welcome to the captain's log</h1>");
});

router.get('/logs', (req, res) => {
  res.json(logs);
});

router.get('/logs/:id', (req, res) => {
  res.json(logs[req.params.id]);
});

router.post('/logs', (req, res) => {
  logs.push(req.body);
  res.json(logs);
});

router.delete('/logs/:id', (req, res) => {
  logs.splice(req.params.id, 1);
  res.send(logs);
});

module.exports = router;
