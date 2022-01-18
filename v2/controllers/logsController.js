// const express = require("express");
// const router2 = express.Router();
// const logs = require("../../models/log.js");
// const keysValid = require("../../helpers/keysValidity.js");
// const templete = `
// <section>
//   <h2>{captainName}<h2>
//   <h3>{title}<h3>
//   <div>{post}</div>
//   <div>mistakesWereMadeToday:{mistakesWereMadeToday}</div>
//   <h4>daysSinceLastCrisis:{daysSinceLastCrisis}<h4>
// </section>`;
// router2.get("/", (req, res) => {
//   const { order, mistakes, lastCrisis } = req.query;
//   //organize the logs alphabetically
//   if (order == "asc") {
//     const copyLogs = [...logs];
//     const logs_asc = copyLogs.sort((a, b) => {
//       if (a.captainName.toLowerCase() < b.captainName.toLowerCase()) return -1;
//       if (a.captainName.toLowerCase() > b.captainName.toLowerCase()) return 1;
//       else return 0;
//     });
//     res.json(
//       logs_asc.map(
//         (log) => `
//     <section>
//       <h2>${log.captainName}<h2>
//       <h3>${log.title}<h3>
//       <div>${log.post}</div>
//       <div>mistakesWereMadeToday:${log.mistakesWereMadeToday}</div>
//       <h4>daysSinceLastCrisis:${log.daysSinceLastCrisis}<h4>
//     </section>`
//       )
//     );
//   }
//   //organize the logs in reverse alphabetically
//   else if (order == "desc") {
//     const copyLogs = [...logs];
//     const logs_desc = copyLogs.sort((a, b) => {
//       if (a.captainName.toLowerCase() < b.captainName.toLowerCase()) return 1;
//       if (a.captainName.toLowerCase() > b.captainName.toLowerCase()) return -1;
//       else return 0;
//     });
//     res.json(
//       logs_desc.map(
//         (log) => `
//     <section>
//       <h2>${log.captainName}<h2>
//       <h3>${log.title}<h3>
//       <div>${log.post}</div>
//       <div>mistakesWereMadeToday:${log.mistakesWereMadeToday}</div>
//       <h4>daysSinceLastCrisis:${log.daysSinceLastCrisis}<h4>
//     </section>`
//       )
//     );
//   }
//   // mistakesWereMadeToday is true
//   else if (mistakes === "true") {
//     res.json(logs.filter((log) => log.mistakesWereMadeToday));
//   }
//   // mistakesWereMadeToday is false
//   else if (mistakes === "false") {
//     res.json(logs.filter((log) => !log.mistakesWereMadeToday));
//   }
//   // lte 5
//   else if (lastCrisis == "lte5") {
//     res.json(logs.filter((log) => log.daysSinceLastCrisis <= 5));
//   }
//   //gte 20
//   else if (lastCrisis == "gte20") {
//     res.json(logs.filter((log) => log.daysSinceLastCrisis >= 20));
//   }

//   //gt 10
//   else if (lastCrisis == "gt10") {
//     res.json(logs.filter((log) => log.daysSinceLastCrisis > 10));
//   } else res.json(logs);
// });
// router2.post("/", (req, res) => {
//   const {
//     captainName,
//     title,
//     post,
//     mistakesWereMadeToday,
//     daysSinceLastCrisis,
//   } = req.body;
//   if (
//     keysValid(
//       captainName,
//       title,
//       post,
//       mistakesWereMadeToday,
//       daysSinceLastCrisis
//     )
//   ) {
//     logs.push(req.body);
//     res.json(logs);
//   } else res.status(404).json({ error: "need all fields!" });
// });
// router2.get("/:ind", (req, res) => {
//   const { ind } = req.params;
//   //if undefined or index is more than the length
//   if (!ind || !logs[ind]) res.redirect("/*");
//   else res.json(logs[ind]);
// });

// router2.delete("/:ind", (req, res) => {
//   const { ind } = req.params;
//   //if undefined or index is more than the length
//   if (!ind || !logs[ind]) res.redirect("/*");
//   else {
//     logs.splice(ind, 1);
//     res.json(logs);
//   }
// });

// module.exports = router2;
