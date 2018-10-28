var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { Pool, Client } = require('pg');
var moment = require('moment');
var nodemailer = require('nodemailer');

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
      findFirstItem = JSON.parse(arraydata[i].jsonchuyenbay).datefull;
      return findFirstItem;
    }
  }
}

const sendMailNow = (iddonhang) => {
  var iddonhang = iddonhang;
  pool.query("SELECT * FROM  donhang INNER JOIN chuyenbay ON chuyenbay.iddonhang = donhang.id INNER JOIN hanhkhach ON hanhkhach.idchuyenbay = chuyenbay.id where donhang.id=$1 order by loaihanhkhach", [iddonhang])
    .then(ketqua => {
      console.log(ketqua.rows);

      const mailOptions = {
        from: 'hnghiakhoi@gmail.com', // sender address
        to: 'hnghiakhoi3@gmail.com', // list of receivers
        subject: '[Vemaybayhuyhoang.com] Đơn Đặt Hàng Vé Máy Bay - Mã đơn hàng: ' + ketqua.rows[0].code + ' (' + ketqua.rows[0].create_date + ')', // Subject line
        html: `<div id=":mu" class="ii gt"><div id=":mt" class="a3s aXjCH " role="gridcell" tabindex="-1"><div class="m_3633905849909431137left_item m_3633905849909431137customer-information"><div class="adM">
      </div><div style="padding:5px"><div class="adM">
          </div><div style="background-color:#0062a4;font-weight:bold;color:#fff;padding:4px 10px;margin-top:15px">
             Hệ Thống BOOKING Online của Vemaybayhuyhoang.com
          </div>
          <div style="padding:8px 10px;background-color:#f2f2f2;border:1px solid #0062a4;margin-bottom:10px">
              Kính Chào Quý Khách, <b>dwqdwqdwq</b>
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
                                                        ${printDatachuyenbay(ketqua.rows, "di")}
                                                                                              </b>
                                                  </td>
                                                  
                                                  
                    <td>Ngày về:                                            </td>
              <td>
                  <b>${printDatachuyenbay(ketqua.rows, "khuhoi")}
                </b>
                </td>                                   
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
                  <img align="absmiddle" width="49px" height="29px" src="https://ci5.googleusercontent.com/proxy/Z-hkTrUUzPB5IqBeyQhWVLD1g6unI6FaO4_cGtO8i516l53yT5eRTeVQXaHAHCs_USzg7K-xOTsZ2j95EoXrYdqPpnMTgzztWI0_sQ=s0-d-e1-ft#https://vebay247.vn/public/uploads/images/OutBound.png" alt="Dat Ve May Bay 247, Đại Lý Vé Máy Bay Giá Rẻ Hàng Đầu VeBay247.vn" class="CToWUd">
              </td>
              <td>
                  Khởi hành từ <b>Thành Phố Hồ Chí Minh ,Việt Nam        	</b>
              </td>
              <td colspan="2" style="text-align:right;padding-right:10px">
                  Thời gian: <b>2</b>
              </td>
          </tr>
          <tr>
              <td>
                  <img align="absmiddle" width="49px" height="29px" src="https://ci4.googleusercontent.com/proxy/aQNnWDrxj5KSym_PdaFJdUMD2FPEtQyz_ciFfMAVsJzCLLuQBjzYdSt-mdWLo8MMMFjzoOs2SAi9T2JVFHrSMSCbOvlgYQJ4cZHiyYxPuCcb9u0y7rnjEt7_6ZBvmCuUt6Axyg=s0-d-e1-ft#https://vebay247.vn/public/uploads/images/052b06c4307e854914469ba081f740e8.gif" title="Dat Ve May Bay 247, Đại Lý Vé Máy Bay Giá Rẻ Hàng Đầu VeBay247.vn" class="CToWUd">
              </td>
              <td valign="top" style="padding-bottom:10px">
                  <p>
                      Từ: <b>Thành Phố Hồ Chí Minh </b>(SGN)<br>
                  </p>
                  <p>
                      <b>20:10</b>, 28/10/2018            </p>
            </td>
            <td valign="top" style="padding-bottom:10px">
                <p>
                    tới: <b>Hà Nội </b>(HAN)
                </p>
                <p>
                  <b>22:15</b>, 28/10/2018        	</p>
            </td>
            <td>
                <table width="90%" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                          <td style="text-align:right">
                          </td>
                          <td style="line-height:18px;padding:0">
                              JetStar <br> (<b>BL784</b>)
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
              <tr class="m_3633905849909431137flight-sum m_3633905849909431137InBound">
              <td class="m_3633905849909431137logo-flight">
                  <img align="absmiddle" width="49px" height="29px" src="https://ci6.googleusercontent.com/proxy/S5EzhU9k8_cF3gw9ZaikG09P62fTeZ9biqCLak7c3080nexGSKoUWwtQohDlpLO6aWhSeUhLQMdSzXIiROhMkiggR32eZCa7iTw_=s0-d-e1-ft#https://vebay247.vn/public/uploads/images/InBound.png" alt="Dat Ve May Bay 247, Đại Lý Vé Máy Bay Giá Rẻ Hàng Đầu VeBay247.vn" class="CToWUd">
              </td>
              <td>
                Khởi hành từ <b>Hà Nội ,Việt Nam        	</b>
              </td>
              <td colspan="2" style="text-align:right;padding-right:10px">
                  Thời gian: <b>2</b>
              </td>
          </tr>
          <tr>
            <td>
                <img align="absmiddle" width="49px" height="29px" src="https://ci4.googleusercontent.com/proxy/aQNnWDrxj5KSym_PdaFJdUMD2FPEtQyz_ciFfMAVsJzCLLuQBjzYdSt-mdWLo8MMMFjzoOs2SAi9T2JVFHrSMSCbOvlgYQJ4cZHiyYxPuCcb9u0y7rnjEt7_6ZBvmCuUt6Axyg=s0-d-e1-ft#https://vebay247.vn/public/uploads/images/052b06c4307e854914469ba081f740e8.gif" title="Dat Ve May Bay 247, Đại Lý Vé Máy Bay Giá Rẻ Hàng Đầu VeBay247.vn" class="CToWUd">
            </td>
            <td valign="top" style="padding-bottom:10px">
                  <p>
                      Từ: <b>Hà Nội </b>(HAN)<br>
                  </p>
                  <p>
                      <b>09:40</b>, 28/10/2018            </p>
            </td>
            <td valign="top" style="padding-bottom:10px">
                <p>
                    tới: <b>Thành Phố Hồ Chí Minh </b>(SGN)
                </p>
                <p>
                  <b>11:50</b>, 28/10/2018        	</p>
            </td>
            <td>
                <table width="90%" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                          <td style="text-align:right">
                          </td>
                          <td style="line-height:18px;padding:0">
                              JetStar <br> (<b>BL755</b>)
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
                  <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Đơn hàng gồm: 2 Người lớn, 2 Trẻ Em, 2 Em Bé</span>
              </td></tr>              					
             </tbody>
      
      <tbody><tr class="m_3633905849909431137title">
      <td><h2 class="m_3633905849909431137title_item" style="font-size:90%;text-align:left;color:BLACK;font-weight:bold">1.2.2. Người lớn</h2>
      </td></tr>
      
            </tbody><tbody>
              <tr>
                  <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều đi - 2 Người lớn: 2 x (1,240,000 + 540,000) = 3,560,000</span>
              </td></tr>              					
             </tbody>
          
          <tbody>
              <tr></tr>
                  <tr><td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều về - 2 Người lớn: 2 x (1,540,000 + 570,000) = 4,220,000</span>
              
          </td></tr></tbody>
              
          <tbody>
              <tr>
                 <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé đi và về - 2 Người lớn: 7,780,000</span>
              </td></tr>
          </tbody>
                
      <tbody><tr class="m_3633905849909431137title">
      <td><h2 class="m_3633905849909431137title_item" style="font-size:90%;text-align:left;color:BLACK;font-weight:bold">1.2.3. Trẻ Em</h2>
      </td></tr>
      
          </tbody><tbody>
              <tr>
                  <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều đi - 2 Trẻ em: 2 x 1,780,000 = 3,560,000</span>
              </td></tr>
          </tbody>
          
             
          <tbody>
              <tr>
                  <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều về - 2 Trẻ em: 2 x 2,110,000 = 4,220,000</span>
              </td></tr>
          </tbody>
          
          <tbody>
              <tr>
                  <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé đi và về - 2 Trẻ em: 7,780,000</span>
              </td></tr>
          </tbody>
           
               
          
          <tbody><tr class="m_3633905849909431137title">
      <td><h2 class="m_3633905849909431137title_item" style="font-size:90%;text-align:left;color:BLACK;font-weight:bold">1.2.4. Em Bé</h2>
      </td></tr>
      
          </tbody><tbody>
              <tr>
                  <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều đi - 2 Em bé: 2 x 150,000 = 300,000</span>
              </td></tr>
          </tbody>
          <tbody>
              <tr>
                  <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé chiều về - 2 Em bé: 2 x 150,000 = 300,000</span>
              </td></tr>
          </tbody>
          <tbody>
              <tr>
                  <td><span style="font-size:110%;text-align:left;color:black;padding:7px 5px 5px 10px">- Giá vé đi và về - 2 Em bé: 600,000</span>
              </td></tr>
          </tbody>
           
          
          <tbody><tr class="m_3633905849909431137title">
      <td><h2 class="m_3633905849909431137title_item" style="font-size:90%;text-align:left;color:BLACK;font-weight:bold">1.2.5. Toàn bộ đơn hàng</h2>
      </td></tr>
              
      
          </tbody><tbody>
              <tr>
                  <td><span style="font-size:110%;text-align:left;color:purple;padding:7px 5px 5px 10px"><b>- Tổng đơn hàng chưa gồm hành lý: 16,160,000 VND</b></span>
              </td></tr>
          </tbody>
      
      </table>
      </div>
          <div style="color:green;font-size:25px;padding:5px;font-weight:bold;margin:10px 0">
      
              2. THÔNG TIN LIÊN HỆ:
      
          </div>
      
                <ul>
      
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Ông</span><strong>dwqdwqdwq</strong></li>
      
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Email:</span><strong><a href="mailto:phutungxemayminhky@gmail.com" style="color:#00f;text-decoration:none" target="_blank">phutungxemayminhky@<wbr>gmail.com</a></strong></li>
      
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Số điện thoại:</span><strong>312312312312</strong></li>
      
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Quốc gia</span><strong>wqdwq</strong></li>
      
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Thành phố</span><strong>HCM</strong></li>
      
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Địa chỉ</span><strong>123</strong></li>
      
                  </ul>
      
          
      
          <div style="color:green;font-size:25px;padding:5px;font-weight:bold;margin:10px 0">
      
              3. THÔNG TIN HÀNH KHÁCH
      
          </div>
      
          <ul>
      
          
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Trẻ Em Trai</span><strong>dwqdwq</strong>
                                <span style="display:inline-block;padding-left:5px;font-style:italic;color:#333">(//)</span>
      
                              
                      </li>
      
                  
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Ông</span><strong>dwqdwq</strong>
                      </li>
      
                  
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Ông</span><strong>dqwdwq</strong>
                      </li>
      
                  
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Em Bé Trai</span><strong>dqwdwq</strong>
                                <span style="display:inline-block;padding-left:5px;font-style:italic;color:#333">(1/1/2016)</span>
      
                              
                      </li>
      
                  
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Trẻ Em Trai</span><strong>dqwdwqd</strong>
                                <span style="display:inline-block;padding-left:5px;font-style:italic;color:#333">(//)</span>
      
                              
                      </li>
      
                  
                    <li style="display:block;list-style:none;padding:3px"><span style="display:inline-block;width:100px">Em Bé Trai</span><strong>wqdwqdwq</strong>
                                <span style="display:inline-block;padding-left:5px;font-style:italic;color:#333">(1/1/2016)</span>
      
                              
                      </li>
      
                  
          </ul>
      
      
      <div style="font-size:100%;text-align:left;color:RED;padding:5px;font-weight:bold;margin:10px 0">
      3.1. YÊU CẦU ĐẶC BIỆT
      </div>
      
          32132132131
          
      <div style="border:1px solid gray;background:whitesmoke;margin-top:10px;padding:10px;color:#fd5304;font-weight:bold">
                  Chúng tôi xin lưu ý với quý khách đây là yêu cầu đặt vé chứ chưa phải xác nhận về giá và chỗ.<br>
                  Chúng tôi sẽ xử lý yêu cầu này và xác nhận lại với quý khách trong thời gian sớm nhất
      </div>
      
      <div style="color:green;font-size:25px;padding:5px;font-weight:bold;margin:10px 0">
      
              4. HƯỚNG DẪN THANH TOÁN
      
      </div>
      
      <div>
      
            <p>
        Trong tuần, Nhân viên Vébay247 sẽ đến tận nơi HCM hoặc Đà Nẵng tại địa chỉ của Quý khách yêu cầu để giao vé và thu tiền khi Quý khách có yêu cầu đặt vé . Với hình thức này, Quý khách sẽ chịu mức phí vận chuyển là 0 - 50.000 vnđ/1 lần giao.</p>		                Địa chỉ nhận vé: <b style="margin-left:10px;display:inline-block;font-weight:bold">fewfewfew</b>
                      
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
                                  <b style="color:#fd5e14;font-weight:bold;font-style:italic;line-height:22px;font-size:16px">"MDH 927922143, dwqdwqdwq, Noi dung thanh toan"</b>
                  </div>
                              VD: <br>
                              "MDH 927922143, dwqdwqdwq, TT ve may bay"<br>
                              "MDH 927922143, dwqdwqdwq, TT hanh ly ky gui"<br>
                              "MDH 927922143, dwqdwqdwq, TT Chi phi phat sinh."<br>
                              <b>Ðể việc thanh toán được chính xác. Xin cảm ơn quý khách!</b>
              </div>
              
              <div style="margin:10px 0">
                  <div style="background-color:#f2f2f2;padding:10px">
                                  <b>Ngay sau khi chuyển khoản thành công, xin vui lòng gọi lại ngay cho chúng tôi theo số:</b>
                                  <p>
                                      <b style="margin-right:10px">Hotline </b>
                                      <b style="color:#fd5304;margin-right:20px">0934191404 - 02822163883</b>
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
      setTimeout(function () {
        sendMailNow(result.rows[0].id)
      }, 10000);
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
  pool.query("UPDATE donhang SET status = $1 WHERE id=$2;", [status, iddonhang])
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
