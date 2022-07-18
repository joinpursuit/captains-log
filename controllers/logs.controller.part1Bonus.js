const part1Bonus = (res, logsArrayCopy, order, mistakes, lastCrisis) => {
  if (order === "asc") {
    res.send(
      logsArrayCopy.sort((a, b) => {
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
      logsArrayCopy.sort((a, b) => {
        if (a.captainName < b.captainName) {
          return 1;
        }
        if (a.captainName > b.captainName) {
          return -1;
        }
        return 0;
      })
    );
  } else if (mistakes === "true") {
    res.send(
      logsArrayCopy.filter((log) => {
        return log.mistakesWereMadeToday;
      })
    );
  } else if (mistakes === "false") {
    res.send(
      logsArrayCopy.filter((log) => {
        return !log.mistakesWereMadeToday;
      })
    );
  } else if (lastCrisis === "gt10") {
    res.send(
      logsArrayCopy.filter((log) => {
        return log.daysSinceLastCrisis > 10;
      })
    );
  } else if (lastCrisis === "gte20") {
    res.send(
      logsArrayCopy.filter((log) => {
        return log.daysSinceLastCrisis >= 20;
      })
    );
  } else if (lastCrisis === "lte5") {
    res.send(
      logsArrayCopy.filter((log) => {
        return log.daysSinceLastCrisis <= 5;
      })
    );
  } else {
    res.status(404).redirect("/error");
  }
};

module.exports = part1Bonus;
