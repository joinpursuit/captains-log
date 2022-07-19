const logsData = require("../models/log");

const validateValues = (req, res, next) => {
  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = req.body;
  if (
    typeof captainName !== "string" ||
    typeof title !== "string" ||
    typeof post !== "string" ||
    typeof mistakesWereMadeToday !== "boolean" ||
    typeof Number(daysSinceLastCrisis) !== "number"
  ) {
    res.status(404).redirect("/Error");
  } else {
    next();
  }
};

const sortQuery = (req, res, next) => {
  const { order, mistakes, lastCrisis } = req.query;
  const logsDataCopy = [...logsData];
  if (order === "asc") {
    res.send(
      logsDataCopy.sort((a, b) => {
        if (a.captainName < b.captainName) {
          return -1;
        }
        if (a.captainName > b.captainName) {
          return 1;
        }
        return 0;
      })
    );
  } else if (order === "desc") {
    res.send(
      logsDataCopy.sort((a, b) => {
        if (a.captainName < b.captainName) {
          return 1;
        }
        if (a.captainName > b.captainName) {
          return -1;
        }
        return 0;
      })
    );
  } else if (mistakes === 'true') {
    res.send(
      logsDataCopy.filter((log) => {
        return log.mistakesWereMadeToday;
      })
    );
  } else if (mistakes === 'false') {
    res.send(
      logsDataCopy.filter((log) => {
        return !log.mistakesWereMadeToday;
      })
    );
  } else if (lastCrisis === 'gt10') {
    res.send(
      logsDataCopy.filter((log) => {
        return log.daysSinceLastCrisis > 10;
      })
    );
  } else if (lastCrisis === 'gt20') {
    res.send(
      logsDataCopy.filter((log) => {
        return log.daysSinceLastCrisis >= 20;
      })
    );
  } else if (lastCrisis === 'gt5') {
    res.send(
      logsDataCopy.filter((log) => {
        return log.daysSinceLastCrisis <= 5;
      })
    );
  } else {
    next();
  }
};
module.exports = { validateValues, sortQuery };
