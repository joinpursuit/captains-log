function sortByName(arr, order) {
  if (order === 'asc') {
    return arr.sort((a, b) => {
      if (a.captainName.toLowerCase() < b.captainName.toLowerCase()) return -1;
      if (a.captainName.toLowerCase() > b.captainName.toLowerCase()) return 1;
      return 0;
    });
  } else if (order === 'desc') {
    return arr.sort((a, b) => {
      if (a.captainName.toLowerCase() < b.captainName.toLowerCase()) return 1;
      if (a.captainName.toLowerCase() > b.captainName.toLowerCase()) return -1;
      return 0;
    });
  }
}

function filterMistakes(arr, mistakes) {
  let boolVal = mistakes === 'true' ? true : false;
  let filteredArr = arr.filter((ele) => {
    return ele.mistakesWereMadeToday === boolVal;
  });
  return filteredArr;
}



module.exports = {
  sortByName,
  filterMistakes
  
};
