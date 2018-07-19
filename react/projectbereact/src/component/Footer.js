import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

class Footer extends Component {

  render() {

    return (

      <div>

        <footer style={{marginTop: 30}}>   
            <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 imgicon">
                <img width={50} height={50} className="img-responsive" style={{backgroundColor: 'white'}} src="img/(logo)fb.png" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 imgicon">
                <img width={50} height={50} className="img-responsive" src="img/(logo)youtube.png" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 imgicon ">
                <img width={50} height={50} className="img-responsive" src="img/(logo)twitter.png" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 imgicon">
                <img width={50} height={50} className="img-responsive" style={{backgroundColor: 'white'}} src="img/(logo)g+.png" />
            </div>
            </div>
        </footer>
   
      </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */

export default Footer;
