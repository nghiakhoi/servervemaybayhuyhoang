var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {

  var stringtong = "";
  var vietnamairline = false;
  var jetstar = false;
  var vietjet = false;

  var searchve = function(callback1,callback2,checkxuatstring) {
    var options = { method: 'POST',
    url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
    qs: { airlines: 'js' },
    headers: 
     { 'postman-token': '65091745-d6d7-e122-57bc-7eddcd2a422a',
       'cache-control': 'no-cache',
       'content-type': 'application/x-www-form-urlencoded' },
    form: 
     { direction: '0',
       loaive: '0',
       depinput: 'Hồ Chí Minh (SGN)',
       desinput: 'Đà Lạt (DLI)',
       dep: 'SGN',
       des: 'DLI',
       depdate: '30-07-2018',
       resdate: '31-07-2018',
       adult: '1',
       child: '0',
       infant: '0',
       cache: 'CXRHAN12-04-2018-04-20-37',
       typeflight: '0' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body + "ĐÂY LÀ JETSTAR");
    stringtong+=body;
    jetstar=true;
    callback1(callback2,checkxuatstring);
  });
    
}

var searchve2 = function(callback,checkxuatstring) {
  var options = { method: 'POST',
    url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
    qs: { airlines: 'vj' },
    headers: 
     { 'postman-token': '65091745-d6d7-e122-57bc-7eddcd2a422a',
       'cache-control': 'no-cache',
       'content-type': 'application/x-www-form-urlencoded' },
    form: 
     { direction: '0',
       loaive: '0',
       depinput: 'Hồ Chí Minh (SGN)',
       desinput: 'Đà Lạt (DLI)',
       dep: 'SGN',
       des: 'DLI',
       depdate: '30-07-2018',
       resdate: '31-07-2018',
       adult: '1',
       child: '0',
       infant: '0',
       cache: 'CXRHAN12-04-2018-04-20-37',
       typeflight: '0' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body + "ĐÂY LÀ VIETJET");
    stringtong+=body;
    vietjet=true;
    callback(checkxuatstring);
  });
}

var searchve3 = function(checkxuatstring) {
  var options = { method: 'POST',
    url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
    qs: { airlines: 'vn' },
    headers: 
     { 'postman-token': '65091745-d6d7-e122-57bc-7eddcd2a422a',
       'cache-control': 'no-cache',
       'content-type': 'application/x-www-form-urlencoded' },
    form: 
     { direction: '0',
       loaive: '0',
       depinput: 'Hồ Chí Minh (SGN)',
       desinput: 'Đà Lạt (DLI)',
       dep: 'SGN',
       des: 'DLI',
       depdate: '30-07-2018',
       resdate: '31-07-2018',
       adult: '1',
       child: '0',
       infant: '0',
       cache: 'CXRHAN12-04-2018-04-20-37',
       typeflight: '0' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body + "ĐÂY LÀ VNAIRLINE");
    stringtong+=body;
    vietnamairline=true;
    checkxuatstring(vietjet,jetstar,vietnamairline);
  });
}

var checkxuatstring = function(vietjet,jetstar,vietnamairline){
  if(vietjet&&jetstar&&vietnamairline){
    res.send(stringtong);
  }else{
    res.send("error");
  }
} 

searchve(searchve2,searchve3,checkxuatstring);
  


   
  
});

module.exports = router;
