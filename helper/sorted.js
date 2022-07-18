function sortByName(arr, order) {
  console.log(order);
  let sorted = [];
  if (order === 'asc') {
    sorted = arr.sort((a, b) => {
      if (a.captainName < b.captainName) return -1;
      if (a.captainName > b.captainName) return 1;
      return 0;
    });
  } else if (order === 'desc') {
    sorted = arr.sort((a, b) => {
      if (a.captainName < b.captainName) return 1;
      if (a.captainName > b.captainName) return -1;
      return 0;
    });
  }
  return sorted;
}

function filterMistakes(arr, mistakes) {
  console.log(mistakes, typeof mistakes);
  let boolVal = mistakes === 'true' ? true : false;
  console.log(boolVal, typeof boolVal);
  let filteredArr = arr.filter((ele) => {
    return ele.mistakesWereMadeToday === boolVal;
  });

  return filteredArr;
}

function filterLastCrisis(arr, value) {
  // let regex =(/(\d+)/g);
  // let regex = (/(\d+)/);
  // let patt2 = /[a-zA-Z]/g;
  // let regex = /(\D+)(\d+)/;

  let days = parseInt(value.match(/(\d+)/g));

  console.log('inbonus', days, typeof days, value, typeof value);
  let greaterLesserArray = [];

  if (value === 'gt10') {
    greaterLesserArray = arr.filter((ele) => ele.daysSinceLastCrisis > days);
  } else if (value === 'gte20') {
    greaterLesserArray = arr.filter((ele) => ele.daysSinceLastCrisis >= days);
  } else if (value === 'lte10') {
    greaterLesserArray = arr.filter((ele) => ele.daysSinceLastCrisis <= days);
  } else {
    greaterLesserArray = arr.filter((ele) => ele.daysSinceLastCrisis < days);
  }

  return greaterLesserArray;
}

module.exports = {
  sortByName,
  filterMistakes,
  filterLastCrisis,
};
