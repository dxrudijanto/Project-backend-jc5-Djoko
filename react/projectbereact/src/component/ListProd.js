import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import NavbarYeti from './NavbarYeti'; 
import {connect} from 'react-redux'; // untuk proteksi, library {connect} sudah methodnya
import {Redirect} from 'react-router-dom'; // untuk fungsi redirect setelah suatu kondisi tertentu

// ini store redux yang menyimpan data user yang berhasil login buat meng-access rights ke laman KOMPONEN ini //
function mapStateToProps(state){
    return {
        login: state.hasil_login
    };
}
// end of redux store //

class ListProd extends Component {
  state = {
      dataproduk: [],
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
  render() {
    console.log(this.props.login);
    // Authentication prior to accessing this page
    if (this.props.login != "1"){
        {this.state.redirect=true}
        this.props.dispatch({type:'Login', kirim: "gagal un-authorized access"})
    }

    if(this.state.redirect){
        return <Redirect to='/adminmasuk'/>
    }

    const hasil = this.state.dataproduk.map(
        (isi, index) => {               // index tidak mengambil dari id database, tapi langsung di frontend nya, shg no. urut independent mulai dari 1 (index + 1)
            var urut = index + 1;
            var namaproduk = isi.desc; // .desc = mengambil data dari table-column "desc" yg ditargetkan di server port 3003
            var matauang = isi.curr; // .curr = mengambil data dari table-column "curr" yg ditargetkan di server port 3003
            var hargaproduk = isi.price; // .price = mengambil data dari table-column "price" yg ditargetkan di server port 3003
            var kodeproduk = isi.part_no; // .part_no = mengambil data dari table-column "part_no" yg ditargetkan di server port 3003
            var unitproduk = isi.uom; // .uom = mengambil data dari table-column "uom" yg ditargetkan di server port 3003
            var kategoriproduk = isi.category; // .category = mengambil data dari table-column "category" yg ditargetkan di server port 3003
            var merekproduk = isi.brand; // .brand = mengambil data dari table-column "brand" yg ditargetkan di server port 3003
            var produkID = isi.id; // .id = mengambil data dari table-column "id" yg ditargetkan di server port 3003
                                         // target database dan data-table terdapat dalam file appbackend.js (nodeJS yg terhubung dg database)
            return <tr key={index} style={{textAlign: 'center'}}>
            <td>{urut}</td>
            <td>{namaproduk}</td>
            <td>{matauang}</td>
            <td>{hargaproduk}</td>
            <td>{kodeproduk}</td>
            <td>{unitproduk}</td>
            <td>{kategoriproduk}</td>
            <td>{merekproduk}</td>
            <td>
                <Link to={{pathname: "/displayproductdata/", state: {produkID:produkID}  }}  className="btn btn-info btn-sm"> <i className="far fa-eye"></i> &nbsp; Display </Link > &nbsp;
                <Link to={{pathname: "/editproductdata/", state: {produkID:produkID}  }}  className="btn btn-warning btn-sm"> <i className="far fa-edit"></i> &nbsp; Edit </Link > &nbsp;
                <Link to={{pathname: "/hapusdata/", state: {produkID:produkID}  }}  className="btn btn-danger btn-sm"> <i className="far fa-trash-alt"></i> &nbsp; Delete </Link > 
                
            </td>
        </tr>
        }
    );
    return (
    <div>
    {/* di bawah ini artinya by default semua laman mengandung navbar yang dirender dari component file NavbarYeti.js */}
    <NavbarYeti />

      <div className="container">
        <table className="table table-striped table-hover table-bordered">
        <thead>
            <tr>
                <th style={{textAlign: 'center'}}>No</th>
                <th style={{textAlign: 'center'}}>Description</th>
                <th style={{textAlign: 'center'}}>Currency</th>
                <th style={{textAlign: 'center'}}>Price</th>
                <th style={{textAlign: 'center'}}>Part No.</th>
                <th style={{textAlign: 'center'}}>UOM</th>
                <th style={{textAlign: 'center'}}>Category</th>
                <th style={{textAlign: 'center'}}>Brand</th>
                <th style={{textAlign: 'center'}}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {hasil}
        </tbody>
        </table>
      </div>
    </div>
    )
  }
}
export default connect(mapStateToProps) (ListProd);