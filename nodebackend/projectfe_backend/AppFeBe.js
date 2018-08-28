const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const upload = require('express-fileupload'); // untuk fileupload
// var url = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/tampunganFile', express.static('tampunganFile'));

const koneksibackend = require('cors')
app.use(koneksibackend()) 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(upload())

const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    port: '3307',
    user : 'root',
    password : 'usbw',
    database : 'parts',
    multipleStatements: true
});
db.connect();
 
const crypto = require('crypto');
const secret = 'asd123';

var port = 3003;

app.listen(port, (req,res) => {                     // line code ini yg diambil datanya oleh frontend; axios.get('http://localhost:8000/')
    // console.log('Server berjalan di port '+port+' ....')
    // alert('Server started on port 8000...');
    // res.send('Server terkoneksi di port 8000...')
});


/// Di bawah ini adalah semua fungsi-fungsi JavaScript + query MySQLdataBase yang akan menjalankan web applikasi di "projectbe"

// 1. Fungsi Register
app.post('/regis', function(req, res){
    var nama = req.body.reginputnama;
    var email = req.body.reginputemail;
    var namalengkap = req.body.reginputnamalengkap;
    var alamat = req.body.reginputalamat;
    var password = req.body.reginputpassword;

    var telpon = req.body.reginputtel_no;
    var hapeno = req.body.reginputhp_no;
 
    console.log(nama);
    console.log(email);
    console.log(password);
    console.log(namalengkap);
    console.log(alamat);
 
    const encpass = crypto.createHash('sha256', secret).update(password).digest('hex');
    // console.log(encpass);
 
    var sql = "INSERT INTO users_data (username, email, password, nama_lengkap, address, tel_no, hp_no) VALUES ('"+nama+"','"+email+"','"+encpass+"','"+namalengkap+"','"+alamat+"','"+telpon+"','"+hapeno+"')"; //users_data = table mySQL database;
    var sql2 = "INSERT INTO user_login (username, email, password) VALUES ('"+nama+"','"+email+"','"+encpass+"')"; //user_login = table mySQL database;
    
    // //  buat fungsi register - connect dan update database table: users_data dan user_login
    
    db.query(sql, (err, result)=>{
    if(err) throw err;
        // console.log(result);
    });
 

    db.query(sql2, (err, result)=>{
        if(err) throw err;
            // console.log(result);
        });

    // db.end();        
    // res.redirect('/regis');
    // res.send('Registrasi berhasil !');
    res.end();
})


// 2. Fungsi Login buat Admin
app.post('/loginAdmin', function(req, res){
    var username = req.body.loginputnama;   // req.body.username = nama="username" di login.ejs form field: Username
    var password = req.body.loginputpassword;   // req.body.passsword = nama="password" di login.ejs form field: Password
    var adminflag = 1;   // hanya Admin user yang di flag di data-table (Admin_User = 1)
    var deleteduser = 0;   // bukan user yang di flag-delete di data-table (Flag_del = 0)
 
    //  console.log(username);
    //  console.log(password);
 
    const encpass = crypto.createHash('sha256', secret).update(password).digest('hex');
    // console.log(encpass);

   
    var tarikData = 'SELECT * FROM user_login';  // user_login = table mySQL database 
    db.query(tarikData, function(err, result) {  // buat fungsi login
        if(err) throw err;
        else {
            for (var i=0; i<result.length; i++)  // ini adalah metode parsing untuk mengurai data satu per satu
            {
                if (username === result[i].username && encpass === result[i].password && adminflag === result[i].Admin_User && deleteduser === result[i].Flag_del)
                {
                    // console.log('Login Berhasil');
                    var status = '1';  // untuk kasih feedback ke frontend bahwa ini OK
                    //res.send(status);
                    res.send(username);
                    break;
                }
                else if (i === result.length-1)  // sampai akhir pencarian di record terakhir tidak ditemukan kondisinya
                {
                    // console.log('Data tidak ditemukan, login gagal');
                    var status = '0';   // untuk kasih feedback ke frontend bahwa ini TIDAK OK
                    res.send(status);
                }
            }

        }
    });

})

