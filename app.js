var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const { Pool, Client } = require('pg');
var moment = require('moment');
var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');
var secret = "nghiakhoi.com";
const bcrypt = require('bcrypt');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var request = require('request');

var logoVietjet = "https://vebay247.vn/public/uploads/images/03c30d49e4bcdcdbcc62b44cc9834af8.gif";
var logoJetstar = "https://vebay247.vn/public/uploads/images/052b06c4307e854914469ba081f740e8.gif";
var logoVietnamairline = "https://vebay247.vn/public/uploads/images/68f42eb9ea2a79d8a5fa9f15a2a50306.gif";

var priceAdultOrigin = 65000;
var priceChildOrigin = 65000;
var priceInfOrigin = 40000;
var priceAdult = 50000;
var priceChild = 50000;
var priceInf = 40000;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '5000mb' }));
app.use(bodyParser.urlencoded({ limit: '5000mb', extended: true, parameterLimit: 50000 }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vemaybayhuyhoang',
  password: '4264720',
  port: 5432,
});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hnghiakhoi@gmail.com',
    pass: '02467329600091a'
  }
});

const get_day_name = (custom_date) => {
  var myDate = custom_date;
  myDate = myDate.split("-");
  var newDate = myDate[2] + "-" + myDate[1] + "-" + myDate[0];
  var currentDate = new Date(newDate);
  var day_name = currentDate.getDay();
  var days = new Array("Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy");
  return days[day_name];
}
const get_full_day_format_vietnam = (custom_date) => {
  var myDate = custom_date;
  myDate = myDate.split("-");
  var year = myDate[2];
  var month = myDate[1];
  var day = myDate[0];
  var fulldayformatvietnam = day + " tháng " + month + " " + year;
  return fulldayformatvietnam;
}

const printDatachuyenbay = (arraydata, loaichuyenbay) => {
  var findFirstItem = null;
  for (var i = 0; i < arraydata.length; i++) {
    if (arraydata[i].loaichuyenbay === loaichuyenbay) {
      findFirstItem = JSON.parse(arraydata[i].jsonchuyenbay);
      return findFirstItem;
    }
  }
  return findFirstItem;
}

function ChangeToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

const xoa_dau = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}

// function getCookies(callback) {

//   request('http://vebaygiare247.vn/tim-ve-truc-tuyen?sessionid=123', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       return callback(null, response.headers['set-cookie']);
//     } else {
//       return callback(error);
//     }
//   })
// }

