var express = require('express');
var router = express.Router();
const {productList} = require('../constants/const')

/* GET all products listing. */
router.get('/all', function (req, res, next) {
  res.send(productList);
});

module.exports = router;