// 2a. Fungsi Login buat User
app.post('/loginUser', function(req, res){
    var username = req.body.loginputnama;   // req.body.username = nama="username" di login.ejs form field: Username
    var password = req.body.loginputpassword;   // req.body.passsword = nama="password" di login.ejs form field: Password
    var deleteduser = 0;   // bukan user yang di flag-delete di data-table (Flag_del = 0)
    var id = []; // untuk menampung dan masukan ke cookies
 
    //  console.log(username);
    //  console.log(password);
 
    const encpass = crypto.createHash('sha256', secret).update(password).digest('hex');
    // console.log(encpass);

   
    var tarikData = 'SELECT * FROM user_login';  // user_login = table mySQL database 
    db.query(tarikData, function(err, result) {  // buat fungsi login
        if(err) throw err;
        else {
            for (var i=0; i<result.length; i++)
            {
                if (username === result[i].username && encpass === result[i].password && deleteduser === result[i].Flag_del && result[i].Admin_User === 0)
                {
                    // console.log('Login Berhasil');
                    // var status = username;  // untuk nama cookie
                    // res.send(status); // untuk status nama cookie
                    id.push(result[i].id);  // cara ade: dg manggil Id yang login
                    res.send(id)  //  cara ade: dg kirim Id yang login                   
                    break;
                }
                else if (i === result.length-1)  // sampai akhir pencarian di record terakhir tidak ditemukan kondisinya
                {
                    // console.log('Data tidak ditemukan, login gagal');
                    var status = '0';
                    res.send(status);
                }
            }

        }
    });

})

// 3. Fungsi Tampilan Admin Home = List Product
app.get('/productlist', (req, res) => {    // request untuk: narik data (req.body.../req.params.../req.query...)    ;  respond untuk: lempar data

    // res.send('Respon berhasil');   // menampilkan respond berupa string dan array; tanpa ini browser akan loading terus
    // res.end(); // menampilkan respond hanya berupa string 
    // res.render('form');  // menampilkan file (dalam contoh ini: form di browser)
    // res.json(hasil);  // menampilkan data berupa type data JSON, ataupun single data type INT

    var panggildatabase = 'SELECT * FROM product WHERE Flag_del = 0';
    db.query(panggildatabase, (err, hasil) => {
        if(err){
            throw err;
        }
        else {
            // console.log(hasil);
            res.send(hasil); // kirim data ke frontend 
        }
    })

});

// 3a. Fungsi Tampilan User List
app.get('/userlist', (req, res) => {    // request untuk: narik data (req.body.../req.params.../req.query...)    ;  respond untuk: lempar data

    // res.send('Respon berhasil');   // menampilkan respond berupa string dan array; tanpa ini browser akan loading terus
    // res.end(); // menampilkan respond hanya berupa string 
    // res.render('form');  // menampilkan file (dalam contoh ini: form di browser)
    // res.json(hasil);  // menampilkan data berupa type data JSON, ataupun single data type INT

    var panggildatabase = 'SELECT * FROM users_data';
    db.query(panggildatabase, (err, hasil) => {
        if(err){
            throw err;
        }
        else {
            // console.log(hasil);
            res.send(hasil); // kirim data ke frontend 
        }
    })

});

// 4. tampilkan semua data produk barang yang terhapus
app.get('/tampildataterhapus', (req, res) => {    // request untuk: narik data (req.body.../req.params.../req.query...)    ;  respond untuk: lempar data

    var panggildatabase = 'SELECT * FROM product WHERE Flag_del = 1';
    db.query(panggildatabase, (err, hasil) => {
        if(err){
            throw err;
        }
        else {
            // console.log(hasil);
            res.send(hasil); // kirim data ke frontend 
        }
    })

});

