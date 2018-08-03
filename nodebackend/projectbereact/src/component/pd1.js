import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */



class pd1 extends Component {

  render() {

    return (

    <div>
 

    <Navbar />

      <div className="container">
        <div className="col-lg-12 gp">
          <img width="50%" height="50%" className="img-responsive img-rounded center-block" alt="New Product1" src="img/p.antoldwatch.jpg" />
          <h3>Gold Watch, Balenciaga Style  </h3> <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.In porttitor. Donec laoreet nonummy augue.
          Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla.
          <div className="navH">
            <ul style={{marginRight: 35}}>
              <li className="gpt"> &nbsp;&nbsp;&nbsp; OS-2018-01-0056  &nbsp;&nbsp;&nbsp;</li>
              <li className="gpt"> &nbsp;&nbsp;&nbsp;    USD 85.50     &nbsp;&nbsp;&nbsp;</li>
              <li className="gpt"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Each    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
              <a href="#"> <button className="btn btn-danger">AddToCart</button> </a>
            </ul>    
          </div>
        </div>
      </div>    

    <Footer/>



    </div>  /* end of opening div */

);  /* end of return */

} /* end of render */

} /* end of component */



export default pd1
