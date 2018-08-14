var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function (req, res, next) {
  res.send('OKAY');
});

router.get('/js', function (req, res, next) {
 
  var options = {
    method: 'POST',
    url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
    qs: { airlines: 'js' },
    headers:
    {
      'postman-token': '24308256-514d-6510-fddf-9981f5296fae',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    },
    form:
    {
      direction: '0',
      loaive: '0',
      depinput: 'Hồ Chí Minh (SGN)',
      desinput: 'Hà Nội (HAN)',
      dep: 'SGN',
      des: 'HAN',
      depdate: '01-09-2018',
      resdate: '02-09-2018',
      adult: '1',
      child: '0',
      infant: '0',
      cache: 'CXRHAN12-04-2018-04-20-37',
      typeflight: '0'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    //console.log(body + "ĐÂY LÀ JETSTAR");
    res.send(body);
  });
});

router.get('/vj', function (req, res, next) {
  
  var options = {
    method: 'POST',
    url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
    qs: { airlines: 'vj' },
    headers:
    {
      'postman-token': '24308256-514d-6510-fddf-9981f5296fae',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    },
    form:
    {
      direction: '0',
      loaive: '0',
      depinput: 'Hồ Chí Minh (SGN)',
      desinput: 'Hà Nội (HAN)',
      dep: 'SGN',
      des: 'HAN',
      depdate: '01-09-2018',
      resdate: '02-09-2018',
      adult: '1',
      child: '0',
      infant: '0',
      cache: 'CXRHAN12-04-2018-04-20-37',
      typeflight: '0'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    //console.log(body + "ĐÂY LÀ JETSTAR");
    res.send(body);
  });
});

router.get('/vn', function (req, res, next) {

  
  var options = {
    method: 'POST',
    url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
    qs: { airlines: 'vn' },
    headers:
    {
      'postman-token': '24308256-514d-6510-fddf-9981f5296fae',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    },
    form:
    {
      direction: '0',
      loaive: '0',
      depinput: 'Hồ Chí Minh (SGN)',
      desinput: 'Hà Nội (HAN)',
      dep: 'SGN',
      des: 'HAN',
      depdate: '01-09-2018',
      resdate: '02-09-2018',
      adult: '1',
      child: '0',
      infant: '0',
      cache: 'CXRHAN12-04-2018-04-20-37',
      typeflight: '0'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    //console.log(body + "ĐÂY LÀ JETSTAR");
    res.send(body);
  });
});

router.post('/vn', function (req, res, next) {

 
  var ten = req.body.firstName;
  var ho = req.body.lastName;
  res.send(ten + ho);
  
});

module.exports = router;
