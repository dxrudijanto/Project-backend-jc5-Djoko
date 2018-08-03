import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class Admh0 extends Component {

  render() {

    return (

    <div>
 
     {/* Header 1 */}
    <div id="admH0">
     <nav className="navbar navbar-custom navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            {/* <Link className="navbar-brand  TLogo1" to="/">  <img width={35} src="img/(logo)linkedin.png" /> </Link> */}
            <button className="navbar-toggle collapsed" data-target="#ddlist" data-toggle="collapse">
              <i className="fas fa-bars" style={{color: 'white', fontSize: 18}} />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="ddlist">
            <ul className="nav navbar-nav navT">
              <li className="nav2 active"><a href="#">Home</a></li>
              <li className="nav2"><a href="/adminmasuk">Admin Login</a></li>
              <li className="nav2"><a href="/loginuser">User Sign-in</a></li>
            </ul>
            <i className="far fa-user navbar-right" style={{color: 'white', margin: '19 10 0 0'}} />
            <b className="navbar-right" style={{margin: '21 5 0 0', color: 'white', fontSize: 10}}> Sign-In Required to Access </b>
          </div>
        </div>
      </nav> 
      </div>

    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default Admh0
