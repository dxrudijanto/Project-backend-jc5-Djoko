import React, { Component } from 'react'; /* by default */
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */
import Axios from 'axios';


class RegisterUser extends Component {

  state={
    masuk : ""
  }

  kirim(obj){
    var self = this
    Axios.post('http://localhost:3003/regis',
      {
        reginputnama: obj.nama.value,
        reginputemail: obj.email.value,
        reginputpassword: obj.password.value

      }).then(function(Response){
              // console.log(Response.data);
        self.setState({masuk: Response.data})
        
      });
      console.log(self.state.masuk);
      //console.log(obj.nama.value);
      
  }

  render() {

    return (

    <div>
 
      <div id="registerpage">

        <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>Register Here</strong>
                    <figure className="pull-right">
                      <a href="/">
                        <img src="img/(logo)linkedin.png" height={25} width={25} className=" img-circle" style={{margin: 0}} />
                      </a>
                    </figure>
                  </div>
                  <div className="panel-body">
                    <form className="form-horizontal" role="form">
                      <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-3 control-label">
                          Username</label>
                        <div className="col-sm-9">
                          <input type="text" ref="nama" className="form-control" id="inputNama3" placeholder="enter desired username here" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-3 control-label">
                          Email</label>
                        <div className="col-sm-9">
                          <input type="email" ref="email" className="form-control" id="inputEmail3" placeholder="Email" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-3 control-label">
                          Password</label>
                        <div className="col-sm-9">
                          <input type="password" ref="password" className="form-control" id="inputPassword3" placeholder="Password" required />
                        </div>
                      </div>
                      <div className="form-group last">
                        <div className="col-sm-offset-1 col-sm-11 text-center">
                          <button  className="btn btn-primary btn-sm" onClick={() => this.kirim(this.refs)} >
                            Register</button> 
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="panel-footer">
                    Have an Account? <a href="/loginuser">Login here</a>  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 style={{color: 'white'}}>{this.state.masuk}</h1>
          
      </div> 

    </div>  /* end of opening div */

);  /* end of return */

} /* end of render */

} /* end of component */



export default RegisterUser
