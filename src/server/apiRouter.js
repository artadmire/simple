const express = require('express')
const router = express.Router();
const questions = require('./mock/questionsList')


router.get("/javaScript", function (req, res, next) {
  res.status(200);
  res.json(questions);
});

router.get("/html", function (req, res, next) {
  res.status(200);
  res.json({name: 'html'});
});

// router.get("/javaScript", function (req, res, next) {
//   res.status(200);
//   res.json({name: 'Home'});
// });

module.exports = router