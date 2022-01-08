module.exports = (list, qKey, qVal) => {
  const organizer = {
    order: (asc) => {
      const isAsc = asc === 'asc';
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
    lastCrisis: (str) => {
      const splitString = str.split(/(\d+)/).slice(0, -1); //break up inequality key and number EX: 'gte10' => [gte , 10]
      splitString[1] = Number(splitString[1]); //convert string num to num data type
      const [inequalityStr, num] = splitString;

      const inequalityFuncs = {
        gte: (num) => list.filter((log) => log.daysSinceLastCrisis >= num),
        gt: (num) => list.filter((log) => log.daysSinceLastCrisis > num),
        lte: (num) => list.filter((log) => log.daysSinceLastCrisis <= num),
        lt: (num) => list.filter((log) => log.daysSinceLastCrisis < num),
      };

      return inequalityFuncs[inequalityStr](num); //invoke inequality at key passing in number as argument to get filtered result back
    },
  };
  //Expected - organizer['lastCrisis']('gt10')
  return organizer[qKey](qVal);
};
