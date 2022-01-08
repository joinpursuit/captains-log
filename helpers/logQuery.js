const handleOrder = (query, data) => {
  console.log(query);
  const temp = query.toLowerCase();
  switch (temp) {
    case 'asc':
      return data.sort((a, b) => (a.title < b.title ? -1 : 1));
    case 'desc':
      return data.sort((a, b) => (b.title < a.title ? -1 : 1));
    default:
      return data;
  }
};

const handleMistakes = (query, data) => {
  const temp = query.toLowerCase();
  switch (temp) {
    case 'true':
      return data.filter((e) => e.mistakesWereMadeToday);
    case 'false':
      return tempData.filter((e) => !e.mistakesWereMadeToday);
    default:
      return data;
  }
};

module.exports = {
  handleOrder,
  handleMistakes,
};
