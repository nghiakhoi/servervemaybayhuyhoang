var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { Pool, Client } = require('pg');
var moment = require('moment');

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

function makeidrandom() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
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
  var fullname = req.body.fullname;
  var phone = req.body.phone;
  var address = req.body.address;
  var email = req.body.email;
  var yeucau = req.body.yeucau;
  var hinhthucthanhtoan = req.body.hinhthucthanhtoan === "chuyenkhoan" ? req.body.nganhangchoosed : req.body.hinhthucthanhtoan;
  var subtotaloriginal = req.body.subtotaloriginal;
  var subtotalwithhanhly = req.body.subtotalwithhanhly;
  var thongtinvedi = req.body.thongtinvedi ? JSON.stringify(req.body.thongtinvedi) : "";
  var thongtinveKhuHoi = req.body.thongtinveKhuHoi;
  var mangadult = req.body.mangadult;
  var mangchild = req.body.mangchild;
  var manginf = req.body.manginf;
  var create_time = moment().format("DD-MM-YYYY HH:mm:ss");
  var ketquadiInsert = false;
  var ketquaKhuHoiInsert = false;
  var randomcode = makeidrandom();
  console.log(mangadult);
  console.log(thongtinvedi);
  console.log(thongtinveKhuHoi);
  pool.query("INSERT INTO donhang (fullname,phone,address,email,yeucau,hinhthucthanhtoan,subtotalorigin,subtotalwithhanhly,create_date,code) VALUES ('" + fullname + "', '" + phone + "','" + address + "','" + email + "','" + yeucau + "','" + hinhthucthanhtoan + "','" + subtotaloriginal + "','" + subtotalwithhanhly + "','" + create_time + "','" + randomcode + "') RETURNING id")
    .then(result => {
      if (thongtinvedi !== null) {
        var param1 = [thongtinvedi, 'di', parseInt(result.rows[0].id)];
        pool.query('INSERT INTO chuyenbay (jsonchuyenbay,loaichuyenbay,iddonhang) VALUES ($1,$2,$3) RETURNING id', param1)
          .then(result => {
            if (mangadult.length !== 0) {
              for (var i = 0; i < mangadult.length; i++) {
                var param2 = ['adult', mangadult[i].quydanhadult, mangadult[i].hoadult, mangadult[i].demvatenadult, "", mangadult[i].hanhlyadult, parseInt(result.rows[0].id)];
                pool.query('INSERT INTO hanhkhach (loaihanhkhach,quydanh,ho,tendemvaten,ngaysinh,idhanhly,idchuyenbay) VALUES ($1,$2,$3,$4,$5,$6,$7)', param2)
                  .then(result => {
                    ketquadiInsert = true;
                  })
              }
            }
            if (mangchild.length !== 0) {
              for (var i = 0; i < mangchild.length; i++) {
                var param2 = ['child', mangchild[i].quydanhchild, mangchild[i].hochild, mangchild[i].demvatenchild, mangchild[i].ngaysinhchild, mangchild[i].hanhlychild, parseInt(result.rows[0].id)];
                pool.query('INSERT INTO hanhkhach (loaihanhkhach,quydanh,ho,tendemvaten,ngaysinh,idhanhly,idchuyenbay) VALUES ($1,$2,$3,$4,$5,$6,$7)', param2)
                  .then(result => {
                    ketquadiInsert = true;
                  })
              }
            }
            if (manginf.length !== 0) {
              for (var i = 0; i < manginf.length; i++) {
                var param2 = ['inf', manginf[i].quydanhinf, manginf[i].hoinf, manginf[i].demvateninf, manginf[i].ngaysinhinf, 1, parseInt(result.rows[0].id)];
                pool.query('INSERT INTO hanhkhach (loaihanhkhach,quydanh,ho,tendemvaten,ngaysinh,idhanhly,idchuyenbay) VALUES ($1,$2,$3,$4,$5,$6,$7)', param2)
                  .then(result => {
                    ketquadiInsert = true;
                  })
              }
            }
          })
      }
      if (thongtinveKhuHoi !== null) {
        var param1 = [thongtinveKhuHoi, 'khuhoi', parseInt(result.rows[0].id)];
        pool.query('INSERT INTO chuyenbay (jsonchuyenbay,loaichuyenbay,iddonhang) VALUES ($1,$2,$3) RETURNING id', param1)
          .then(result => {
            if (mangadult.length !== 0) {
              for (var i = 0; i < mangadult.length; i++) {
                var param2 = ['adult', mangadult[i].quydanhadult, mangadult[i].hoadult, mangadult[i].demvatenadult, "", mangadult[i].hanhlyadult, parseInt(result.rows[0].id)];
                pool.query('INSERT INTO hanhkhach (loaihanhkhach,quydanh,ho,tendemvaten,ngaysinh,idhanhly,idchuyenbay) VALUES ($1,$2,$3,$4,$5,$6,$7)', param2)
                  .then(result => {
                    ketquaKhuHoiInsert = true;
                  })
              }
            }
            if (mangchild.length !== 0) {
              for (var i = 0; i < mangchild.length; i++) {
                var param2 = ['child', mangchild[i].quydanhchild, mangchild[i].hochild, mangchild[i].demvatenchild, mangchild[i].ngaysinhchild, mangchild[i].hanhlychild, parseInt(result.rows[0].id)];
                pool.query('INSERT INTO hanhkhach (loaihanhkhach,quydanh,ho,tendemvaten,ngaysinh,idhanhly,idchuyenbay) VALUES ($1,$2,$3,$4,$5,$6,$7)', param2)
                  .then(result => {
                    ketquaKhuHoiInsert = true;
                  })
              }
            }
            if (manginf.length !== 0) {
              for (var i = 0; i < manginf.length; i++) {
                var param2 = ['inf', manginf[i].quydanhinf, manginf[i].hoinf, manginf[i].demvateninf, manginf[i].ngaysinhinf, 1, parseInt(result.rows[0].id)];
                pool.query('INSERT INTO hanhkhach (loaihanhkhach,quydanh,ho,tendemvaten,ngaysinh,idhanhly,idchuyenbay) VALUES ($1,$2,$3,$4,$5,$6,$7)', param2)
                  .then(result => {
                    ketquaKhuHoiInsert = true;
                  })
              }
            }
          })
      }
      return result;
    }).then(result => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ result: "ok", id: result.rows[0].id }, null, 3));
    })
    .catch(e => console.error(e.stack));
});

app.post('/getinvoice', cors(corsOptionsDelegate), function (req, res, next) {
  var idhoadon = req.body.idhoadon;
  pool.query("SELECT fullname,phone,address,email,yeucau,hinhthucthanhtoan,subtotalorigin,subtotalwithhanhly,donhang.code,jsonchuyenbay,loaichuyenbay,loaihanhkhach,quydanh,ho,tendemvaten,ngaysinh FROM  donhang INNER JOIN chuyenbay ON chuyenbay.iddonhang = donhang.id INNER JOIN hanhkhach ON hanhkhach.idchuyenbay = chuyenbay.id where donhang.id=$1 order by loaihanhkhach", [idhoadon])
    .then(result => {
      if (result.rows.length === 0) {
        return false;
      } else {
        return result;
      }
    }).then(result => {
      if (result === false) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ result: "fail" }, null, 3));
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ result: "ok", data: result.rows }, null, 3));
      }

    })
    .catch(e => console.error(e.stack));
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
