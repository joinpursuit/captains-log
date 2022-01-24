////////HELPER FUNCTIONS/////////

const filteredLogs = (requestQuery, log, test) => {
  for (let query in requestQuery) {
    const input = requestQuery[query];
    if (query === "mistakesWereMadeToday") {
      //use toString to get the content of the boolean result in logs
      if (log[query].toString() === input) {
        test = true;
      } else {
        test = false;
        break;
      }
    }
    if (query === "daysSinceLastCrisis") {
      if (
        (input === "lte5" && Number(log[query]) <= 5) ||
        (input === "gt10" && Number(log[query]) > 10) ||
        (input === "gte20" && Number(log[query]) >= 20)
      ) {
        test = true;
      } else {
        test = false;
        break;
      }
    }
  }
  return test;
  // http://localhost:3000/logs?order=&mistakesWereMadeToday=&daysSinceLastCrisis=
};

const sort = (logs, selection) => {
  if (selection === "asc") {
    return logs.sort((a, b) => {
      if (a.captainName > b.captainName) return 1;
      if (a.captainName < b.captainName) return -1;
      return 0;
    });
  } else {
    return logs.sort((a, b) => {
      if (a.captainName < b.captainName) return 1;
      if (a.captainName > b.captainName) return -1;
      return 0;
    });
  }
};

const isValid = (log) => {
  if (
    typeof log.id === "string" &&
    typeof log.captainName === "string" &&
    typeof log.title === "string" &&
    typeof log.post === "string" &&
    typeof log.mistakesWereMadeToday === "boolean" &&
    Number(log.daysSinceLastCrisis) >= 0
  ) {
    return true;
  }
  return false;
};

const formatLog = (log) => {
  return (`
        <hr></hr>
        <h1>Title: ${log.title}</h1>
        <h2>By: ${log.captainName}</h2>
        <p style="color:red">Any mistakes today? ${log.mistakesWereMadeToday ? "Yes" : "No"}</p>
        <p style="color:blue">Last Crisis: ${log.daysSinceLastCrisis} days ago</p>
        <p>Post: ${log.post}</p>
        <a href="/logs"><button>Back</button></a>
        <hr></hr>
        `);
};

const formatLinks = (logs) => {
  return (`<ul>${logs.map((log) => {
      return (`<li><a href="/logs/${log.id}">${log.title}</a></li>`);
    }).join("")}</ul>`);
};

module.exports = {
  filteredLogs,
  sort,
  isValid,
  formatLog,
  formatLinks,
};
