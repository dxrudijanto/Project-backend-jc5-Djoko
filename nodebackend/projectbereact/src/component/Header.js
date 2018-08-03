import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

class Header extends Component {

  render() {

    return (

      <div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 bgw">
            <div className="sml">  <br /><br /><br /><br /><br /><br /><br /><br />    Welcome, Rudy &nbsp;&nbsp;&nbsp;</div>
            <div className="Tlogo">  <img width={45} height={45} src="img/(logo)linkedin.png" /> </div>
            <div className="navH">
            <ul>
                <li className="nav1"> <a href="myprofile">&nbsp; My Profile &nbsp;</a></li>
                <li className="nav1"> <a href="myinvoice">&nbsp; Invoice &nbsp;</a></li>
                <li className="nav1"> <a href="mycart">&nbsp; My Cart &nbsp;</a></li>
                <li className="nav1"> <a href="Itemlist">&nbsp; Product List &nbsp;</a></li>
            </ul>    
            </div>
        </div>
    );
  }
});
   
      </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */

export default Header;