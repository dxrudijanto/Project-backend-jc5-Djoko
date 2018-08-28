import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'; // untuk proteksi, library {connect} sudah methodnya
import {Redirect} from 'react-router-dom'; // untuk fungsi redirect setelah suatu kondisi tertentu
import SideFilter from './SideFilter';

/////////// A. Cookies  ///////////////////
import Cookies from 'universal-cookie'

/////////// A. Cookies  ///////////////////

    const cookies = new Cookies();

///////////Cookies-end///////////////////

class ProductList extends Component {
    state = {
        dataproduk: [],
        redirect: false,
        nextpage: false
    }
    componentDidMount(){
        axios.get(`http://localhost:3003/productlist`).then(
            /** Disini fungsi */
            (ambilData) => {
                console.log(ambilData.data);
                this.setState({
                    dataproduk: ambilData.data
                });
            }
        )
    }
    
    buy(id,hargaproduk) {
        // console.log(id)             // untuk test data masuk
        // console.log(hargaproduk)    // untuk test data masuk
        var id = id
        var hargaproduk = hargaproduk
        axios.post('http://localhost:3003/updatecart',{
            product_id:id,
            harga:hargaproduk,
            user_id: cookies.get('sessionUserID')
        }).then((respons)=>{
            if(respons.data === 'update cart berhasil') {
                this.setState ({nextpage:true})
            }
        })
    }

  render() {
        ///////// A. Fungsi Wajib Untuk Setiap Component yang perlu proteksi login //////////////
        if (cookies.get('sessionUserID') == undefined ) {
            return <Redirect to='/loginuser'/>
        }
      /////////// Khusus buat proteksi komponen tanpa ada logout button /////////////////////
  
      /////// ini untuk redirect ke hal cart setiap kali product ditambahkan //////
        if (this.state.nextpage) {
            return <Redirect to="/usercart" />
        }
      ///////  redirect ke hal cart  //////  

      const hasil = this.state.dataproduk.map(
        (isi, index) => {               // index tidak mengambil dari id database, tapi langsung di frontend nya, shg no. urut independent mulai dari 1 (index + 1)
            var urut = index + 1;
            var namaproduk = isi.desc; // .desc = mengambil data dari table-column "desc" yg ditargetkan di server port 3003
            var lengkapproduk = isi.Long_desc; // .desc = mengambil data dari table-column "desc" yg ditargetkan di server port 3003
            var matauang = isi.curr; // .curr = mengambil data dari table-column "curr" yg ditargetkan di server port 3003
            var hargaproduk = isi.price; // .price = mengambil data dari table-column "price" yg ditargetkan di server port 3003
            var kodeproduk = isi.part_no; // .part_no = mengambil data dari table-column "part_no" yg ditargetkan di server port 3003
            var unitproduk = isi.uom; // .uom = mengambil data dari table-column "uom" yg ditargetkan di server port 3003
            var kategoriproduk = isi.category; // .category = mengambil data dari table-column "category" yg ditargetkan di server port 3003
            var merekproduk = isi.brand; // .brand = mengambil data dari table-column "brand" yg ditargetkan di server port 3003
            var produkID = isi.id; // .id = mengambil data dari table-column "id" yg ditargetkan di server port 3003
            var gambar = isi.id_pics; // .id = mengambil data dari table-column "id" yg ditargetkan di server port 3003
                                         // target database dan data-table terdapat dalam file appbackend.js (nodeJS yg terhubung dg database)
  

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="product product-single">
                <div className="product-thumb">
                    {/* <img src="img/item-10.jpg" alt /> */}
                    <img src={'http://localhost:3003/tampunganFile/' + gambar} style={{ width: 200, height:200 }} alt={gambar} />
                </div>
                <div className="product-body">
                    <h3 className="product-price">$ &nbsp; {hargaproduk} </h3>
                    <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                        <i className="fa fa-star-o empty" />
                    </div>
                    <h2 className="product-name"><a href="#">{namaproduk}</a></h2>
                    <div className="product-btns">
                        <button onClick = {()=>this.buy(produkID,hargaproduk)} 
                        className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>		
                            
    );
}
);

return (

    <div>
        <Navbar />
        <div className="content-product" style={{ marginTop: "80px" }}>
            <div className="container">
                <div className="row">
                    <SideFilter />
                    <div className="col-sm-6 col-md-8 col-lg-9">
                        <div className="row">

                            {hasil}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>  /* end of opening div */

);  /* end of return */

} /* end of render */

} /* end of component */
  



export default ProductList;

