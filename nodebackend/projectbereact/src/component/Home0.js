import React, { Component } from 'react'; /* by default */
import Header0 from './Header0';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */

class Home0 extends Component {

  render() {

    return (

    <div>
 

    <Header0 />

          {/* Gambar Tengah */}
          <div className="container-fluid">
            <div className="container-fluid gambarT">

              <br />   <p> </p><h1> Search Our Products and Partner Merchants </h1>  <p />
              <div className="box-hitam-opaque"><br /><br />
                <label htmlFor="product">Search Product</label>
                <input name="searchP" type="text" /> <p>
                  <label htmlFor="category"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Category</label>
                  <input name="searchC" type="text" /> <br />
                  <button className="btn btn-primary">Search</button>
                </p></div>
              <div className="container">
                <div className="dropdown">
                  <button className="btn btn-success dropdown-toggle" data-toggle="dropdown"> Merchants 
                    <div className="caret">
                    </div>
                  </button>
                  <ul className="dropdown-menu ddc">
                    <li><a href="#">FlowServe</a></li>
                    <li><a href="#">NPN</a></li>
                    <li><a href="#">Caterpillar</a></li>
                    <li><a href="#">Solar Rolls-Royce</a></li>
                    <li><a href="#">John Crane</a></li>
                    <li><a href="#">MontBlanc</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 3 Text-box di tengah     */}
            <div className="container-fluid">
              <div className="row">    
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 texbox">
                  <h3>Supply Chain Management Consultancy </h3> <br /> 
                  Management Consulting services uncover and creates value across the organization silos and focus on uncovering our clients’ opportunities and critical issues
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 texbox">
                  <h3>Procurement assistance </h3> <br />
                  Procurement assistant is our tool that enables buyers to create their own wish list of items to be procured via our market place..
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 texbox">
                  <h3>Procurement strategy &amp; process customization</h3>
                  Procurement solution helps companies simplify their purchase and payment for goods and services that result in streamlined paperless processes which improve organizational efficiency.
                </div>
              </div>
            </div>
            {/* New Item 3 box di tengah */}
            <div className="container-fluid" style={{marginTop: 10}}>
              <div className="row">    
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 artikel">
                  <a href="pd1.html"> <img width={100} height={100} alt="New Product1" src="img/p.antoldwatch.jpg" /> </a>
                  <div className="teks">
                    <h4>New Item 1</h4> 
                    <p> Watch, old style, gold with gear glass </p>
                    <b> USD 85.50 </b> <br />
                    <a href="#"> <button className="btn btn-danger">AddToCart</button> </a>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 artikel">
                  <a href="pd4.html"> <img width={100} height={100} alt="New Product2" src="img/p.drillbitset.jpg" /> </a>
                  <div className="teks">    
                    <h4>New Item 2</h4> 
                    <p> Drill, head sets, 12-15 mm, CS </p>
                    <b> USD 29.00 </b> <br />
                    <a href="#"> <button className="btn btn-danger">AddToCart</button> </a>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 artikel">
                  <a href="pd7.html"> <img width={100} height={100} alt="New Product3" src="img/p.binocularhead.jpg" /> </a>
                  <div className="teks">
                    <h4>New Item 3</h4>
                    <p> Binocular, type zoom lens, 12-85mm</p>
                    <b> USD 125.50 </b> <br />
                    <a href="#"> <button className="btn btn-danger">AddToCart</button> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

   <Footer/>



    </div>  /* end of opening div */

);  /* end of return */

} /* end of render */

} /* end of component */



export default Home0
