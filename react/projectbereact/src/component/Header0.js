import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

class Header0 extends Component {

  render() {

    return (

      <div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 bgw0">
          <div className="Tlogo0">  <img width={45} height={45} src="img/(logo)linkedin.png" /> </div>
          <div className="navH0">
            <ul>
              <li className="nav1"> <a href="LoginUser">&nbsp; Login &nbsp;</a></li>
              <li className="nav1"> <a href="Admh0">&nbsp; Admin &nbsp;</a></li>
              <li className="nav1"> <a href>&nbsp; About Us &nbsp;</a></li>
            </ul>    
          </div> <br />
          <div className="sml">  <br /> Unlock Experience</div>
        </div>
   
      </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */

export default Header0;