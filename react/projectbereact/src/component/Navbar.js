import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

class Navbar extends Component {

  render() {

    return (

      <div>

        <nav className="navbar navbar-custom navbar-fixed-top">
            <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand  TLogo1" href="Home">  <img width={35} src="img/(logo)linkedin.png" /> </a>
                <button className="navbar-toggle collapsed" data-target="#ddlist" data-toggle="collapse">
                {/* <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" /> */}
                <i className="fas fa-bars" style={{color: 'white', fontSize: 18}} />            
                </button>
            </div>
            <div className="collapse navbar-collapse" id="ddlist">
                <ul className="nav navbar-nav navT">
                <li className="nav2"><a href="myprofile">My Profile</a></li>
                <li className="nav2"><a href="myinvpdg">My Invoice</a></li>
                <li className="nav2"><a href="mycart">My Cart</a></li>
                </ul>
                <a href="myprofile.html">
                <figure className="navbar-right">
                    <img width={25} height={25} className=" img-circle" style={{margin: '14 10 0 0'}} src="img/(logo)youtube.png" />
                </figure>
                </a>
                <b className="navbar-right" style={{margin: '21 5 0 0', color: 'white', fontSize: 10}}> Rudy </b>
                <button className="btn btn-primary navbar-btn navbar-right" style={{margin: 10}}>
                3 Products <span className="label label-danger">NEW</span>
                </button>
                <button className="btn btn-primary navbar-btn navbar-right" style={{margin: 10}}>
                Total Items <span className="badge">9</span>
                </button>
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