var express = require('express');
var router = express.Router();
const constList = require('../constants/const')

/* GET all products listing. */
router.get('/all', function (req, res, next) {
  res.send(constList);
});

module.exports = router;
