const express = require("express");
const logs = express.Router();

const logsData = require("../models/log.js");
const { validateURL } = require("../models/validations.js");

logs.get("/", (req, res) => {
    res.json(logsData);
});

logs.post("/", validateURL, (req, res) => {
    logsData.push(req.body);
    res.json(logsData[logsData.length - 1]);
});

logs.get("/:id", validateURL, (req, res) => {
    const { id } = req.params;
    if (logsData[id]) {
        res.json(logsData[id])
    } else {
        res.status(404).redirect('/error')
    } 
})
    // if (order) {
    //         if (order === "asc") {
    //          res.send(logsCopy.sort((a, b) => (a.captainName < b.captainName) ? -1 : 1))
    //          } else if (order === "desc") {
    //           res.send(
    //             logsCopy.sort((b, a) => {
    //               if (a.captainName < b.captainName) {
    //                 return 1;
    //               }
    //               if (a.captainName > b.captainName) {
    //                 return -1;
    //               }
    //               return 0;
    //             }),
    //           );
    //         }
    //       } else {
    //         res.send(logsCopy);
    //       }


logs.delete('/:id', (req, res) => {
    const { id } = req.params
    logsData.splice(id,1)
    res.send(logsData)
});

// logs.get("/order", (req, res) => { 
// const {order} = req.query;
// console.log(req.query)
// // const logsCopy = [...logsData];
// res.send(`this is the route ${order}`)

//   if (order) {
//     if (order === "asc") {
//      res.send(logsCopy.sort((a, b) => (a.captainName < b.captainName) ? -1 : 1))
//      } else if (order === "desc") {
//       res.send(
//         logsCopy.sort((b, a) => {
//           if (a.captainName < b.captainName) {
//             return 1;
//           }
//           if (a.captainName > b.captainName) {
//             return -1;
//           }
//           return 0;
//         }),
//       );
//     }
//   } else {
//     res.send(logsCopy);
//   }
// });





module.exports = logs