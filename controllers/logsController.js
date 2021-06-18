const express = require('express')
const logs = express.Router()
const logsArray = require('../models/log')

const validateURL = (req, res, next) => {
	const http = 'http://'
	const https = 'https://'
	var validURL = req.protocol + '://' + req.get('host') + req.url
	console.log(`[development] REQUEST URL: ${validURL}`)

	if (validURL.substring(0, 7) === http || validURL.substring(0, 8) === https) {
		return next()
	} else {
		res.status('400').send('Sorry, Invalid URL')
	}
}

// const validateBody = ( req, res, next) => {
//   const logs = {
// 		captainName: req.body.string,
// 		title: req.body.string,
// 		post: req.body.string,
// 		mistakesWereMadeToday: req.body.boolean,
// 		daysSinceLastCrisis: req.body.number,
//   }
//   if (!logs.captainName ||
// 		!logs.title ||
// 		!logs.post ||
// 		!logs.mistakesWereMadeToday ||
// 		!logs.daysSinceLastCrisis) {
//       res.status(400).send({ msg: `Sorry, not a valid log` })
//     }
//     next()
// }

// const validateBody = (req, res, next) => {
//   const { captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis } = req.body
//   if (!captainName.string || !title.string || post.string && !mistakesWereMadeToday.boolean && !daysSinceLastCrisis.string) {
//     res.status(400).send()
//   }
//   next()
// }

logs.use(validateURL)

logs.get('/', (req, res) => res.status(200).json(logsArray))

logs.get('/:id', (req, res) => {
	const { id } = req.params
	if (logsArray[id]) {
		res.json(logsArray[id])
	} else {
		res.redirect('/404')
	}
})

logs.post('/', (req, res) => {
	logsArray.push(req.body)
	res.json(logsArray[-1])
})

logs.put('/:id', (req, res) => {
	const { id } = req.params
	if (logsArray[id]) {
		logsArray[id] = req.body
		res.status(200).json(logsArray[id])
	} else {
		res.redirect('/404')
	}
})

logs.delete('/:id', (req, res) => {
	const { id } = req.params
	if (logsArray[id]) {
		const deletedLogs = logsArray.splice(id, 1)
		res.status(200).json(deletedLogs)
	} else {
		res.redirect('/404')
	}
})

module.exports = logs
