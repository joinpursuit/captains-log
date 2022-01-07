//we have a key/value pair

//an object with functions which will organize our list and return result

module.exports = (list, qKey, qVal) => {
  const organizer = {
    order: (isAsc) => {
      if (isAsc) {
        return list.sort((a, b) => a.captainName.localeCompare(b.captainName));
      }
      return list
        .sort((a, b) => a.captainName.localeCompare(b.captainName))
        .reverse();
    },
    mistakes: (isMistake) => {
      if (isMistake) {
        return list.filter((log) => log.mistakesWereMadeToday);
      }
      return list.filter((log) => !log.mistakesWereMadeToday);
    },
    lastCrisis: (inequalityStr) => {
      //break up inequality and number EX: 'gte10' => [gte , 10]
      const inequalityFuncs = {
        gte: (num) => list.filter((log) => log.daysSinceLastCrisis >= num),
        gt: (num) => list.filter((log) => log.daysSinceLastCrisis > num),
        lte: (num) => list.filter((log) => log.daysSinceLastCrisis <= num),
        lt: (num) => list.filter((log) => log.daysSinceLastCrisis < num),
      };

      //invoke inequality at key passing in number as argument to get calculation back
    },
  };

  //   if key is order or mistakes get boolean result then invoke function
};
