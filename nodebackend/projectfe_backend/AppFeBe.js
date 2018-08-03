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
    database : 'parts'
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
 
    console.log(nama);
    console.log(email);
    console.log(password);
    console.log(namalengkap);
    console.log(alamat);
 
    const encpass = crypto.createHash('sha256', secret).update(password).digest('hex');
    // console.log(encpass);
 
    var sql = "INSERT INTO users_data (username, email, password, nama_lengkap, address) VALUES ('"+nama+"','"+email+"','"+encpass+"','"+namalengkap+"','"+alamat+"')"; //users_data = table mySQL database;
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
                if (username === result[i].username && encpass === result[i].password && deleteduser === result[i].Flag_del)
                {
                    // console.log('Login Berhasil');
                    var status = username;
                    res.send(status);
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


//db.end();