// 5. untuk form penambahan data table: product
app.post('/tambahData', (req, res) => {
    var namaProduk = req.body.inputSatu; // .inputSatu di sini mereferensikan axios.post variable di react Form.js pada url 3003/tambahData 
    var lengkapProduk = req.body.inputDua; // .inputDua di sini mereferensikan axios.post variable di react Form.js pada url 3003/tambahData 
    var unitProduk = req.body.inputTiga;  
    var mataUang = req.body.inputEmpat;  
    var hargaProduk = req.body.inputLima;  
    var kodeProduk = req.body.inputEnam;  
    var kategoriProduk = req.body.inputTujuh;  
    var merekProduk = req.body.inputDelapan; 

   var sqltambahdata =  'INSERT INTO product SET `desc`=?, `Long_desc`=?, `uom`=?, `curr`=?, `price`=?, `part_no`=?, `category`=?,`brand`=?'

    //var sql = `INSERT INTO bags VALUES("${''}", "${namaProduk}", "${hargaProduk}")`; // urut2an disesuaikan dg urutan field di table "bags"
    //var sql =  "INSERT INTO product (desc, Long_desc, uom, curr, price, part_no, category, brand) VALUES ('"+namaProduk+"','"+lengkapProduk+"','"+unitProduk+"','"+mataUang+"','"+hargaProduk+"','"+kodeProduk+"','"+kategoriProduk+"','"+merekProduk+"')";
    db.query(sqltambahdata, [namaProduk,lengkapProduk,unitProduk,mataUang,hargaProduk,kodeProduk,kategoriProduk,merekProduk], (err, hasilnya) => {
         if(err){
             throw err;
 
         } else {
             res.end('Data berhasil disimpan')
         }
     });
 });

  // 6. Untuk mengambil data table: product per baris
  app.get ('/editdata/:id', (req, res) => {    // :id valuenya berubah2 tergantung button di react jsx nya
    // menyiapkan query ke MySQL
    // console.log(req.params.id)

    var ambilData = `SELECT * FROM product WHERE id = ${req.params.id}`;  // .id di sini refer kpd :id di atas
    // mengeksekusi query dg syntax nodeJS
    db.query(ambilData, (nilaiError, hasilquery) => {
        if(nilaiError){
            // mengeluarkan pesan error apabila terjadi kesalahan codingan nya
            throw nilaiError;
        } else {
        // menyiapkan hasil query untuk siap dikirim
            res.send(hasilquery);
            // console.log(hasilquery)
        }

    })
});

// 6a. Untuk mengambil data table: users_data per baris
  app.get ('/userdata/:id', (req, res) => {    // :id valuenya berubah2 tergantung button di react jsx nya
    // menyiapkan query ke MySQL
    // console.log(req.params.id)

    var ambilData = `SELECT * FROM users_data WHERE id = ${req.params.id}`;  // .id di sini refer kpd :id di atas
    // mengeksekusi query dg syntax nodeJS
    db.query(ambilData, (nilaiError, hasilquery) => {
        if(nilaiError){
            // mengeluarkan pesan error apabila terjadi kesalahan codingan nya
            throw nilaiError;
        } else {
        // menyiapkan hasil query untuk siap dikirim
            res.send(hasilquery);
            // console.log(hasilquery)
        }

    })
});

