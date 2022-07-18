// const express = require("express");

// const logRoutes = express.Router();
// const logArr = require("../models/log.js");

// logRoutes.get("/", (req, res) => {
//   res.json(logArr);
// });

// logRoutes.get("/:id", (req, res) => {
//   const { id } = req.params;
//   //if undefined or index is more than the length
//   if (!logArr[id] || id >= logArr.length) {
//     res.redirect("/*");
//   } else {
//     res.json(logArr[id]);
//   }
// });

// logRoutes.post("/", (req, res) => {
//   logArr.push(req.body);
//   res.json(logArr[logArr.length - 1]);
// });

// logRoutes.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   if (logArr[id]) {
//     let removed = logArr.splice(id, 1);
//     res.json(removed[0]);
//   } else {
//     res.status(404).json({ error: "Not found" });
//   }
// });

// module.exports = logRoutes;