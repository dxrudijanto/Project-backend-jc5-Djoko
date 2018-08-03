import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class Admh extends Component {

  render() {

    return (

    <div>
 
      {/* Header 1 */}
        <div id="admH">
        <nav className="navbar navbar-custom navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand  TLogo1" href="Home">  <img width={35} src="img/(logo)linkedin.png" /> </a>
              <button className="navbar-toggle collapsed" data-target="#ddlist" data-toggle="collapse">
                {/* <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span> */}
                <i className="fas fa-bars" style={{color: 'white', fontSize: 18}} />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="ddlist">
              <ul className="nav navbar-nav navT">
                <li className="nav2 active"><a href="#">Home</a></li>
                <li className="nav2"><a href="AdminvList">Invoices List</a></li>
                <li className="nav2"><a href="AdmMC">Maintain Category</a></li>
                <li className="nav2"><a href="AdmMP">Maintain Product</a></li>
              </ul>
              <a href="myprofile.html">
                <figure className="navbar-right">
                  <img width={25} height={25} className=" img-circle" style={{margin: '14 10 0 0'}} src="img/(logo)youtube.png" />
                </figure>
              </a>
              <b className="navbar-right" style={{margin: '21 5 0 0', color: 'white', fontSize: 10}}> Admin </b>
              <button className="btn btn-primary navbar-btn navbar-right" style={{margin: 10}}>
                Notifications <span className="badge">3</span>
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
        {/* Admin Dashboard */}
        <div className="container-fluid" style={{marginTop: 100, padding: '0 10%'}}>
          <div className="card text-white bg-primary mb-3 col-md-2" style={{maxWidth: '18rem'}}>
            <div className="card-header" style={{margin: '20 Auto 0'}}>Customer</div> <hr />
            <div className="card-body">
              <h1 className="card-title">3</h1>
              <p className="card-text">Active</p>
            </div> <hr />
            <div className="card-footer" style={{margin: '0 Auto 10'}}>10 Inactive</div>
          </div>
          <div className="card text-white bg-primary mb-3 col-md-2" style={{maxWidth: '18rem'}}>
            <div className="card-header" style={{margin: '20 Auto 0'}}>Merchants</div> <hr />
            <div className="card-body">
              <h1 className="card-title">5</h1>
              <p className="card-text">20 Inactive</p>
            </div> <hr />
            <div className="card-footer" style={{margin: '0 Auto 10'}}>20 Inactive</div>
          </div>
          <div className="card text-white bg-primary mb-3 col-md-2" style={{maxWidth: '18rem'}}>
            <div className="card-header" style={{margin: '20 Auto 0'}}>Category</div> <hr />
            <div className="card-body">
              <h1 className="card-title">7</h1>
              <p className="card-text">Active</p>
            </div> <hr />
            <div className="card-footer" style={{margin: '0 Auto 10'}}>No Issues</div>
          </div>
          <div className="card text-white bg-primary mb-3 col-md-2" style={{maxWidth: '18rem'}}>
            <div className="card-header" style={{margin: '20 Auto 0'}}>Products</div> <hr />
            <div className="card-body">
              <h1 className="card-title">9</h1>
              <p className="card-text">Active</p>
            </div> <hr />
            <div className="card-footer" style={{margin: '0 Auto 10'}}>2 New</div>
          </div>
          <div className="card text-white bg-primary mb-3 col-md-2" style={{maxWidth: '18rem'}}>
            <div className="card-header" style={{margin: '20 Auto 0'}}>Invoices</div> <hr />
            <div className="card-body">
              <h1 className="card-title">2</h1>
              <p className="card-text">Pending</p>
            </div> <hr />
            <div className="card-footer" style={{margin: '0 Auto 10'}}>1 Overdue</div>
          </div>
          <div className="card text-white bg-primary mb-3 col-md-2" style={{maxWidth: '18rem'}}>
            <div className="card-header" style={{margin: '20 Auto 0'}}>Visited</div> <hr />
            <div className="card-body">
              <h1 className="card-title">100</h1>
              <p className="card-text">Times</p>
            </div> <hr />
            <div className="card-footer" style={{margin: '0 Auto 10'}}>5 Transactions</div>
          </div>
        </div>    
        </div>

    </div>  /* end of opening div */

);  /* end of return */

} /* end of render */

} /* end of component */



export default Admh