// 7. untuk meng-edit data table: product
app.post('/ubahData', (req, res) => {

//   if(req.files.file.name != undefined) { 

    // var filename = req.files.file.name;
    // console.log(filename);

    // if(req.files){
        
    //     var semua = req.files.file;

    //     // console.log(semua);

    //     semua.mv("./tampunganFile/"+ filename, (kaloError) => {
    //         if(kaloError){
    //             console.log(kaloError);
    //             res.send('Upload failed');
    //         } else {
    //             res.send('Upload succeed');
    //         }
    //     })
    // }
    
    var id = req.body.idproduk;
    var namaProduk = req.body.namaproduk;// desc
    var hargaProduk = req.body.hargaproduk;
    var matauangProduk = req.body.matauangproduk;
    var brandProduk = req.body.brandproduk;
    var kategoriProduk = req.body.kategoriproduk;
    var PNProduk = req.body.PNproduk;
    var unitProduk = req.body.unitproduk;
    // var fileName = req.files.file.name;
    var detilProduk = req.body.detilproduk;


    // console.log(id);
    // console.log(namaProduk);
    // console.log(hargaProduk);
    // console.log(matauangProduk);
    // console.log(brandProduk);
    // console.log(kategoriProduk);
    // console.log(PNProduk);
    // console.log(unitProduk);
    // console.log(detilProduk);

    // var queryUpdate = `UPDATE product SET desc='${namaProduk}', price='${hargaProduk}', curr='${matauangProduk}', brand='${brandProduk}', category='${kategoriProduk}', part_no='${PNProduk}', uom='${unitProduk}', Long_desc='${detilProduk}' WHERE id='${id}'`
    // var queryUpdate = 'UPDATE product SET `desc`=?, `price`=?, `curr`=?, `brand`=?, `category`=?, `part_no`=?, `uom`=?, `id_pics`=?, `Long_desc`=? WHERE `id`=?'; 
    var queryUpdate = 'UPDATE product SET `desc`=?, `price`=?, `curr`=?, `brand`=?, `category`=?, `part_no`=?, `uom`=?,`Long_desc`=? WHERE `id`=?'; 
    
    // db.query(queryUpdate, [namaProduk,hargaProduk,matauangProduk,brandProduk,kategoriProduk,PNProduk,unitProduk,fileName,detilProduk,id], (err, result) => {
    db.query(queryUpdate, [namaProduk,hargaProduk,matauangProduk,brandProduk,kategoriProduk,PNProduk,unitProduk,detilProduk,id], (err, result) => {
    
        if(err){
            throw err;
        } else {
            // res.send(result); // ini yang bikin error
        }
    });   
    
    // } // close of (req.files.file.name != 'undefined')

});

// 7a. untuk meng-edit data table: users_data dan sekaligus user_login
app.post('/ubahUser', (req, res) => {

        
        var id = req.body.iduser;
        var namaLengkap = req.body.namalengkap;// desc
        var namaUser = req.body.namauser;
        var passwordUser = req.body.passworduser;
        var alamatUser = req.body.alamatuser;
        var emailUser = req.body.emailuser;

        // var unitProduk = req.body.unitproduk;
        // var detilProduk = req.body.detilproduk;
    
    
        // console.log(id);
        // console.log(namaLengkap);
        // console.log(namaUser);
        // console.log(passwordUser);
        // console.log(alamatUser);
        // console.log(emailUser);
            
        // var queryUpdate = `UPDATE product SET desc='${namaProduk}', price='${hargaProduk}', curr='${matauangProduk}', brand='${brandProduk}', category='${kategoriProduk}', part_no='${PNProduk}', uom='${unitProduk}', Long_desc='${detilProduk}' WHERE id='${id}'`
        var queryUpdate = 'UPDATE users_data SET `nama_lengkap`=?, `username`=?, `password`=?, `address`=?, `email`=? WHERE `id`=?'; 
        db.query(queryUpdate, [namaLengkap,namaUser,passwordUser,alamatUser,emailUser,id], (err, result) => {
        
            if(err){
                throw err;
            } else {
                // res.send(result); // ini yang bikin error
            }
        });   

        var queryUpdate = 'UPDATE user_login SET `username`=?, `password`=?,`email`=? WHERE `id`=?'; 
        db.query(queryUpdate, [namaUser,passwordUser,emailUser,id], (err, result) => {
        
            if(err){
                throw err;
            } else {
                // res.send(result); // ini yang bikin error
            }
        });   

    });

// 7b. untuk menambah/edit gambar table: product
app.post('/tambahGambar', (req, res) => {

    //   if(req.files.file.name != undefined) { 
    
        var filename = req.files.file.name;
        console.log(filename);
    
        if(req.files){
            
            var semua = req.files.file;
    
            // console.log(semua);
    
            semua.mv("./tampunganFile/"+ filename, (kaloError) => {
                if(kaloError){
                    console.log(kaloError);
                    res.send('Upload failed');
                } else {
                    res.send('Upload succeed');
                }
            })
        }
        
        var id = req.body.idproduk;
        var namaProduk = req.body.namaproduk;// desc
        var fileName = req.files.file.name;
        var detilProduk = req.body.detilproduk;
    
    
        // console.log(id);
        // console.log(namaProduk);
        // console.log(detilProduk);
    
        var queryUpdate = 'UPDATE product SET `desc`=?,`id_pics`=?, `Long_desc`=? WHERE `id`=?'; 
        
        db.query(queryUpdate, [namaProduk,fileName,detilProduk,id], (err, result) => {
            if(err){
                throw err;
            } else {
                // res.send(result); // ini yang bikin error
            }
        });   
  
    });

