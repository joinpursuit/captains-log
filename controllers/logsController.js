const logs = require("express").Router();
// const bookmarks = require("../../bookmarks/controllers/bookmarksController.js");
const logsArray = require("../models/log.js");

logs.get("/:arrayIdx", (req, res) => {
  const log = logsArray[req.params.arrayIdx];
  if (log) {
    res.json(log);
  } else {
    res.redirect("/404");
  }
});

logs.get("/", (req, res) => {
  res.json(logsArray);
});

logs.put("/:arrayIdx", (req, res) => {
  const { arrayIdx } = req.params;
  console.log(arrayIdx)
  const { body } = req;
  console.log(body)
  logsArray[arrayIdx] = body;
  res.json(logsArray[arrayIdx]);
});

logs.post("/", (req, res) => {
  const { body } = req;
  logsArray.push(body);
  const newIdx = logsArray.length - 1;
  res.json(logsArray[newIdx]);
});

logs.delete("/:arrayIdx", (req, res) => {
  // const { body } = req;
  const deletedlog = logsArray.splice(req.params.indexArray, 1);
  res.status(200).json(deletedlog);
  // const newIdx = logsArray.length - 1;
  // res.json(logsArray[newIdx]);
});

// DELETE
// bookmarks.delete("/:indexArray", (req, res) => {
//   const deletedBookmark = bookmarkArray.splice(req.params.indexArray, 1);
//   res.status(200).json(deletedBookmark);
// });

module.exports = logs;
