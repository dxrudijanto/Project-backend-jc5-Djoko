import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'; // untuk proteksi, library {connect} sudah methodnya
import {Redirect} from 'react-router-dom'; // untuk fungsi redirect setelah suatu kondisi tertentu

/////////// A. Cookies  ///////////////////
import Cookies from 'universal-cookie'

/////////// A. Cookies  ///////////////////

    const cookies = new Cookies();

///////////Cookies-end///////////////////

class Navbar extends Component {
    state = {
        redirect: false
    }

    /////// B. KHUSUS fungsi ini untuk LOGOUT button ///////////////
    keluar = () => {
        cookies.remove('sessionUserID')
        this.setState({
            redirect : true
        }) 
        
    }
    ////////////////////// LOGOUT button ////////////////////////////

  render() {

    if (this.state.redirect){
        return <Redirect to = '/loginuser' />
    }

    return (

      <div>

        <nav className="navbar navbar-custom navbar-fixed-top">
            <div className="container-fluid">
            <div className="navbar-header">
                {/* <a className="navbar-brand  TLogo1" href="Home">  <img width={35} src="img/(logo)linkedin.png" /> </a> */}
                <button className="navbar-toggle collapsed" data-target="#ddlist" data-toggle="collapse">
                {/* <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" /> */}
                <i className="fas fa-bars" style={{color: 'white', fontSize: 18}} />            
                </button>
            </div>
            <div className="collapse navbar-collapse" id="ddlist">
                <ul className="nav navbar-nav navT">
                    <li className="nav2"><Link to="/userprofiledisp">My Profile</Link></li>
                    <li className="nav2"><Link to="/usercart">My Cart</Link></li>
                    {/* <li className="nav2"><Link to="/order">My Order</Link></li> */}
                    {/* <li className="nav2"><Link to="/completeinvoice">My Invoice</Link></li> */}
                    <li className="nav2"><Link to="/completeinvoicelist">My Invoice List</Link></li>
                    <li className="nav2"><Link to="/productlisting">Product List</Link></li>
                </ul>
                {/* <a href="myprofile.html">
                <figure className="navbar-right">
                    <img width={25} height={25} className=" img-circle" style={{margin: '14 10 0 0'}} src="img/(logo)youtube.png" />
                </figure>
                </a> */}
                {/* <b className="navbar-right" style={{margin: '21 5 0 0', color: 'white', fontSize: 10}}> Rudy </b> */}
                <button onClick={() => this.keluar()} className="btn btn-primary navbar-btn navbar-right" style={{margin: 10}}>
                User <span className="label label-danger">LogOut</span>
                </button>
                
                {/* <button className="btn btn-primary navbar-btn navbar-right" style={{margin: 10}}>
                3 Products <span className="label label-danger">NEW</span>
                </button>
                
                <button className="btn btn-primary navbar-btn navbar-right" style={{margin: 10}}>
                Total Items <span className="badge">9</span>
                </button>
                 */}
                <form className="navbar-form navbar-right" style={{paddingTop: 2}}>
                <div className="input-group">
                    <input className="form-control" type="Search" placeholder="Search..." />
                    <div className="input-group-btn">
                    <button className="btn btn-md btn-info" style={{height: 34}}>
                        <i className="fa fa-search" style={{color: 'wheat'}} />
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </nav>
   
      </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */

export default Navbar;