// 8. untuk meng-flag delete data table: product
app.post('/hapusData', (req, res) => {
    var id = req.body.idproduk;
    var namaProduk = req.body.namaproduk;
    var hargaProduk = req.body.hargaproduk;
    var queryUpdate = `UPDATE product SET Flag_del = 1 WHERE id="${id}"`;

    db.query(queryUpdate, (err, result) => {
        if(err){
            throw err;
        } else {
            res.send('delete data berhasil !');
        }
    })
})

// 9. untuk mengembalikan/un-delete data table: product
app.post('/balikinData', (req, res) => {
    var id = req.body.idproduk;
    var namaProduk = req.body.namaproduk;
    var hargaProduk = req.body.hargaproduk;
    var queryUpdate = `UPDATE product SET Flag_del = 0 WHERE id="${id}"`;

    db.query(queryUpdate, (err, result) => {
        if(err){
            throw err;
        } else {
            res.send('kembalikan data berhasil !');
        }
    })
})

// 10. Untuk update table: cart
app.post('/updatecart', (req, res) => {

    // console.log(req.body.user_id)       // untuk cek data masuk dari front-end
    // console.log(req.body.product_id)    // untuk cek data masuk dari front-end
    // console.log(req.body.harga)         // untuk cek data masuk dari front-end

    var user_id = req.body.user_id
    var product_id = req.body.product_id
    var totalharga = req.body.harga
    var quantity = 1

    var sql = 'INSERT INTO `cart` SET `product_id`=?, `user_id`=?, `quantity`=?, `total_price`=?'

    db.query(sql,[product_id, user_id, quantity, totalharga], (err,result)=>{
        if(err) throw err
        res.send('update cart berhasil')
    })
  
})

// 11. Show Cart
app.post('/showcart', (req, res) => {

    var user_id = req.body.user_id
    
    var sql = 'SELECT * FROM `cart` JOIN `product` ON cart.product_id=product.id WHERE cart.user_id=? && cart.item_stat_code =1'

    db.query(sql, user_id, (err,result)=>{
        if(err) throw err
        // console.log(result)
        res.send(result)
    })
  
})

// 12. Update Table Order
app.post('/updateorder', (req, res) => {

    var checkorder = 'SELECT order_no FROM order_header'
    db.query(checkorder, (err,result) => {
        if (err) throw err
        else
        {
            var length = result.length

            var lastOrderID = 0;
            (length === 0) ? lastOrderID = 0 : lastOrderID = parseInt(result[length - 1].order_no);
            var orderID = lastOrderID + 1;
            var orders = '';

            if (orderID < 10) orders = orders + '0000' + orderID
            else if (orderID >= 10 && orderID < 100) orders = orders + '000' + orderID
            else if (orderID >= 100 && orderID < 1000) orders = orders + '00' + orderID
            else if (orderID >= 1000 && orderID < 10000) orders = orders + '0' + orderID
            else orders = orders + orderID
          // generate order ID
          console.log(orders)

          var user_id = req.body.idUser
        //   var dataCart = req.body.datacart
      
          console.log(user_id)  // untuk cek data masuk dari front-end
        //   console.log(dataCart)  // untuk cek data masuk dari front-end
      
              var sqluser = `SELECT * FROM users_data WHERE id="${user_id}"`
              db.query(sqluser, (err, result) => {
                if (err) throw err
                else 
                {
                  var bill_to = result[0].nama_lengkap + '. ' + result[0].address
                  var name = result[0].username
                  var complete_name = result[0].nama_lengkap
                  var tel_no = result[0].tel_no
                  var hp_no = result[0].hp_no
                  var address = result[0].address
                  var email = result[0].email

                  console.log(bill_to)
                  console.log(name)
                  console.log(complete_name)
                  console.log(tel_no)
                  console.log(hp_no)
                  console.log(address)
                  console.log(email)
                                    
                    var sql = `INSERT INTO order_header SET user_id=?, order_no=?, bill_to=?, name=?, complete_name=?, tel_no=?, 
                    hp_no=?, address=?, email=?`
            
                    db.query(sql, [user_id, orders, bill_to, name, complete_name, tel_no, hp_no, address, email], (err, result) => {
                        if (err) throw err
                        else 
                       
                        // console.log('asd')
                        //   counter++;
                        //   if (counter === dataCart.length) 
                          {
                              res.send('1')
                          }
                          // res.send('1') // bila insert data berhasil identik dg '1'
                          
                          // console.log(result)
                        
                    })
              
                 }  
                // console.log(result)
                
            })

      
              
        }

    }
)


    
    
    
})

