import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'; // untuk proteksi, library {connect} sudah methodnya
import {Redirect} from 'react-router-dom'; // untuk fungsi redirect setelah suatu kondisi tertentu

/////////// A. Cookies  ///////////////////
import Cookies from 'universal-cookie'

/////////// A. Cookies  ///////////////////

    const cookies = new Cookies();

///////////Cookies-end///////////////////



// ini store redux yang menyimpan data user yang berhasil login buat meng-access rights ke laman KOMPONEN ini //
function mapStateToProps(state){
    return {
        login: state.hasil_login
    };
}
// end of redux store //



class NavbarYeti extends Component {

    state = {
        redirect: false
    }

    /////// B. KHUSUS fungsi ini untuk LOGOUT button ///////////////
    keluar = () => {
        cookies.remove('sessionID')
        this.setState({
            redirect : true
        }) 
        
    }
    ////////////////////// LOGOUT button ////////////////////////////

  render() {

        ////// B. fungsi ini untuk logout button ////////
            if (this.state.redirect ) {
                return <Redirect to='/adminmasuk'/>
            }
        ////////////// logout button /////////////////

    return (
      <div>
        {/* start of Navbar */}
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">OneParts.com CRUD</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav">
                <li className="active"><a onClick={() => this.keluar()}>Logout <span className="sr-only">(current)</span></a></li>
                {/* <button onClick={() => this.keluar()}> Logout </button> */}
                <li><Link to="/reguser">Add User</Link></li>
                <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Menu <span className="caret" /></a>
                <ul className="dropdown-menu" role="menu">
                    {/* <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li className="divider" />
                    <li><a href="#">Separated link</a></li>
                    <li className="divider" />
                    <li><a href="#">One more separated link</a></li> */}

                    <li><Link to="/addproductdata">Tambah Data</Link></li>  
                    {/* di sini Link memanggil komponen Form.js yg didefine sbg komponen dari laman /tambahdata (cek di App.js react)  */}
                    <li className="divider" />
                    <li><Link to="/deletedproductlist">Kembalikan Data Terhapus</Link></li>  
                    <li className="divider" />
                    <li><Link to="/userlist">View User List</Link></li>
                    <li className="divider" />
                    <li><Link to="/reguser">Register a User</Link></li>

                </ul>
                </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
            <li><Link to="/productlist">Home</Link></li> 
                {/* <li><a href="/productlist">Home</a></li> */}
            </ul>
            </div>
        </div>
        </nav>
        {/* end of navbar */}

      </div>
    )
  }
}

export default connect(mapStateToProps) (NavbarYeti);