import React, { Component } from 'react'; /* by default */
import '../App.css'; /* by default */
import {Link} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */
import Axios from 'axios';
import {Redirect} from 'react-router-dom'; // untuk fungsi redirect setelah suatu kondisi tertentu
import {connect} from 'react-redux'; // untuk proteksi, library {connect} sudah methodnya

// //// ini store redux yang menyimpan data user yang berhasil login buat meng-access rights ke laman KOMPONEN ini //
// function mapStateToProps(state){
//   return {
//       login: state.hasil_login
//   };
// }
// //// end of redux store //

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

        reginputtel_no: obj.tel_no.value,
        reginputhp_no: obj.hp_no.value,
        
        reginputpassword: obj.password.value,
        reginputnamalengkap: obj.namalengkap.value,
        reginputalamat: obj.alamat.value,

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
              <div className="col-md-8 col-md-offset-2">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong>Register Here / Create New User</strong>
                    <figure className="pull-right">
                      <Link to="/userlist"> <img src="img/(logo)linkedin.png" height={25} width={25} className=" img-circle" style={{margin: 0}} /> </Link>
                    </figure>
                  </div>
                  <div className="panel-body">
                    <form className="form-horizontal" role="form">
                      <div className="form-group">
                        <label htmlFor="inputUsername3" className="col-sm-3 control-label">
                          Username</label>
                        <div className="col-sm-9">
                          <input type="text" ref="nama" className="form-control" id="inputNama3" placeholder="enter desired username here" required />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="inputCompName3" className="col-sm-3 control-label">
                          Complete Name</label>
                        <div className="col-sm-9">
                          <input type="text" ref="namalengkap" className="form-control" id="inputNama3" placeholder="enter your complete name here" required />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputCompName3" className="col-sm-3 control-label">
                          Telephone Number</label>
                        <div className="col-sm-9">
                          <input type="text" ref="tel_no" className="form-control" id="inputNama3" placeholder="enter your telephone here" required />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputCompName3" className="col-sm-3 control-label">
                          Cellular Number</label>
                        <div className="col-sm-9">
                          <input type="text" ref="hp_no" className="form-control" id="inputNama3" placeholder="enter your handphone here" required />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputAddress" className="col-sm-3 control-label">
                          Home Address</label>
                        <div className="col-sm-9">
                          {/* <input type="text" ref="alamat" className="form-control" id="inputNama3" placeholder="enter your complete name here" required /> */}
                          <textarea ref="alamat" rows="3"  className="form-control" placeholder="enter your complete address..." defaultValue={""} required/>
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
                        <div className="col-sm-offset-4 col-sm-2 text-center">
                          <Link to= "/loginuser"  className="btn btn-primary btn-sm" onClick={() => this.kirim(this.refs)} >
                            Register</Link> 
                        </div>&nbsp;
                        <div className="col-sm-offset-1 col-sm-2 text-center">
                        <button className="btn btn-default btn-sm" type="reset">
                              Reset
                        </button> 
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



// export default connect(mapStateToProps) (RegisterUser)
export default RegisterUser
