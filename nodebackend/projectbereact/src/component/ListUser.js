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

class ListUser extends Component {
  state = {
      datauser: [],
  }
  componentDidMount(){
      axios.get(`http://localhost:3003/userlist`).then(
          /** Disini fungsi */
          (ambilData) => {
              console.log(ambilData.data);
              this.setState({
                datauser: ambilData.data
              });
          }
      )
  }
  render() {
    // console.log(this.props.login);
    // // Authentication prior to accessing this page
    // if (this.props.login != "1"){
    //     {this.state.redirect=true}
    //     this.props.dispatch({type:'Login', kirim: "Gagal Login: Un-authorized access !!"})
    // }

    // if(this.state.redirect){
    //     return <Redirect to='/adminmasuk'/>
    // }

    const hasil = this.state.datauser.map(
        (isi, index) => {               // index tidak mengambil dari id database, tapi langsung di frontend nya, shg no. urut independent mulai dari 1 (index + 1)
            var urut = index + 1;
            var namalengkap = isi.nama_lengkap; // .nama_lengkap = mengambil data dari table-column "nama_lengkap" yg ditargetkan di server port 3003
            var username = isi.username; // .username = mengambil data dari table-column "username" yg ditargetkan di server port 3003
            var alamat = isi.address; // .address = mengambil data dari table-column "address" yg ditargetkan di server port 3003
            var email = isi.email; // .email = mengambil data dari table-column "email" yg ditargetkan di server port 3003
            var userID = isi.id; // .id = mengambil data dari table-column "id" yg ditargetkan di server port 3003
            
                                         // target database dan data-table terdapat dalam file appbackend.js (nodeJS yg terhubung dg database)

            return <tr key={index} style={{textAlign: 'center'}}>
            <td>{urut}</td>
            <td>{namalengkap}</td>
            <td>{username}</td>
            <td>{alamat}</td>
            <td>{email}</td>
            
            <td>
                {/* <Link to={{pathname: "/displayproductdata/", state: {produkID:produkID}  }}  className="btn btn-info btn-sm"> <i className="far fa-eye"></i> &nbsp; Display </Link > &nbsp; */}
                <Link to={{pathname: "/edituserdata/", state: {userID:userID}  }}  className="btn btn-warning btn-sm"> <i className="far fa-edit"></i> &nbsp; Edit </Link > &nbsp;
                {/* <Link to={{pathname: "/addeditpic/", state: {produkID:produkID}  }}  className="btn btn-success btn-sm"> <i className="far fa-edit"></i> &nbsp; Add Pic </Link > &nbsp; */}
                {/* <Link to={{pathname: "/fdeleteproductdata/", state: {produkID:produkID}  }}  className="btn btn-danger btn-sm"> <i className="far fa-trash-alt"></i> &nbsp; Delete </Link >  */}
                
            </td>
        </tr>
        }
    );
    return (
    <div>
    {/* di bawah ini artinya by default semua laman mengandung navbar yang dirender dari component file NavbarYeti.js */}
    <NavbarYeti />

      <div className="container-full">
        <table className="table table-striped table-hover table-bordered">
        <thead>
            <tr>
                <th style={{textAlign: 'center'}}>No</th>
                <th style={{textAlign: 'center'}}>User Complete Name</th>
                <th style={{textAlign: 'center'}}>Username</th>
                <th style={{textAlign: 'center'}}>Address</th>
                <th style={{textAlign: 'center'}}>email</th>
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
export default connect(mapStateToProps) (ListUser);