// 13. Show Order
app.post('/showorder', (req, res) => {

    var user_id = req.body.user_id
    console.log(typeof(user_id))
    // var sql = 'SELECT * FROM `order_item` JOIN `users_data` ON order_item.user_id=users_data.id WHERE order_item.user_id=?'
    var sql = `SELECT * FROM order_header JOIN order_stat ON order_header.order_status=order_stat.id
    WHERE user_id="${user_id}" AND order_status="0"; `
    sql += `SELECT * FROM cart  JOIN product ON cart.product_id=product.id
    WHERE user_id="${user_id}" AND item_stat_code="1" `
    

        db.query(sql, user_id, (err,result)=>{
        if(err) throw err
        // console.log(result)
        res.send(result)
    })
  
})

// 14. confirm order
app.post('/confirmorder', (req, res) => {

    var cart_total = req.body.subtotal
    var vat_total = req.body.valaddtax
    var ship_total = req.body.shipcost
    var grandcart_total = req.body.grandtotal
console.log(typeof(vat_total))
console.log(typeof(grandcart_total))
    var order_no = req.body.ordernumber
    var user_id = req.body.UserID
  
    var ibillto = req.body.billto
    var ipaymethod = req.body.paymethod
    var iname = req.body.name
    var ifname = req.body.fname
    var itelno = req.body.telno
    var iemail = req.body.email
    var iaddress = req.body.address
    var iorderdate = req.body.orderdate
   
    var sql = `UPDATE order_header SET name="${iname}", complete_name="${ifname}", tel_no="${itelno}", address="${iaddress}",
    email="${iemail}",
    cart_total="${cart_total}", cart_totalVAT="${vat_total}", 
    cart_totalSHIP="${ship_total}", cart_grandtotal="${grandcart_total}", order_status="1"
    WHERE order_no = "${order_no}"; `
    sql += `UPDATE cart SET order_no="${order_no}", item_stat_code="2"
    WHERE user_id="${user_id}" AND item_stat_code="1"; `
    sql += `INSERT INTO inv_header SET user_id="${user_id}", inv_no="${order_no}", sub_total="${cart_total}", 
    ship_cost="${ship_total}", tax="${vat_total}", grand_total="${grandcart_total}", bill_to="${ibillto}", pay_method="${ipaymethod}", 
    ship_to_Name="${iname}", ship_to_Fname="${ifname}", ship_to_Telno="${itelno}", 
    ship_to_Email="${iemail}", ship_to_Address="${iaddress}", order_date="${iorderdate}" `    
    

    db.query(sql, (err, result) => {
        if (err) throw err
        else 
            {
              res.send('1')
            }
    })

  })

// 15. Show Order
app.post('/showinvoice', (req, res) => {

    var userid = req.body.user_id
    console.log(typeof(user_id))

    var sql = `SELECT * FROM inv_header JOIN inv_stat ON inv_header.inv_stat_id=inv_stat.id JOIN users_data 
    ON inv_header.user_id=users_data.id
    WHERE user_id="${userid}" AND inv_stat_id="1"; `
    sql += `SELECT * FROM cart  JOIN product ON cart.product_id=product.id
    WHERE user_id="${userid}" AND item_stat_code="2" `
    

        db.query(sql, userid, (err,result)=>{
        if(err) throw err
        // console.log(result)
        res.send(result)
    })
  
})

