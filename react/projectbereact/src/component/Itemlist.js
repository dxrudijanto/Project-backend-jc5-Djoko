import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class Itemlist extends Component {

  render() {

    return (

    <div>
 

    <Navbar />

    <div className="container-fluid" />
    <div className="container-fluid" />
        
        <br /><br /><br /><br />
        {/* Search by Merchants and Category */}
        {/* 3 Gambar Tengah dengan 3 rows */}
        {/* two columns segments */}
        <div className="col-xs-2 " style={{height: 1200, paddingTop: 15}}> 
          <h4>Filtered Your Search By </h4> <br />
          <div>
            <button className="btn btn-warning dropdown-toggle" style={{marginBottom: 300}} data-toggle="dropdown"> Merchants 
              <div className="caret">
              </div>
            </button>
            <ul className="dropdown-menu ddlm">
              <li><a href="#">FlowServe</a></li>
              <li><a href="#">NPN</a></li>
              <li><a href="#">Caterpillar</a></li>
              <li><a href="#">Solar Rolls-Royce</a></li>
              <li><a href="#">John Crane</a></li>
              <li><a href="#">MontBlanc</a></li>
            </ul>
          </div>
          <div>
            <button className="btn btn-info dropdown-toggle" data-toggle="dropdown"> Category&nbsp;&nbsp; 
              <div className="caret">
              </div>
            </button>
            <ul className="dropdown-menu ddlc">
              <li><a href="#">01|Apparel</a></li>
              <li><a href="#">02|Parts</a></li>
              <li><a href="#">04|Medtool</a></li>
              <li><a href="#">08|Stationery</a></li>
              <li><a href="#">11|Toys </a></li>
              <li><a href="#">13|Tool </a></li>
            </ul>
          </div>
          {/* Andi     */}
        </div> 
        <div className="col-xs-10 " style={{borderLeft: 'solid grey'}}>
          <br />
          <div className="row">
            <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4 cardFloat ">
              <img className="card-img-top img-responsive" alt="Product" src="img/p.antoldwatch.jpg" />
              <div className="card-body">
                <button className="btn btn-xs">OS-2018-<em>01</em>-0056</button>
                &nbsp;&nbsp;<button className="btn btn-xs">Caterpillar</button>
                <h4 className="card-title">Gold Watch, Balenciaga Style</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer nulla.</p>
                <a className="btn btn-primary" href="pd1">See Product Details</a> <button className="btn btn-danger">New</button>
              </div>
            </div>
            <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4 cardFloat ">
              <img className="card-img-top img-responsive" alt="Product" src="img/p.globe.jpg" />
              <div className="card-body">
                <button className="btn btn-xs">OS-2018-<em>07</em>-0109 </button>
                &nbsp;&nbsp;<button className="btn btn-xs">NPN</button>
                <h4 className="card-title">Globe, Columbus</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer nulla.</p>
                <a className="btn btn-primary" href="pd2">See Product Details</a> <button className="btn btn-danger">New</button>
              </div>
            </div>
            <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4 cardFloat ">
              <img className="card-img-top img-responsive" alt="Product" src="img/p.fspinner.jpg" />
              <div className="card-body">
                <button className="btn btn-xs">OS-2017-<em>11</em>-0231 </button>
                &nbsp;&nbsp;<button className="btn btn-xs">NPN</button>
                <h4 className="card-title">Fidget, Spinner, White</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer nulla.</p>
                <a className="btn btn-primary" href="pd3">See Product Details</a>
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4 cardFloat ">
              <img className="card-img-top img-responsive" alt="Product " src="img//p.drillbitset.jpg" />
              <div className="card-body">
                &nbsp;&nbsp;<button className="btn btn-xs">FlowServe</button>
                <button className="btn btn-xs">OS-2017-<em>13</em>-040</button>
                <h4 className="card-title">Drill, head sets, 12-15 mm, Carbon Steel </h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer nulla.</p>
                <a className="btn btn-primary" href="pd4">See Product Details</a> <button className="btn btn-danger">New</button>
              </div>
            </div>
            <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4 cardFloat ">
              <img className="card-img-top img-responsive" alt="Product" src="img/p.socket wrench3.jpg" />
              <div className="card-body">
                <button className="btn btn-xs">OS-2016-<em>13</em>-0125 </button>
                &nbsp;&nbsp;<button className="btn btn-xs">Solar Rolls-Royce</button>
                <h4 className="card-title">Wrench, socket head, red, set of 3 sizes</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer nulla.</p>
                <a className="btn btn-primary" href="pd5">See Product Details</a>
              </div>
            </div>
            <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4 cardFloat ">
              <img className="card-img-top img-responsive" alt="Product" src="img/p.watchgearset.jpg" />
              <div className="card-body">
                <button className="btn btn-xs">OS-2015-<em>02</em>-0066 </button>
                &nbsp;&nbsp;<button className="btn btn-xs">John Crane</button>
                <h4 className="card-title">Gear, repair kit, watch, cuprum solid</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer nulla.</p>
                <a className="btn btn-primary" href="pd6">See Product Details</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4 cardFloat ">
              <img className="card-img-top img-responsive" alt="Product " src="img///p.binocularhead.jpg" />
              <div className="card-body">
                <button className="btn btn-xs">OS-2017-<em>01</em>-1007 </button>
                &nbsp;&nbsp;<button className="btn btn-xs">Caterpillar</button>
                <h4 className="card-title">Binocular, type zoom lens, 12-85mm, 22x </h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer nulla.</p>
                <a className="btn btn-primary" href="pd7">See Product Details</a> 
              </div>
            </div>
            <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4 cardFloat ">
              <img className="card-img-top img-responsive" alt="Product" src="img/p.mbwood.jpg" />
              <div className="card-body">
                <button className="btn btn-xs">OS-2018-<em>08</em>-0099</button>
                &nbsp;&nbsp;<button className="btn btn-xs">MontBlanc</button>
                <h4 className="card-title">Pen, ink series, oakwood cured body, nos. 2231</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer nulla.</p>
                <a className="btn btn-primary" href="pd8">See Product Details</a>
              </div>
            </div>
            <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4 cardFloat ">
              <img className="card-img-top img-responsive" alt="Product" src="img/p.labset.jpg" />
              <div className="card-body">
                <button className="btn btn-xs">OS-2018-<em>01</em>-0034 </button>
                &nbsp;&nbsp;<button className="btn btn-xs">FlowServe</button>
                <h4 className="card-title">Microscope, Laboratory, five lenses, appliances</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer nulla.</p>
                <a className="btn btn-primary" href="pd9">See Product Details</a>
              </div>
            </div>
          </div> 
          {/* Budi */}
        </div>
        <br />
        
        <div className="container-fluid" />          

    <Footer/>



    </div>  /* end of opening div */

);  /* end of return */

} /* end of render */

} /* end of component */



export default Itemlist
