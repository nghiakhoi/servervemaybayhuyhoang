var express = require('express');
var router = express.Router();
var request = require('request');

var domainname = "http://vemaybayhuyhoang.ga"
//var "http://vemaybayhuyhoang.ga" = "http://localhost:3000"

router.get('/', function (req, res, next) {
  res.send('OKAY running');
});



module.exports = router;
