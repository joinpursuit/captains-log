const express = require('express')
const logs = express.Router()
const captainLogs = require('../models/log.js')

const validateUrl = (req, res, next) => {
  const http = 'http://'
  const https = 'https://'
  let fullUrl = req.protocol + '://' + req.get('host') + req.url
  console.log(`[development] Request URL: ${fullUrl}`)
  if (fullUrl.substring(0, 7) === http || fullUrl.substring(0, 8) === https) {
    return next()
  } else {
    res
      .status(400)
      .send(`Oops, you forgot to start your url with http:// or https://`)
  }
}

const validateBody = (req, res, next) => {
  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis
  } = req.body
  const validator = ['string', 'string', 'string', 'boolean', 'number']

  if (typeof (captainName && title && post) === 'string') {
    console.log('they are strings')
  }

  next()
}

logs.use(validateUrl)
logs.use(validateBody)

logs.get('/', (req, res) => {
  const query = req.query

  if (req.url === '/') {
    res.json(captainLogs)
  } else {
    if (query.order === 'asc') {
      let sorted = captainLogs.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      )
      res.status(200).json(sorted)
    } else if (query.order === 'desc') {
      let sorted = captainLogs.sort((a, b) =>
        b.title > a.title ? 1 : a.title > b.title ? -1 : 0
      )
      res.status(200).json(sorted)
    }

    if (query.mistakes === 'true') {
      let filtered = captainLogs.filter(
        log => log.mistakesWereMadeToday === true
      )
      res.status(200).json(filtered)
    } else if (query.mistakes === 'false') {
      let filtered = captainLogs.filter(
        log => log.mistakesWereMadeToday === false
      )
      res.status(200).json(filtered)
    }
    let crisis = 0
    switch (query.lastCrisis) {
      case 'gt10':
        crisis = captainLogs.filter(log => log.daysSinceLastCrisis > 10)
        res.status(200).json(crisis)
        break
      case 'gte20':
        crisis = captainLogs.filter(log => log.daysSinceLastCrisis >= 20)
        res.status(200).json(crisis)
        break
      case 'gte5':
        crisis = captainLogs.filter(log => log.daysSinceLastCrisis <= 5)
        res.status(200).json(crisis)
        break
      default:
        res.status(404).send('Not Fund.!')
        break
    }
  }
})

logs.get('/:index', (req, res) => {
  const { index } = req.params
  if (captainLogs[index]) {
    res.status(200).json(captainLogs[index])
  } else {
    res.redirect('/9001')
  }
})

logs.post('/', (req, res) => {
  captainLogs.push(req.body)
  res.status(200).json(captainLogs[captainLogs.length - 1])
})

logs.delete('/:index', (req, res) => {
  const { index } = req.params
  if (index > captainLogs.length - 1) {
    res.status(400).send('Bad Request.!!')
  }
  captainLogs.splice(index, 1)

  res.status(303).json(captainLogs)
})

module.exports = logs
