import React, { Component } from 'react'; /* by default */
// import Navbar from './Navbar';
// import Footer from './Footer';
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */
import Axios from 'axios';
import {Redirect} from 'react-router-dom';



class LoginUser extends Component {

  // state={
  //   masuk : ""
  // }

  // kirim(obj){
  //   var self = this
  //   Axios.post('http://localhost:3030/login',
  //     {
  //       cobainputnama: obj.nama.value,
  //       cobainputpassword: obj.password.value

  //     }).then(function(Response){
  //             // console.log(Response.data);
  //       self.setState({masuk: Response.data})
        
  //     });
  //     console.log(self.state.masuk);
  //     //console.log(obj.nama.value);
      
  // }

  state = 
  {
    status: <br/>,
    masuklaman: false

  }

 kirim(obj){
    //var self = this
    Axios.post('http://localhost:3003/loginUser',
      {
        loginputnama: obj.nama.value,
        loginputpassword: obj.password.value

      }).then((response) => {
              // console.log(Response.data);
        //self.setState({masuk: Response.data})
        var validasilogin = response.data;
        if (validasilogin === 1)
        {
          console.log(validasilogin);
          this.setState({
            masuklaman: true
          })
        }
        else if (validasilogin === 0)
        {
          console.log(validasilogin);
          this.setState({
            status: 'Username dan/atau password anda salah'
          })
        }
      });
      //console.log(self.state.masuk);
      //console.log(obj.nama.value);
      
  }

  passedRedirect = () => {
    if (this.state.masuklaman) {
      return <Redirect to='/itemList'/>
    }
  }


  render() {

    return (

    <div>
 
 <div id="loginpage">
        <div className="container">
        {/* berikut ini meredirect ke laman /productlist bilamana hasil validasilogin benar (masuklaman : true) */}
        {this.passedRedirect()}
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <strong>Login</strong>
                  <figure className="pull-right">
                    <a href="/">
                      <img src="img/(logo)linkedin.png" height={25} width={25} className=" img-circle" style={{margin: 0}} />
                    </a>
                  </figure>
                </div>
                <div className="panel-body">
                  <form className="form-horizontal" role="form">
                    <div className="form-group">
                      <label htmlFor="inputName3" className="col-sm-3 control-label">
                        Username</label>
                      <div className="col-sm-9">
                        <input type="text" ref="nama" className="form-control" id="inputNama3" placeholder="Username" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPassword3" className="col-sm-3 control-label">
                        Password</label>
                      <div className="col-sm-9">
                        <input type="password" ref="password" className="form-control" id="inputPassword3" placeholder="Password" required />
                        {/* berikut ini mengirim pesan login salah */}
                        <br/> <span style={{color: 'red'}}> {this.state.status} </span>
                      </div> 
                      
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-3 col-sm-9">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" />
                            Remember me
                          </label> 
                          
                        </div>
                      </div>
                    </div>
                    <div className="form-group last">
                      <div className="col-sm-offset-1 col-sm-11 text-center">
                        <button type='button' className="btn btn-success btn-sm" onClick={() => this.kirim(this.refs)} >
                          Sign in</button> &nbsp;
                        <button type="reset" className="btn btn-default btn-sm">
                          Reset</button> &nbsp;
                        <button type="forgot" className="btn btn-warning btn-sm">
                          Forgot My Password</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="panel-footer">
                  Not Registered? <a href="/reguser">Register here</a> <a href="/"><i className="fas fa-lock-open pull-right" /></a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>  /* end of opening div */

);  /* end of return */

} /* end of render */

} /* end of component */



export default LoginUser