const sendMailNow = (iddonhang) => {
  var iddonhang = iddonhang;
  var temparray = [];
  console.log(iddonhang);
  pool.query("SELECT * FROM  donhang INNER JOIN chuyenbay ON chuyenbay.iddonhang = donhang.id INNER JOIN hanhkhach ON hanhkhach.idchuyenbay = chuyenbay.id where donhang.id=$1 order by loaihanhkhach", [iddonhang])
    .then(ketqua => {
      ketqua.rows.map((value, key) => {
        if (value.loaichuyenbay === "di") {
          temparray.push(value);
        }
      })
      const mailOptions = {
        from: 'hnghiakhoi@gmail.com', // sender address
        to: ketqua.rows[0].email, // list of receivers
        bcc: 'phutungxemayminhky@gmail.com', // list of receivers
        subject: '[Vemaybayhuyhoang.com] Đơn Đặt Hàng Vé Máy Bay - Mã đơn hàng: ' + ketqua.rows[0].code + ' (' + ketqua.rows[0].create_date + ')', // Subject line
        html: `<div id=":mu" class="ii gt"><div id=":mt" class="a3s aXjCH " role="gridcell" tabindex="-1"><div class="m_3633905849909431137left_item m_3633905849909431137customer-information">
        <div class="adM">
      </div><div style="padding:5px"><div class="adM">
          </div><div style="background-color:#0062a4;font-weight:bold;color:#fff;padding:4px 10px;margin-top:15px">
             Hệ Thống BOOKING Online của Vemaybayhuyhoang.com
          </div>
          <div style="padding:8px 10px;background-color:#f2f2f2;border:1px solid #0062a4;margin-bottom:10px">
              Kính Chào Quý Khách, <b>${ketqua.rows[0].fullname}</b>
              <p style="padding-bottom:10px;border-bottom:1px dashed #dcdcdc;line-height:28px;margin:0px">
                  <b style="color:#0062a4">TỔNG ĐẠI LÝ VÉ MÁY BAY HUY HOÀNG XIN CHÂN THÀNH CÁM ƠN SỰ TÍN NHIỆM ĐẶT VÉ TẠI <a href="http://VEMAYBAYHUYHOANG.COM" target="_blank" >VEMAYBAYHUYHOANG.COM</a> !</b>
              </p>
              Số 52/20 đường số 4, khu phố 6, P. Hiệp Bình Phước, Q. Thủ Đức, Tp. Hồ Chí Minh <br>
              Tel HCM: 0901.438.151 - 0866.598.443 - 0911.229.543 <br>
          </div>
      
          <div style="background-color:#0062a4;font-weight:bold;color:#fff;padding:4px 10px;margin-top:15px">
             Đơn hàng hoàn tất, vui lòng kiểm tra email
          </div>
          
          <div style="padding:8px 10px;background-color:#f2f2f2;border:1px solid #0062a4;margin-bottom:10px">
            <p>
              Yêu cầu đặt vé của quý khác đã được xử lý trên hệ thống của chúng tôi. <br>
      
              Thông tin về đơn hàng sẽ được gửi tới địa chỉ Email : ${ketqua.rows[0].email} .<br>
      
              <span style="font-style:italic;color:#fe6702;font-weight:bold">(Quý Khách lưu ý: Nếu không nhận được mail trong Inbox, rất có thể mail đã bị chuyển vào mục Spam. Trong trường hợp này,
      
          Quý Khách vui lòng mở mail và đánh đấu thư này an toàn hoặc bỏ nhãn Spam cho thư này!)</span><br>
      
              Chúng tôi sẽ gọi điện xác nhận thông tin đơn hàng vào số điện thoại: ${ketqua.rows[0].phone}<br>
      
              Quý khách hãy kiểm tra lại thông tin Email và số điện thoại để đảm bảo không có sai sót.<br>
      
              </p>
          </div>
          
          <div style="background-color:#0062a4;font-weight:bold;color:#fff;padding:4px 10px;margin-top:15px">
             Tóm tắt đơn hàng
          </div>
          
          <div style="padding:8px 10px;background-color:#f2f2f2;border:1px solid #0062a4;margin-bottom:10px">
              <p>
            Đơn hàng của quý khách có mã ${ketqua.rows[0].code} và <span style="color:#f00">đang chờ xác nhận</span>. !<br>
                      Tiền vé máy bay: <span style="color:#f00;font-weight:bold"> ${parseInt(ketqua.rows[0].subtotalorigin).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</span> <br>
              Chi phí phụ thêm (hành lý): <span style="color:#f00;font-weight:bold"> ${(parseInt(ketqua.rows[0].subtotalwithhanhly) - parseInt(ketqua.rows[0].subtotalorigin)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</span> <br>
            Tổng giá trị đơn hàng: <span style="color:#f00;font-weight:bold">
      
            ${parseInt(ketqua.rows[0].subtotalwithhanhly).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VNĐ</span><br>
      
            Quý khách có thắc mắc về tình trạng đơn hàng hãy liên hệ với chúng tôi qua đường dây nóng: <span style="color:#f00">0901.438.151 - 0866.598.443 - 0911.229.543</span>
      
                  </p>
      </div>
          
          
      <div style="background-color:#0062a4;font-weight:bold;color:#fff;padding:4px 10px;margin-top:15px">
             Chuyến bay trong ngày, không giữ chỗ được
      </div>
          
      <div style="padding:8px 10px;background-color:#f2f2f2;border:1px solid #0062a4;margin-bottom:10p">
              <p style="color:PURPLE;font-weight:bold">
              Chuyến Bay của quý khách lựa chọn sát thời điểm khởi hành nên không thể giữ được chỗ trong thời gian dài. Xin quý khách vui lòng chuyển khoản gấp cho đơn hàng này.<br>
              Hoặc quý khách vui lòng liên hệ lại với phòng vé hoặc đến văn phòng Vé Máy Bay Huy Hoàng để mua vé &amp; thanh toán trực tiếp.
              </p>
      </div>
              
      <div style="background-color:#0062a4;font-weight:bold;color:#fff;padding:4px 10px;margin-top:15px">
             Chi tiết đơn hàng
      </div>
      <div style="padding:8px 10px;background-color:#f2f2f2;border:1px solid #0062a4;margin-bottom:10p">
          
          <div class="m_3633905849909431137left_item m_3633905849909431137customer-information"><table width="100%" cellpadding="0" cellspacing="0" class="m_3633905849909431137thong-tin-chuyen-bay m_3633905849909431137passenger-page">
        <tbody>
            <tr class="m_3633905849909431137next-top"> 
            <td class="m_3633905849909431137flight-input-info" colspan="4">
              <table width="100%">
                    <tbody>
                            <tr class="m_3633905849909431137title">
                                      <td><h2 class="m_3633905849909431137title_item" style="font-size:25px;text-align:left;color:GREEN">1. THÔNG TIN ĐƠN HÀNG </h2>
                                  </td>
                    </tr>
                            <tr class="m_3633905849909431137title">
                                      <td><h2 class="m_3633905849909431137title_item" style="font-size:100%;text-align:left;color:RED">1.1. THÔNG TIN CHUYẾN BAY </h2>
                                  </td>
                    </tr>
                              <tr>
                                  <td>
                                      <img align="left" src="https://ci6.googleusercontent.com/proxy/bRnNMsrT8AKJ6jX2dWOXSe5gWpUnDhIdmgf92F9ffLRTUXTSzqq8KX-ul9ly-dqKdJv1MWyIc7wUElL4O8DRlisKeVmNDtIKiUz339hvwg=s0-d-e1-ft#https://vebay247.vn/public/uploads/images/flight-icon.png" style="width:50px" alt="" class="CToWUd">
                                  </td>
                                  <td>
                                    <table width="530px" class="m_3633905849909431137flight-info-detail">
                                <tbody>
                                           
                                              <tr>
                                                  <td>
                                                      Ngày xuất phát: 
                                                  </td>
                                                  <td>
                                                      <b>
                                                        ${get_day_name(printDatachuyenbay(ketqua.rows, "di").datefull)}, ${get_full_day_format_vietnam(printDatachuyenbay(ketqua.rows, "di").datefull)}
                                                                                              </b>
                                                  </td>
                                                  
                                       ${printDatachuyenbay(ketqua.rows, "khuhoi") === null ?
            "" : `
            <td>Ngày về:                                            </td>
            <td>
              <b>${get_day_name(printDatachuyenbay(ketqua.rows, "khuhoi").datefull)}, ${get_full_day_format_vietnam(printDatachuyenbay(ketqua.rows, "khuhoi").datefull)}
              </b>
            </td> `
          }           
                                                      
                                              </tr>
                                </tbody>
                              </table>
                    </td>
                  </tr>
                </tbody>
                </table>
            </td>
            </tr>
          <tr class="m_3633905849909431137flight-sum m_3633905849909431137OutBound">
              <td class="m_3633905849909431137logo-flight">
                  <img align="absmiddle" width="49px" height="29px" src="https://ci5.googleusercontent.com/proxy/Z-hkTrUUzPB5IqBeyQhWVLD1g6unI6FaO4_cGtO8i516l53yT5eRTeVQXaHAHCs_USzg7K-xOTsZ2j95EoXrYdqPpnMTgzztWI0_sQ=s0-d-e1-ft#https://vebay247.vn/public/uploads/images/OutBound.png" alt="" class="CToWUd">
              </td>
              <td>
                  Khởi hành từ <b>${ketqua.rows[0].depfull} (${ketqua.rows[0].depcode})</b>
              </td>
          </tr>
          <tr>
              <td>
                  <img align="absmiddle" width="49px" height="29px" src="https://ci4.googleusercontent.com/proxy/aQNnWDrxj5KSym_PdaFJdUMD2FPEtQyz_ciFfMAVsJzCLLuQBjzYdSt-mdWLo8MMMFjzoOs2SAi9T2JVFHrSMSCbOvlgYQJ4cZHiyYxPuCcb9u0y7rnjEt7_6ZBvmCuUt6Axyg=s0-d-e1-ft#${printDatachuyenbay(ketqua.rows, "di").airline === "Vietjet" ? logoVietjet : printDatachuyenbay(ketqua.rows, "di").airline === "Jetstar" ? logoJetstar : logoVietnamairline}" title="" class="CToWUd">
              </td>
              <td valign="top" style="padding-bottom:10px">
                  <p>
                      Từ: <b>${ketqua.rows[0].depfull} (${ketqua.rows[0].depcode})</b><br>
                  </p>
                  <p>
                     Lúc: <b>${printDatachuyenbay(ketqua.rows, "di").deptime}</b>           </p>
            </td>
            <td valign="top" style="padding-bottom:10px">
                <p>
                    tới: <b>${ketqua.rows[0].desfull} (${ketqua.rows[0].descode})</b>
                </p>
                <p>
                Lúc: <b>${printDatachuyenbay(ketqua.rows, "di").destime}</b></p>
            </td>
            <td>
                <table width="90%" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                          <td style="text-align:right">
                          </td>
                          <td style="line-height:18px;padding:0">
                              ${printDatachuyenbay(ketqua.rows, "di").airline} <br> 
                              <br>
                              <span>
                                                    </span></td>
                      </tr>
                      <tr>
                              <td>
                              </td>
                          <td style="line-height:18px;padding:0">
                          </td>
                      </tr>
                  </tbody>
                  </table>
            </td>
        </tr>
        <tr>
          </tr>
             ${printDatachuyenbay(ketqua.rows, "khuhoi") === null ?
            "" :
            ` <tr class="m_3633905849909431137flight-sum m_3633905849909431137InBound">
               <td class="m_3633905849909431137logo-flight">
                   <img align="absmiddle" width="49px" height="29px" src="https://ci6.googleusercontent.com/proxy/S5EzhU9k8_cF3gw9ZaikG09P62fTeZ9biqCLak7c3080nexGSKoUWwtQohDlpLO6aWhSeUhLQMdSzXIiROhMkiggR32eZCa7iTw_=s0-d-e1-ft#https://vebay247.vn/public/uploads/images/InBound.png" alt="" class="CToWUd">
               </td>
               <td>
                   Khởi hành từ <b>${ketqua.rows[0].desfull} (${ketqua.rows[0].descode})</b>
               </td>
           </tr>
           <tr>
               <td>
                   <img align="absmiddle" width="49px" height="29px" src="https://ci4.googleusercontent.com/proxy/aQNnWDrxj5KSym_PdaFJdUMD2FPEtQyz_ciFfMAVsJzCLLuQBjzYdSt-mdWLo8MMMFjzoOs2SAi9T2JVFHrSMSCbOvlgYQJ4cZHiyYxPuCcb9u0y7rnjEt7_6ZBvmCuUt6Axyg=s0-d-e1-ft#${printDatachuyenbay(ketqua.rows, "khuhoi").airline === "Vietjet" ? logoVietjet : printDatachuyenbay(ketqua.rows, "khuhoi").airline === "Jetstar" ? logoJetstar : logoVietnamairline}" title="" class="CToWUd">
               </td>
               <td valign="top" style="padding-bottom:10px">
                   <p>
                       Từ: <b>${ketqua.rows[0].desfull} (${ketqua.rows[0].descode})</b><br>
                   </p>
                   <p>
                   Lúc: <b>${printDatachuyenbay(ketqua.rows, "khuhoi").deptime}</b>           </p>
             </td>
             <td valign="top" style="padding-bottom:10px">
                 <p>
                     tới: <b>${ketqua.rows[0].depfull} (${ketqua.rows[0].depcode})</b>
                 </p>
                 <p>
                 Lúc: <b>${printDatachuyenbay(ketqua.rows, "khuhoi").destime}</b></p>
             </td>
             <td>
                 <table width="90%" cellpadding="0" cellspacing="0">
                     <tbody>
                       <tr>
                           <td style="text-align:right">
                           </td>
                           <td style="line-height:18px;padding:0">
                               ${printDatachuyenbay(ketqua.rows, "khuhoi").airline} <br> 
                               <br>
                               <span>
                                                     </span></td>
                       </tr>
                       <tr>
                               <td>
                               </td>
                           <td style="line-height:18px;padding:0">
                           </td>
                       </tr>
                   </tbody>
                   </table>
             </td>
           </tr>
           <tr>
               </tr>`
          }
        </tbody>
      
      </table>
      <table>
      <tbody>
      <tr class="m_3633905849909431137title">
      <td><h2 class="m_3633905849909431137title_item" style="font-size:100%;text-align:left;color:RED">1.2. CHI TIẾT VỀ GIÁ (Chưa gồm hành lý ký gửi)</h2>
      </td></tr>
                    
      <tr class="m_3633905849909431137title">
      <td><h2 class="m_3633905849909431137title_item" style="font-size:90%;text-align:left;color:BLACK;font-weight:bold">1.2.1. Hành Khách</h2>
      </td></tr>
      
            </tbody><tbody>
              <tr>
                  <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Đơn hàng gồm: ${ketqua.rows[0].adult} Người lớn ${ketqua.rows[0].child !== "0" ? ", " + ketqua.rows[0].child + " Trẻ Em" : ""} ${ketqua.rows[0].inf !== "0" ? ", " + ketqua.rows[0].inf + " Em Bé" : ""}</span>
              </td></tr>              					
             </tbody>
      
      <tbody><tr class="m_3633905849909431137title">
      <td><h2 class="m_3633905849909431137title_item" style="font-size:90%;text-align:left;color:BLACK;font-weight:bold">1.2.2. Người lớn</h2>
      </td></tr>
      
            </tbody><tbody>
              <tr>
                  <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều đi - ${ketqua.rows[0].adult} Người lớn: ${ketqua.rows[0].adult} x (${printDatachuyenbay(ketqua.rows, "di").baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} + ${(printDatachuyenbay(ketqua.rows, "di").adult.taxfee - (priceAdultOrigin) + (priceAdult)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}) = ${(((printDatachuyenbay(ketqua.rows, "di").adult.taxfee - (priceAdultOrigin) + (priceAdult)) + printDatachuyenbay(ketqua.rows, "di").baseprice) * ketqua.rows[0].adult).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span>
              </td></tr>              					
             </tbody>
          ${printDatachuyenbay(ketqua.rows, "khuhoi") === null ? "" :
            `
            <tbody>
              <tr></tr>
              <tr><td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều về - ${ketqua.rows[0].adult} Người lớn: ${ketqua.rows[0].adult} x (${printDatachuyenbay(ketqua.rows, "khuhoi").baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} + ${(printDatachuyenbay(ketqua.rows, "khuhoi").adult.taxfee - (priceAdultOrigin) + (priceAdult)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}) = ${(((printDatachuyenbay(ketqua.rows, "khuhoi").adult.taxfee - (priceAdultOrigin) + (priceAdult)) + printDatachuyenbay(ketqua.rows, "khuhoi").baseprice) * ketqua.rows[0].adult).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span>

              </td></tr></tbody>
              `
          }
          
              
          <tbody>
              <tr>
                 <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Tổng Giá vé đi ${printDatachuyenbay(ketqua.rows, "khuhoi") === null ? "" : "và về"}  - ${ketqua.rows[0].adult} Người lớn: ${((((printDatachuyenbay(ketqua.rows, "di").adult.taxfee - (priceAdultOrigin) + (priceAdult)) + printDatachuyenbay(ketqua.rows, "di").baseprice) * ketqua.rows[0].adult) + (printDatachuyenbay(ketqua.rows, "khuhoi") === null ? 0 : (((printDatachuyenbay(ketqua.rows, "khuhoi").adult.taxfee - (priceAdultOrigin) + (priceAdult)) + printDatachuyenbay(ketqua.rows, "khuhoi").baseprice) * ketqua.rows[0].adult))).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span>
              </td></tr>
          </tbody>
          ${ketqua.rows[0].child === "0" ? "" :
            `<tbody><tr class="m_3633905849909431137title">
        <td><h2 class="m_3633905849909431137title_item" style="font-size:90%;text-align:left;color:BLACK;font-weight:bold">1.2.3. Trẻ Em</h2>
        </td></tr>
        
              </tbody><tbody>
                <tr>
                    <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều đi - ${ketqua.rows[0].child} Trẻ Em: ${ketqua.rows[0].child} x (${printDatachuyenbay(ketqua.rows, "di").child.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} + ${(printDatachuyenbay(ketqua.rows, "di").child.taxfee - (priceChildOrigin) + (priceChild)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}) = ${(((printDatachuyenbay(ketqua.rows, "di").child.taxfee - (priceChildOrigin) + (priceChild)) + printDatachuyenbay(ketqua.rows, "di").child.baseprice) * ketqua.rows[0].child).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span>
                </td></tr>              					
               </tbody>
            ${printDatachuyenbay(ketqua.rows, "khuhoi") === null ? "" :
              `
              <tbody>
                <tr></tr>
                <tr><td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều về - ${ketqua.rows[0].child} Trẻ Em: ${ketqua.rows[0].child} x (${printDatachuyenbay(ketqua.rows, "khuhoi").child.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} + ${(printDatachuyenbay(ketqua.rows, "khuhoi").child.taxfee - (priceChildOrigin) + (priceChild)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}) = ${(((printDatachuyenbay(ketqua.rows, "khuhoi").child.taxfee - (priceChildOrigin) + (priceChild)) + printDatachuyenbay(ketqua.rows, "khuhoi").child.baseprice) * ketqua.rows[0].child).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span>
  
                </td></tr></tbody>
                `
            }
            
                
            <tbody>
                <tr>
                   <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Tổng Giá vé đi ${printDatachuyenbay(ketqua.rows, "khuhoi") === null ? "" : "và về"}  - ${ketqua.rows[0].child} Trẻ Em: ${((((printDatachuyenbay(ketqua.rows, "di").child.taxfee - (priceChildOrigin) + (priceChild)) + printDatachuyenbay(ketqua.rows, "di").child.baseprice) * ketqua.rows[0].child) + (printDatachuyenbay(ketqua.rows, "khuhoi") === null ? 0 : (((printDatachuyenbay(ketqua.rows, "khuhoi").child.taxfee - (priceChildOrigin) + (priceChild)) + printDatachuyenbay(ketqua.rows, "khuhoi").child.baseprice) * ketqua.rows[0].child))).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span>
                </td></tr>
            </tbody>`
          }   

          ${ketqua.rows[0].inf === "0" ? "" :
            `<tbody><tr class="m_3633905849909431137title">
        <td><h2 class="m_3633905849909431137title_item" style="font-size:90%;text-align:left;color:BLACK;font-weight:bold">1.2.4. Em bé</h2>
        </td></tr>
        
              </tbody><tbody>
                <tr>
                    <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều đi - ${ketqua.rows[0].inf} Em bé: ${ketqua.rows[0].inf} x (${printDatachuyenbay(ketqua.rows, "di").inf.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} + ${(parseInt(printDatachuyenbay(ketqua.rows, "di").inf.taxfee) - (priceInfOrigin) + (priceInf)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}) = ${(((parseInt(printDatachuyenbay(ketqua.rows, "di").inf.taxfee) - (priceInfOrigin) + (priceInf)) + printDatachuyenbay(ketqua.rows, "di").inf.baseprice) * ketqua.rows[0].inf).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span>
                </td></tr>              					
               </tbody>
            ${printDatachuyenbay(ketqua.rows, "khuhoi") === null ? "" :
              `
              <tbody>
                <tr></tr>
                <tr><td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều về - ${ketqua.rows[0].inf} Em bé: ${ketqua.rows[0].inf} x (${printDatachuyenbay(ketqua.rows, "khuhoi").inf.baseprice.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} + ${(parseInt(printDatachuyenbay(ketqua.rows, "khuhoi").inf.taxfee) - (priceInfOrigin) + (priceInf)).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}) = ${(((parseInt(printDatachuyenbay(ketqua.rows, "khuhoi").inf.taxfee) - (priceInfOrigin) + (priceInf)) + printDatachuyenbay(ketqua.rows, "khuhoi").inf.baseprice) * ketqua.rows[0].inf).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span>
  
                </td></tr></tbody>
                `
            }
            
                
            <tbody>
                <tr>
                   <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Tổng Giá vé đi ${printDatachuyenbay(ketqua.rows, "khuhoi") === null ? "" : "và về"}  - ${ketqua.rows[0].inf} Em bé: ${(((((parseInt(printDatachuyenbay(ketqua.rows, "di").inf.taxfee) - (priceInfOrigin) + (priceInf)) + printDatachuyenbay(ketqua.rows, "di").inf.baseprice) * ketqua.rows[0].inf) + (printDatachuyenbay(ketqua.rows, "khuhoi") === null ? 0 : (((printDatachuyenbay(ketqua.rows, "khuhoi").inf.taxfee - (priceInfOrigin) + (priceInf)) + printDatachuyenbay(ketqua.rows, "khuhoi").inf.baseprice) * ketqua.rows[0].inf)))).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)}</span>
                </td></tr>
            </tbody>`
          }  
           
          
          <tbody><tr class="m_3633905849909431137title">
      <td><h2 class="m_3633905849909431137title_item" style="font-size:90%;text-align:left;color:BLACK;font-weight:bold">1.2.5. Toàn bộ đơn hàng</h2>
      </td></tr>
              
      
          </tbody><tbody>
              <tr>
                  <td><span style="font-size:110%;text-align:left;color:purple;padding:7px 5px 5px 10px"><b>- Tổng đơn hàng chưa gồm hành lý: ${parseInt(ketqua.rows[0].subtotalorigin).toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").slice(0, -2)} VND</b></span>
              </td></tr>
          </tbody>
      
      </table>
      </div>
          <div style="color:green;font-size:25px;padding:5px;font-weight:bold;margin:10px 0">
      
              2. THÔNG TIN LIÊN HỆ:
      
          </div>
      
                <ul>
      
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Họ và tên:</span><strong>${ketqua.rows[0].fullname}</strong></li>
      
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Email:</span><strong>${ketqua.rows[0].email}</strong></li>
      
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Số điện thoại:</span><strong>${ketqua.rows[0].phone}</strong></li>
            
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Địa chỉ</span><strong>${ketqua.rows[0].address}</strong></li>
      
                  </ul>
      
          
      
          <div style="color:green;font-size:25px;padding:5px;font-weight:bold;margin:10px 0">
      
              3. THÔNG TIN HÀNH KHÁCH
      
          </div>
      
          <ul>${

          temparray.map((value, key) => {
            if (value.loaichuyenbay === "di") {
              return ` <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">${value.quydanh === "ong" ? "Ông" : value.quydanh === "ba" ? "Bà" : value.quydanh === "anh" ? "Anh" : value.quydanh === "chi" ? "Chị" : value.quydanh === "betrai" ? "Bé trai" : "Bé gái"}</span><strong>${value.ho} ${value.tendemvaten}</strong>
${value.quydanh === "betrai" || value.quydanh === "begai" ? `<span style="display:inline-block;padding-left:5px;font-style:italic;color:#333">(${value.ngaysinh})</span>` : ""}
</li>`
            }
          })}</ul>
      <div style="font-size:100%;text-align:left;color:RED;padding:5px;font-weight:bold;margin:10px 0">
      3.1. YÊU CẦU ĐẶC BIỆT
      </div>
      
      ${ketqua.rows[0].yeucau}
          
      <div style="border:1px solid gray;background:whitesmoke;margin-top:10px;padding:10px;color:#fd5304;font-weight:bold">
                  Chúng tôi xin lưu ý với quý khách đây là yêu cầu đặt vé chứ chưa phải xác nhận về giá và chỗ.<br>
                  Chúng tôi sẽ xử lý yêu cầu này và xác nhận lại với quý khách trong thời gian sớm nhất
      </div>
      
      <div style="color:green;font-size:25px;padding:5px;font-weight:bold;margin:10px 0">
      
              4. HƯỚNG DẪN THANH TOÁN
      
      </div>
      
      <div>
      
            <p>
        Trong tuần, chúng tôi sẽ đến tận nơi HCM tại địa chỉ của Quý khách yêu cầu để giao vé và thu tiền khi Quý khách có yêu cầu đặt vé . Với hình thức này, Quý khách sẽ chịu mức phí vận chuyển là 0 - 50.000 vnđ/1 lần giao.</p>		                Địa chỉ nhận vé: <b style="margin-left:10px;display:inline-block;font-weight:bold">${ketqua.rows[0].address}</b>
                      
            <div style="clear:both"></div>
      
      </div>
       
                      <p>
                          <b style="font-size:100%;text-align:left;color:RED;padding:5px;font-weight:bold;margin:10px 0">4.1. LƯU Ý THANH TOÁN BẰNG CHUYỂN KHOẢN</b>
                      </p><br>
          <div style="padding:0 10px">
                          Quý khách có thể thanh toán bằng cách chuyển tiền tới tài khoản của chúng tôi, hãy chọn tài khoản ngân hàng mà quý khách có thể chuyển một cách tiện lợi nhất.
              <div style="background-color:#0062a4;font-weight:bold;color:#fff;padding:4px 10px;margin-top:15px">
                              Lưu ý khi chuyển khoản:
              </div>
                          
              <div style="padding:8px 10px;background-color:#f2f2f2;border:1px solid #0062a4;margin-bottom:10px">
                              Khi chuyển khoản, quý khách vui lòng nhập nội dung chuyển khoản là
                  <div style="padding:4px 0">
                                  <b style="color:#fd5e14;font-weight:bold;font-style:italic;line-height:22px;font-size:16px">"MDH ${ketqua.rows[0].code}, ${xoa_dau(ketqua.rows[0].fullname)}, Noi dung thanh toan"</b>
                  </div>
                              VD: <br>
                              "MDH ${ketqua.rows[0].code}, ${xoa_dau(ketqua.rows[0].fullname)}, TT ve may bay"<br>
                              "MDH ${ketqua.rows[0].code}, ${xoa_dau(ketqua.rows[0].fullname)}, TT hanh ly ky gui"<br>
                              "MDH ${ketqua.rows[0].code}, ${xoa_dau(ketqua.rows[0].fullname)}, TT Chi phi phat sinh."<br>
                              <b>Ðể việc thanh toán được chính xác. Xin cảm ơn quý khách!</b>
              </div>
              
              <div style="margin:10px 0">
                  <div style="background-color:#f2f2f2;padding:10px">
                                  <b>Ngay sau khi chuyển khoản thành công, xin vui lòng gọi lại ngay cho chúng tôi theo số:</b>
                                  <p>
                                      <b style="margin-right:10px">Hotline </b>
                                      <b style="color:#fd5304;margin-right:20px">0901.438.151 - 0866.598.443 - 0911.229.543 </b>
                                  </p>
                                  <em>* Để chúng tôi kiểm tra tài khoản và xuất vé cho quý khách</em><div class="yj6qo"></div><div class="adL">
                  </div></div><div class="adL">
              </div></div><div class="adL">
          </div></div><div class="adL">
      
       </div></div><div class="adL">
       </div></div><div class="adL">
      </div></div><div class="adL">
      
      
      </div></div></div>`// plain text body
      };
      return mailOptions;
    })
    .then((mailOptions) => {
      transporter.sendMail(mailOptions, function (err, info) {
      });
    })
}


var cors = require('cors');
app.options('*', cors());
var whitelist = ['http://vemaybayhuyhoang.ga', 'http://localhost:3000', 'http://vemaybayhuyhoangserver.com','http://nghiakhoi.ga'];
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

function makecharacterrandom() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 32; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

// var reloadsession = request('http://vebaygiare247.vn', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body);
//     var getcookie = response.headers['set-cookie'];
//     var str = getcookie[0];
//     var result = str.split(";");
//     var sessid = result[0].split("=");

//     var optionsgetSess = {
//       method: 'POST',
//       url: 'http://vebaygiare247.vn/tim-ve-truc-tuyen?sessionid=1c2ce2acd5d048c6de391cadc9b44004',
//       headers:
//       {
//         'postman-token': 'e991929b-b677-ecb1-e766-d55255b0af77',
//         'cache-control': 'no-cache',
//         'content-type': 'application/x-www-form-urlencoded',
//         'Cookie': "PHPSESSID=" + sessid[1] + "; path=/; domain=.vebaygiare247.vn; Expires=Tue, 19 Jan 2038 03:14:07 GMT;",
//       },
//       form:
//       {
//         direction: '0',
//         loaive: '0',
//         depinput: '',
//         desinput: '',
//         dep: 'SGN',
//         des: 'HAN',
//         depdate: '01-01-2019',
//         resdate: '',
//         adult: '1',
//         child: '0',
//         infant: '0',
//         cache: '',
//         typeflight: '0'
//       }
//     };

//     request(optionsgetSess, function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         reloadsession = sessid[1];
//         console.log("first")
//         console.log(reloadsession)
//         return reloadsession;
//       } else {
//         return callback(error);
//       }
//     });
//   } else {
//     return error;
//   }
// });
// setInterval(function () {
//   request('http://vebaygiare247.vn', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var getcookie = response.headers['set-cookie'];
//       var str = getcookie[0];
//       var result = str.split(";");
//       var sessid = result[0].split("=");
//       //reloadsession = sessid[1];
//       var optionsgetSess = {
//         method: 'POST',
//         url: 'http://vebaygiare247.vn/tim-ve-truc-tuyen?sessionid=1c2ce2acd5d048c6de391cadc9b44004',
//         headers:
//         {
//           'postman-token': 'e991929b-b677-ecb1-e766-d55255b0af77',
//           'cache-control': 'no-cache',
//           'content-type': 'application/x-www-form-urlencoded',
//           'Cookie': "PHPSESSID=" + sessid[1] + "; path=/; domain=.vebaygiare247.vn; Expires=Tue, 19 Jan 2038 03:14:07 GMT;",
//         },
//         form:
//         {
//           direction: '0',
//           loaive: '0',
//           depinput: '',
//           desinput: '',
//           dep: 'SGN',
//           des: 'HAN',
//           depdate: '01-01-2019',
//           resdate: '',
//           adult: '1',
//           child: '0',
//           infant: '0',
//           cache: '',
//           typeflight: '0'
//         }
//       };

//       request(optionsgetSess, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//           reloadsession = sessid[1];
//           console.log("second2")
//           console.log(reloadsession)
//         } else {
//           return callback(error);
//         }
//       });

//     } else {
//       return error;
//     }
//   })
// }, 300000);

app.post('/js', cors(corsOptionsDelegate), function (req, res, next) {

  var dep = req.body.dep;
  var des = req.body.des;
  var datedep = req.body.datedep;
  var datedes = req.body.datedes;
  var adult = req.body.adult === null ? '0' : req.body.adult;
  var child = req.body.child === null ? '0' : req.body.child;
  var inf = req.body.inf === null ? '0' : req.body.inf;

  var reloadsession = request('http://vebaygiare247.vn', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var getcookie = response.headers['set-cookie'];
      var str = getcookie[0];
      var result = str.split(";");
      var sessid = result[0].split("=");
      var randomchar = makecharacterrandom();

      var optionsgetSess = {
        method: 'POST',
        url: 'http://vebaygiare247.vn/tim-ve-truc-tuyen?sessionid=' + randomchar,
        headers:
        {
          'postman-token': 'e991929b-b677-ecb1-e766-d55255b0af77',
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded',
          'Cookie': "PHPSESSID=" + sessid[1] + "; path=/; domain=.vebaygiare247.vn; Expires=Tue, 19 Jan 2038 03:14:07 GMT;",
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

      request(optionsgetSess, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var sessionbefore = sessid[1];
          var option = {
            method: 'POST',
            url: 'http://vebaygiare247.vn/vebaygiare247.vn/tim-ve',
            qs: { airlines: 'js' },
            headers:
            {
              'postman-token': 'e991929b-b677-ecb1-e766-d55255b0af77',
              'cache-control': 'no-cache',
              'content-type': 'application/x-www-form-urlencoded',
              'Cookie': "PHPSESSID=" + sessionbefore + "; path=/; domain=.vebaygiare247.vn; Expires=Tue, 19 Jan 2038 03:14:07 GMT;",
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

          request(option, function (error, response, body) {
            if (error) {
              console.log(error)
            };
            res.send(body);
          });
        } else {
          return callback(error);
        }
      });
    } else {
      return error;
    }
  });
});

app.post('/vn', cors(corsOptionsDelegate), function (req, res, next) {


  var dep = req.body.dep;
  var des = req.body.des;
  var datedep = req.body.datedep;
  var depdate = req.body.depdate;
  var adult = req.body.adult === null ? '0' : req.body.adult;
  var child = req.body.child === null ? '0' : req.body.child;
  var inf = req.body.inf === null ? '0' : req.body.inf;
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
    if (error) {
      console.log(error)
    };
    res.send(body);
  });
});

app.post('/vj', cors(corsOptionsDelegate), function (req, res, next) {


  var dep = req.body.dep;
  var des = req.body.des;
  var datedep = req.body.datedep;
  var datedes = req.body.datedes;
  var adult = req.body.adult === null ? '0' : req.body.adult;
  var child = req.body.child === null ? '0' : req.body.child;
  var inf = req.body.inf === null ? '0' : req.body.inf;
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
    if (error) {
      console.log(error)
    };
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
  var depcode = req.body.depcode;
  var descode = req.body.descode;
  var depfull = req.body.depfull;
  var desfull = req.body.desfull;
  //var hinhthucthanhtoan = req.body.hinhthucthanhtoan === "chuyenkhoan" ? req.body.nganhangchoosed : req.body.hinhthucthanhtoan;
  var subtotaloriginal = req.body.subtotaloriginal;
  var subtotalwithhanhly = req.body.subtotalwithhanhly;
  var thongtinvedi = req.body.thongtinvedi ? JSON.stringify(req.body.thongtinvedi) : "";
  var thongtinveKhuHoi = req.body.thongtinveKhuHoi;
  var mangadult = req.body.mangadult;
  var mangchild = req.body.mangchild;
  var manginf = req.body.manginf;
  var adultnumber = req.body.mangadult.length === 0 ? 0 : req.body.mangadult.length;
  var childnumber = req.body.mangchild.length === 0 ? 0 : req.body.mangchild.length;
  var infnumber = req.body.manginf.length === 0 ? 0 : req.body.manginf.length;
  var create_time = moment().format("DD-MM-YYYY HH:mm:ss");
  var ketquadiInsert = false;
  var ketquaKhuHoiInsert = false;
  var randomcode = makeidrandom();
  pool.query("INSERT INTO donhang (fullname,phone,address,email,yeucau,subtotalorigin,subtotalwithhanhly,create_date,code,adult,child,inf,depcode,descode,depfull,desfull) VALUES ('" + fullname + "', '" + phone + "','" + address + "','" + email + "','" + yeucau + "','" + subtotaloriginal + "','" + subtotalwithhanhly + "','" + create_time + "','" + randomcode + "','" + adultnumber + "','" + childnumber + "','" + infnumber + "','" + depcode + "','" + descode + "','" + depfull + "','" + desfull + "') RETURNING id")
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

app.post('/getallinvoice', cors(corsOptionsDelegate), function (req, res, next) {
  pool.query("SELECT * FROM  donhang order by id desc")
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

app.post('/getinvoicebyid', cors(corsOptionsDelegate), function (req, res, next) {
  var iddonhang = req.body.iddonhang;
  pool.query("SELECT donhang.id,fullname,phone,address,email,yeucau,hinhthucthanhtoan,subtotalorigin,subtotalwithhanhly,donhang.code,jsonchuyenbay,loaichuyenbay,loaihanhkhach,quydanh,ho,tendemvaten,ngaysinh,create_date,status FROM  donhang INNER JOIN chuyenbay ON chuyenbay.iddonhang = donhang.id INNER JOIN hanhkhach ON hanhkhach.idchuyenbay = chuyenbay.id where donhang.id=$1 order by loaihanhkhach", [iddonhang])
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

app.post('/editstatusinvoicebyid', cors(corsOptionsDelegate), function (req, res, next) {
  var iddonhang = req.body.id;
  var status = req.body.status;
  pool.query("UPDATE donhang SET status = $1 WHERE id=$2", [status, iddonhang])
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

app.post('/updatehinhthucthanhtoan', cors(corsOptionsDelegate), function (req, res, next) {
  var iddonhang = req.body.iddonhang;
  var hinhthucthanhtoan = req.body.hinhthucthanhtoan;
  pool.query("UPDATE donhang SET hinhthucthanhtoan = $1 WHERE id=$2 RETURNING id", [hinhthucthanhtoan, iddonhang])
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
        setTimeout(function () {
          sendMailNow(result.rows[0].id)
        }, 5000);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ result: "ok", data: result.rows }, null, 3));
      }

    })
    .catch(e => console.error(e.stack));
});

app.post('/getallsanbay', cors(corsOptionsDelegate), function (req, res, next) {
  pool.query("SELECT * FROM  sanbay")
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

app.post('/getallvungmien', cors(corsOptionsDelegate), function (req, res, next) {
  pool.query("SELECT * FROM  vungmien")
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

app.post('/getalltintuc', cors(corsOptionsDelegate), function (req, res, next) {
  var limit = req.body.limit;
  pool.query("SELECT tintuc.id,iddanhmuc,tieude,tintuc.slug,noidung,hinhdaidien,motangan,des,keyword,ten,vitri FROM  tintuc LEFT JOIN danhmuctintuc ON danhmuctintuc.id = tintuc.iddanhmuc order by vitri asc, tintuc.id desc limit $1", [limit])
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

app.post('/getalltinkhuyenmai', cors(corsOptionsDelegate), function (req, res, next) {
  var limit = req.body.limit;
  pool.query("SELECT * FROM  tinkhuyenmai order by vitri asc, id desc limit $1", [limit])
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

app.post('/getalldanhmuc', cors(corsOptionsDelegate), function (req, res, next) {
  pool.query("SELECT * FROM  danhmuctintuc")
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

app.post('/getallvungmien', cors(corsOptionsDelegate), function (req, res, next) {
  pool.query("SELECT * FROM  vungmien")
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

app.post('/getalltintucbydanhmuc', cors(corsOptionsDelegate), function (req, res, next) {
  var iddanhmuc = req.body.iddanhmuc;
  pool.query("SELECT * FROM  tintuc where iddanhmuc=$1 order by id desc limit 50", [iddanhmuc])
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

app.post('/getalltintucbyid', cors(corsOptionsDelegate), function (req, res, next) {
  var id = req.body.id;
  pool.query("SELECT tintuc.id,iddanhmuc,tieude,tintuc.slug,noidung,hinhdaidien,motangan,des,keyword,ten,vitri FROM  tintuc LEFT JOIN danhmuctintuc ON danhmuctintuc.id = tintuc.iddanhmuc where tintuc.id=$1", [id])
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

app.post('/getallsanbaybyid', cors(corsOptionsDelegate), function (req, res, next) {
  var id = req.body.id;
  pool.query("SELECT sanbay.id,idvungmien,ten,show,code FROM  sanbay LEFT JOIN vungmien ON vungmien.id = sanbay.idvungmien where sanbay.id=$1", [id])
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

app.post('/getalltinkhuyenmaibyid', cors(corsOptionsDelegate), function (req, res, next) {
  var id = req.body.id;
  pool.query("SELECT * FROM  tinkhuyenmai where id=$1", [id])
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

app.post('/getallhanhly', cors(corsOptionsDelegate), function (req, res, next) {
  pool.query("SELECT * FROM  hanhly")
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

app.post('/getsanbayByCode', cors(corsOptionsDelegate), function (req, res, next) {
  var code = req.body.code;
  pool.query("SELECT * FROM  sanbay where code=$1", [code])
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

app.post('/userlogin', cors(corsOptionsDelegate), (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  pool.query("SELECT * FROM  admin where username=$1", [username])
    .then(result => {
      if (result.rows.length === 0) {
        return false;
      } else {
        return result;
      }
    }).then(result => {
      if (result === false) {
        res.setHeader('Content-Type', 'application/json');
        res.json({ status: "fail" });
      } else {
        if (result.rows[0]['password'] === password) {
          var token = jwt.sign({
            username: result.rows[0]['username']
          }, secret);
          res.setHeader('Content-Type', 'application/json');
          res.json({ status: true, token: token, data: { result: { username: result.rows[0]['username'] } } });
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.json({ status: "fail" });
        }
      }
    })

});

app.post('/checktoken', cors(corsOptionsDelegate), (req, res) => {
  var token = req.body.token;
  if (token) {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        res.setHeader('Content-Type', 'application/json');
        res.json({ status: "fail" });
      } else {
        var username = decoded.username;
        pool.query("SELECT * FROM  admin where username=$1", [username])
          .then(result => {
            if (result.rows.length === 0) {
              return false;
            } else {
              return result;
            }
          }).then(result => {
            if (result === false) {
              res.setHeader('Content-Type', 'application/json');
              res.json({ status: "fail" });
            } else {
              res.setHeader('Content-Type', 'application/json');
              res.json({ status: true, token: token, data: { result: { username: result.rows[0]['username'] } } });
            }
          })
      }
    })
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.json({ status: "fail" });
  }
});

app.post('/addtintuc', cors(corsOptionsDelegate), function (req, res, next) {
  var tieude = req.body.tieude;
  var des = req.body.des;
  var noidung = req.body.contentStateNoiDung;
  var motangan = req.body.contentStateTomTat;
  var keyword = req.body.keyword;
  var vitri = req.body.vitri;
  var danhmuc = req.body.danhmuc;
  var hinhdaidien = req.body.hinhdaidien;
  var slug = ChangeToSlug(req.body.tieude);
  pool.query("INSERT INTO tintuc (tieude,slug,noidung,hinhdaidien,iddanhmuc,motangan,des,keyword,vitri) VALUES ('" + tieude + "', '" + slug + "','" + noidung + "','" + hinhdaidien + "','" + danhmuc + "','" + motangan + "','" + des + "','" + keyword + "','" + vitri + "')")
    .then(result => {
      return result;
    }).then(result => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ result: "ok" }, null, 3));
    })
    .catch(e => console.error(e.stack));
});

app.post('/addtinkhuyenmai', cors(corsOptionsDelegate), function (req, res, next) {
  var tieude = req.body.tieude;
  var des = req.body.des;
  var noidung = req.body.contentStateNoiDung;
  var motangan = req.body.contentStateTomTat;
  var keyword = req.body.keyword;
  var vitri = req.body.vitri;
  var hinhdaidien = req.body.hinhdaidien;
  var slug = ChangeToSlug(req.body.tieude);
  pool.query("INSERT INTO tinkhuyenmai (tieude,slug,noidung,hinhdaidien,motangan,des,keyword,vitri) VALUES ('" + tieude + "', '" + slug + "','" + noidung + "','" + hinhdaidien + "','" + motangan + "','" + des + "','" + keyword + "','" + vitri + "')")
    .then(result => {
      return result;
    }).then(result => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ result: "ok" }, null, 3));
    })
    .catch(e => console.error(e.stack));
});

app.post('/addsanbay', cors(corsOptionsDelegate), function (req, res, next) {
  var tieude = req.body.tieude;
  var code = req.body.code;
  var show = req.body.show;
  var vungmien = req.body.vungmien;
  var hinhdaidien = "1.jpg";
  pool.query("INSERT INTO sanbay (ten,code,hinhdaidien,show,idvungmien) VALUES ('" + tieude + "', '" + code + "','" + hinhdaidien + "','" + show + "','" + vungmien + "')")
    .then(result => {
      return result;
    }).then(result => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ result: "ok" }, null, 3));
    })
    .catch(e => console.error(e.stack));
});

app.post('/edittintucbyid', cors(corsOptionsDelegate), function (req, res, next) {
  var idtintuc = req.body.idtintuc;
  var tieude = req.body.tieude;
  var des = req.body.des;
  var noidung = req.body.contentStateNoiDung;
  var motangan = req.body.contentStateTomTat;
  var keyword = req.body.keyword;
  var vitri = req.body.vitri;
  var danhmuc = parseInt(req.body.danhmuc);
  var hinhdaidien = req.body.hinhdaidien;
  var slug = ChangeToSlug(req.body.tieude);
  pool.query("UPDATE tintuc SET tieude = $1,des = $2,noidung = $3,motangan = $4,keyword = $5,iddanhmuc = $6,hinhdaidien = $7,slug = $8,vitri = $9  WHERE id=$10 RETURNING id", [tieude, des, noidung, motangan, keyword, danhmuc, hinhdaidien, slug, vitri, idtintuc])
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

app.post('/editsanbaybyid', cors(corsOptionsDelegate), function (req, res, next) {
  var idsanbay = req.body.idsanbay;
  var ten = req.body.ten;
  var code = req.body.code;
  var show = req.body.show;
  var idvungmien = parseInt(req.body.idvungmien);
  pool.query("UPDATE sanbay SET ten = $1,code = $2,show = $3,idvungmien = $4  WHERE id=$5 RETURNING id", [ten, code, show, idvungmien, idsanbay])
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

app.post('/edittinkhuyenmaibyid', cors(corsOptionsDelegate), function (req, res, next) {
  var idtintuc = req.body.idtintuc;
  var tieude = req.body.tieude;
  var des = req.body.des;
  var noidung = req.body.contentStateNoiDung;
  var motangan = req.body.contentStateTomTat;
  var keyword = req.body.keyword;
  var vitri = req.body.vitri;
  var hinhdaidien = req.body.hinhdaidien;
  var slug = ChangeToSlug(req.body.tieude);
  pool.query("UPDATE tinkhuyenmai SET tieude = $1,des = $2,noidung = $3,motangan = $4,keyword = $5,hinhdaidien = $6,slug = $7,vitri = $8  WHERE id=$9 RETURNING id", [tieude, des, noidung, motangan, keyword, hinhdaidien, slug, vitri, idtintuc])
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

app.post('/deletetintucbyid', cors(corsOptionsDelegate), function (req, res, next) {
  var idtintuc = req.body.idtintuc;
  pool.query("DELETE FROM tintuc WHERE id=$1 RETURNING id", [idtintuc])
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

app.post('/deletesanbaybyid', cors(corsOptionsDelegate), function (req, res, next) {
  var idsanbay = req.body.idsanbay;
  pool.query("DELETE FROM sanbay WHERE id=$1 RETURNING id", [idsanbay])
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

app.post('/deletetinkhuyenmainbyid', cors(corsOptionsDelegate), function (req, res, next) {
  var idtintuc = req.body.idtintuc;
  pool.query("DELETE FROM tinkhuyenmai WHERE id=$1 RETURNING id", [idtintuc])
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

app.get('/', (req, res) => {
  //console.log(reloadsession);
  res.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT');
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
