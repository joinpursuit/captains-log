const getOrganizedLog = require(`${__dirname}/getOrganizedLog`);
const logsArray = require(`${__dirname}/../models/log`);

exports.getAllLogs = (req, res) => {
  if (JSON.stringify(req.query) === '{}') return res.json(logsArray);
  const [queryKey, queryVal] = Object.entries(req.query)[0];
  const validKeys = {
    order: true,
    mistakes: true,
    lastCrisis: true,
  };

  if (!validKeys[queryKey])
    return res.status(404).json({ status: 'fail', message: 'Invalid Key' }); //guard clause for non existent queryKey

  const organizedLogs = getOrganizedLog(logsArray, queryKey, queryVal);

  res.json({
    status: 'success',
    results: organizedLogs.length,
    data: organizedLogs,
  });
};

exports.redirect = (req, res) => {
  res.status(404).json({ status: 'fail', error: 'invalid index' });
};

exports.getLog = (req, res) => {
  const idx = Number(req.params.arrayIndex);
  if (!logsArray[idx]) res.redirect('/logs/invalid');
  res.json(logsArray[idx]);
};

exports.createLog = (req, res) => {
  logsArray.push(req.body);
  res.status(201).json(logsArray[logsArray.length - 1]);
};

exports.deleteLog = (req, res) => {
  const idx = Number(req.params.arrayIndex);
  logsArray.splice(idx, 1);
  res.status(204).json(logsArray);
};
