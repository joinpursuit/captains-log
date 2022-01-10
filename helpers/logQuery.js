const handleOrder = (query = '', data) => {
  switch (query.toLowerCase()) {
    case 'asc':
      return data.sort((a, b) => (a.title < b.title ? -1 : 1));
    case 'desc':
      return data.sort((a, b) => (b.title < a.title ? -1 : 1));
    default:
      return data;
  }
};

const handleMistakes = (query = '', data) => {
  switch (query.toLowerCase()) {
    case 'true':
      return data.filter((e) => e.mistakesWereMadeToday);
    case 'false':
      return data.filter((e) => !e.mistakesWereMadeToday);
    default:
      return data;
  }
};

const handleCrisis = (query = '', data) => {
  const oper = query
    .split('')
    .filter((e) => !(Number(e) + 1))
    .join('')
    .toLowerCase();
  const amount = Number(
    query
      .split('')
      .filter((e) => Number(e) + 1)
      .join('')
  );
  switch (oper.slice(0, 2)) {
    case 'gt':
      return data.filter((e) =>
        oper.slice(-1) === 'e'
          ? e.daysSinceLastCrisis >= amount
          : e.daysSinceLastCrisis > amount
      );
    case 'lt':
      return data.filter((e) =>
        oper.slice(-1) === 'e'
          ? e.daysSinceLastCrisis <= amount
          : e.daysSinceLastCrisis < amount
      );
    default:
      return data;
  }
};

module.exports = {
  handleOrder,
  handleMistakes,
  handleCrisis,
};
