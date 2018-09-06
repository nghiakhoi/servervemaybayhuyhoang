var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var request = require('request');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


var cors = require('cors');
app.options('*', cors());
var whitelist = ['http://vemaybayhuyhoang.ga', 'http://localhost:3000'];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  }else{
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}



app.post('/vn',cors(corsOptionsDelegate), function (req, res, next) {

  
  var dep = req.body.dep;
  var des = req.body.des;
  var datedes=req.body.datedes;
  var depdate=req.body.depdate;
  //var datetime = req.body.datetime;
  var adult = req.body.adult;
  
 console.log(req.body);
  var options = { method: 'POST',
  url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
  qs: { airlines: 'vn' },
  headers: 
   { 'postman-token': 'e991929b-b677-ecb1-e766-d55255b0af77',
     'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form: 
   { direction: '0',
     loaive: '0',
     depinput: '',
     desinput: '',
     dep: dep,
     des: des,
     depdate: depdate,
     resdate: '',
     adult: adult,
     child: '0',
     infant: '0',
     cache: '',
     typeflight: '0' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    //console.log(body + "ĐÂY LÀ JETSTAR");
    //res.send(body);
    //res.send(dep +" "+ des+" " + datetime+" " + adult);
    console.log(dep +" "+ des+" " + depdate+" "+ +" " + adult );
    console.log(body);
    res.send(body);
  });
  //res.send(dep +" "+ des+" " + datetime+" " + adult);
  
});

app.post('/js',cors(corsOptionsDelegate), function (req, res, next) {

  
 var dep = req.body.dep;
 var des = req.body.des;
 var depdate = req.body.depdate;
 var datedes= req.body.datedes;
 var adult = req.body.adult;
 
 console.log(req.body);
 var options = { method: 'POST',
 url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
 qs: { airlines: 'js' },
 headers: 
  { 'postman-token': 'e991929b-b677-ecb1-e766-d55255b0af77',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded' },
 form: 
  { direction: '0',
    loaive: '0',
    depinput: '',
    desinput: '',
    dep: dep,
    des: des,
    depdate: depdate,
    resdate: '',
    adult: adult,
    child: '0',
    infant: '0',
    cache: '',
    typeflight: '0' } };

 request(options, function (error, response, body) {
   if (error) throw new Error(error);
   //console.log(body + "ĐÂY LÀ JETSTAR");
   //res.send(body);
   //res.send(dep +" "+ des+" " + datetime+" " + adult);
   console.log(dep +" "+ des+" " + depdate+" "+ +" " + adult);
   console.log(body);
   res.send(body);
 });
 //res.send(dep +" "+ des+" " + datetime+" " + adult);
 
});

app.post('/vj',cors(corsOptionsDelegate), function (req, res, next) {

  
 var dep = req.body.dep;
 var des = req.body.des;
 var depdate = req.body.depdate;
 var datedes = req.body.datedes;
 console.log(req.body);
 var adult = req.body.adult;
 var options = { method: 'POST',
 url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
 qs: { airlines: 'vj' },
 headers: 
  { 'postman-token': 'e991929b-b677-ecb1-e766-d55255b0af77',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded' },
 form: 
  { direction: '0',
    loaive: '0',
    depinput: '',
    desinput: '',
    dep: dep,
    des: des,
    depdate: depdate,
    resdate: '',
    adult: adult,
    child: '0',
    infant: '0',
    cache: '',
    typeflight: '0' } };

 request(options, function (error, response, body) {
   if (error) throw new Error(error);
   //console.log(body + "ĐÂY LÀ JETSTAR");
   //res.send(body);
   //res.send(dep +" "+ des+" " + datetime+" " + adult);
   console.log(dep +" "+ des+" " + depdate+" "+ +" " + adult);
   console.log(body);
   res.send(body);
 });
 //res.send(dep +" "+ des+" " + datetime+" " + adult);
 
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