// 16. Post Invoice
app.post('/postinvoice', (req, res) => {

    var user_id = req.body.UserID
    var iinvno = req.body.inv_no
    var today = new Date()
        var year = today.getFullYear()
        var month = 0
            if (today.getMonth().toString().length === 1) { month = '0' + (today.getMonth()+1) } else { month = today.getMonth()+1}
        var date = 0
            if (today.getDate().toString().length === 1) { date = '0' + today.getDate() } else { date = today.getDate()}
        var hour = 0
            if (today.getHours().toString().length === 1) { hour = '0' + today.getHours() } else { hour = today.getHours()}
        var mins = today.getMinutes()
            if (today.getMinutes().toString().length === 1) { mins = '0' + today.getMinutes() } else { mins = today.getMinutes()}
        var sec = today.getSeconds()
            if (today.getSeconds().toString().length === 1) { sec = '0' + today.getSeconds() } else { sec = today.getSeconds()}
    var to_date = year+'-'+month+'-'+date+' '+hour+':'+mins+':'+sec
   
    var sql = `UPDATE inv_header SET posted_date="${to_date}", inv_stat_id="2"
    WHERE user_id="${user_id}" AND inv_no = "${iinvno}" AND inv_stat_id="1"; `
    sql += `UPDATE cart SET inv_date="${to_date}", item_stat_code="3" 
    WHERE user_id="${user_id}" AND order_no="${iinvno}" AND item_stat_code="2" `
   
    db.query(sql, (err, result) => {
        if (err) throw err
        else 
            {
              res.send('1')
            }
    })

  })

// 17. Show Order
app.post('/completeinvoice', (req, res) => {

    var userid = req.body.user_id
    var invoice_id = req.body.invoice_id
    console.log(typeof(user_id))
    console.log(invoice_id)

    var sql = `SELECT * FROM inv_header JOIN inv_stat ON inv_header.inv_stat_id=inv_stat.id JOIN users_data 
    ON inv_header.user_id=users_data.id
    WHERE user_id="${userid}" AND inv_stat_id="2" AND inv_header.inv_no="${invoice_id}" ;`
    sql += `SELECT * FROM cart  JOIN product ON cart.product_id=product.id
    WHERE user_id="${userid}" AND item_stat_code="3" AND cart.order_no="${invoice_id}" `
    
        db.query(sql, userid, (err,result)=>{
        if(err) throw err
        // console.log(result)
        res.send(result)
    })
  
})

// 18. Show User profile
app.post('/showuserprofile', (req, res) => {

    var userid = req.body.user_id
    console.log(typeof(user_id))

    var sql = `SELECT * FROM users_data WHERE id="${userid}" `
    
        db.query(sql, userid, (err,result)=>{
        if(err) throw err
        // console.log(result)
        res.send(result)
    })
  
})

// 19. update user profile
app.post('/updateuserprofile', (req, res) => {

    var iduser = req.body.iduser
    var salutation = req.body.salutation
    var namalengkap = req.body.namalengkap
    var emailuser = req.body.emailuser
    var hobby = req.body.hobby

    var bday = req.body.bday
    var city = req.body.city
  
    var tel_no = req.body.tel_no
    var hp_no = req.body.hp_no
    var visa = req.body.visa
    var alamatuser = req.body.alamatuser
   
    var sql = `UPDATE users_data SET salutation="${salutation}", nama_lengkap="${namalengkap}", email="${emailuser}", 
    hobby="${hobby}", bday="${bday}", city="${city}", tel_no="${tel_no}", hp_no="${hp_no}", visa="${visa}",
    address="${alamatuser}" WHERE id = "${iduser}" ` 
       
    db.query(sql, (err, result) => {
        if (err) throw err
        else 
            {
              res.send('1')
            }
    })

  })

// 20. Show User Invoice List
app.post('/userlistinvoice', (req, res) => {

    var userid = req.body.user_id
    console.log(typeof(user_id))

    var sql = `SELECT * FROM inv_header JOIN inv_stat ON inv_header.inv_stat_id=inv_stat.id 
    JOIN users_data ON inv_header.user_id=users_data.id
    WHERE user_id="${userid} AND inv_stat_id=2" `
    
        db.query(sql, userid, (err,result)=>{
        if(err) throw err
        // console.log(result)
        res.send(result)
    })
  
})


//db.end();