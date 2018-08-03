import React, { Component } from 'react'; /* by default */
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */
import Axios from 'axios';
import {Redirect} from 'react-router-dom'; // untuk fungsi redirect setelah suatu kondisi tertentu
import {connect} from 'react-redux'; // untuk proteksi, library {connect} sudah methodnya
import Cookies from 'universal-cookie'

////// Cookies

const cookies = new Cookies();

/////


////// ini store redux yang menyimpan data user yang berhasil login buat access rights ke laman KOMPONEN selanjutnya  /////////
function mapStateToProps(state){
  return {
    login: state.hasil_login
  };
}
// end of redux function //

class Admlogin extends Component {

  state = 
  {
    status: <br/>,
    masuklaman: false,
    validasilogin: ''
  }

  kirim(obj){
    var self = this
    Axios.post('http://localhost:3003/loginAdmin',
      {
        loginputnama: obj.nama.value,
        loginputpassword: obj.password.value

      }).then((response) => {
                     
        var validasilogin = response.data;

        if (validasilogin !== 0) {
          cookies.set('sessionID', validasilogin, { path: '/' });

          self.setState({
                masuklaman: true
              })
        }

        else {
            self.setState({
            status: 'Login failed: Un-authorized access, not an Admin !!'
          })
        }

        console.log(validasilogin);
        
        
      });
    }


// Cara Ade dengan redux ////

  // state = 
  // {
  //   status: <br/>,
  //   masuklaman: false,
  //   validasilogin: ''

  // }

//  kirim(obj){
//     var self = this
//     Axios.post('http://localhost:3003/loginAdmin',
//       {
//         loginputnama: obj.nama.value,
//         loginputpassword: obj.password.value

//       }).then((response) => {
                     
//         var validasilogin = response.data;
//         self.props.dispatch({type:'Login', kirim: validasilogin})
//         self.setState({
//               masuklaman: true
//             })
        
//       });
//     }
// // Cara Redux //


  render() {
    if (this.state.masuklaman) {
          return <Redirect to='/productlist'/>
        }

    return (

    <div>
 <div id="admloginpage">
      <div className="container">
      {/* berikut ini meredirect ke laman /productlist bilamana hasil validasilogin benar (masuklaman : true) */}
      {/* {this.passedRedirect()} */}
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="panel panel-danger">
                    <div className="panel-heading">
                      <strong>Admin Login</strong>
                      <figure className="pull-right">
                        <a href="/">
                          <img width={25} height={25} className=" img-circle" style={{margin: 0}} src="img/(logo)linkedin.png" />
                        </a>
                      </figure>
                    </div>
                    <div className="panel-body">
                      <form className="form-horizontal" role="form">
                        <div className="form-group">
                          <label className="col-sm-3 control-label" htmlFor="inputName3">
                            Username</label>
                          <div className="col-sm-9">
                            <input className="form-control" ref="nama" id="inputNama3" required type="text" placeholder="Username" />
                          </div> &nbsp;
                        </div>
                        <div className="form-group">
                          <label className="col-sm-3 control-label" htmlFor="inputPassword3">
                            Password</label>
                          <div className="col-sm-9">
                            <input className="form-control" ref="password" id="inputPassword3" required type="password" placeholder="Password" />
                          {/* berikut ini mengirim pesan login salah/bukan status "Admin_User" */}
                          <br/> <span style={{color: 'red'}}> {this.state.status} </span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-offset-1 col-sm-12">
                            {/* <div className="checkbox"> */}
                              {/* <label>
                                              <input type="checkbox">
                                              Remember me
                                          </label> */}
                                          <span style={{color: 'red'}}>{this.props.login}</span>
                            {/* </div> */}
                          </div> &nbsp;
                        </div>
                        <div className="form-group last">
                          <div className="col-sm-offset-1 col-sm-11 text-center">
                            <button className="btn btn-danger btn-sm" type="button" onClick={() => this.kirim(this.refs)} >
                              Login</button> &nbsp;
                            <button className="btn btn-default btn-sm" type="reset">
                              Reset</button> &nbsp;
                            <button className="btn btn-warning btn-sm" type="forgot">
                              Forgot My Password</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="panel-footer text-center">
                      Welcome Admin
                      {/* Not Registered? <a href="#">Register here</a></div> */}
                      <a href="/"><i className="fas fa-lock-open pull-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>   
            </div>   

    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default connect (mapStateToProps)(Admlogin);
