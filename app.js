var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { Pool, Client } = require('pg');

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

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vemaybayhuyhoang',
  password: '4264720',
  port: 5432,
});



app.use('/', indexRouter);
app.use('/users', usersRouter);


var cors = require('cors');
app.options('*', cors());
var whitelist = ['http://vemaybayhuyhoang.ga', 'http://localhost:3000'];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}



app.post('/vn', cors(corsOptionsDelegate), function (req, res, next) {


  var dep = req.body.dep;
  var des = req.body.des;
  var datedep = req.body.datedep;
  var depdate = req.body.depdate;
  var adult = req.body.adult;
  var child = req.body.child;
  var inf = req.body.inf;
  var options = {
    method: 'POST',
    url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
    qs: { airlines: 'vn' },
    headers:
    {
      'postman-token': 'e991929b-b677-ecb1-e766-d55255b0af77',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    },
    form:
    {
      direction: '0',
      loaive: '0',
      depinput: '',
      desinput: '',
      dep: dep,
      des: des,
      depdate: datedep,
      resdate: '',
      adult: adult,
      child: child,
      infant: inf,
      cache: '',
      typeflight: '0'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
  });
});

app.post('/js', cors(corsOptionsDelegate), function (req, res, next) {


  var dep = req.body.dep;
  var des = req.body.des;
  var datedep = req.body.datedep;
  var datedes = req.body.datedes;
  var adult = req.body.adult;
  var child = req.body.child;
  var inf = req.body.inf;

  var options = {
    method: 'POST',
    url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
    qs: { airlines: 'js' },
    headers:
    {
      'postman-token': 'e991929b-b677-ecb1-e766-d55255b0af77',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    },
    form:
    {
      direction: '0',
      loaive: '0',
      depinput: '',
      desinput: '',
      dep: dep,
      des: des,
      depdate: datedep,
      resdate: '',
      adult: adult,
      child: child,
      infant: inf,
      cache: '',
      typeflight: '0'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
  });

});

app.post('/vj', cors(corsOptionsDelegate), function (req, res, next) {


  var dep = req.body.dep;
  var des = req.body.des;
  var datedep = req.body.datedep;
  var datedes = req.body.datedes;
  var adult = req.body.adult;
  var child = req.body.child;
  var inf = req.body.inf;
  var options = {
    method: 'POST',
    url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
    qs: { airlines: 'vj' },
    headers:
    {
      'postman-token': 'e991929b-b677-ecb1-e766-d55255b0af77',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded'
    },
    form:
    {
      direction: '0',
      loaive: '0',
      depinput: '',
      desinput: '',
      dep: dep,
      des: des,
      depdate: datedep,
      resdate: '',
      adult: adult,
      child: child,
      infant: inf,
      cache: '',
      typeflight: '0'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
  });

});

app.post('/infobooking', cors(corsOptionsDelegate), function (req, res, next) {


  var thongtinvedi = req.body.thongtinvedi;
  var thongtinveKhuHoi = req.body.thongtinveKhuHoi;
  console.log(thongtinvedi);
  console.log(thongtinveKhuHoi);
  pool.query('SELECT * from chuyenbay')
  .then(res => {
    console.log(res.rows[0].loaichuyenbay)
    console.log(res.rows[1].loaichuyenbay)
    console.log(res.rows[2].loaichuyenbay)
  })
  .catch(e => console.error(e.stack));
  
  res.send("ok");
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
