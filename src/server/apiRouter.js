const express = require('express')
const router = express.Router();



router.get("/home", function (req, res, next) {
  res.status(200);
  res.json({name: 'Home'});
});

router.get("/user", function (req, res, next) {
  res.status(200);
  res.json({name: 'User'});
});

router.get("/home", function (req, res, next) {
  res.status(200);
  res.json({name: 'Home'});
});

module.exports = router