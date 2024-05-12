var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("BLG 2 : 1 T1");
});

module.exports = router;
