import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link, Redirect} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */
import axios from 'axios'
/////////// A. Cookies  ///////////////////
import Cookies from 'universal-cookie'

/////////// A. Cookies  ///////////////////

    const cookies = new Cookies();

///////////Cookies-end///////////////////

class MyProfileDisp extends Component {

  state = {
    id: '',
    namalengkap: '',
    namauser: '',
    alamatuser: '',
    datauser: [],
    redirect: false
}

componentDidMount(){
  var idUser = cookies.get('sessionUserID')
  console.log(idUser)

  axios.post(`http://localhost:3003/showuserprofile`, {
      user_id: idUser
  })
  .then(
      /** Disini fungsi */
      (ambilData) => {
          console.log(ambilData.data);
          this.setState({
            iduser: ambilData.data[0].id,
            salutation: ambilData.data[0].salutation,
            namauser: ambilData.data[0].username,
            namalengkap: ambilData.data[0].nama_lengkap,
            emailuser: ambilData.data[0].email,
            hobby: ambilData.data[0].hobby,
            bday: ambilData.data[0].bday,
            city: ambilData.data[0].city,
            tel_no: ambilData.data[0].tel_no,
            hp_no: ambilData.data[0].hp_no,
            visa: ambilData.data[0].visa,
            alamatuser: ambilData.data[0].address,
        })
        var abc = this.state.bday
        this.setState({birthday : abc.substr(0,10)})
      }
  )
}

  render() {

    ///////// A. Fungsi Wajib Untuk Setiap Component yang perlu proteksi login //////////////
    if (cookies.get('sessionUserID') == undefined) {
      return <Redirect to='/loginuser' />
    }
    /////////// Khusus buat proteksi komponen tanpa ada logout button /////////////////////

    return (

    <div>
 
    <Navbar />

      {/* Area My Profile */}
      <div className="container" style={{marginBottom: 70, marginTop: 50}}>
          <div className=".col-xs-4 .col-md-offset-2">
            <div className="panel panel-default panel-info Profile">
              <div className="panel-heading"> My Profile </div>
              <div className="panel-body">
                <div className="form-horizontal">
                  <form>
                  <input ref="iduser" type="hidden" defaultValue={this.state.iduser}/>
                                        
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Salutation</label>
                      <div className="col-sm-4">
                        <input ref="salutation" disabled defaultValue={this.state.salutation} className="form-control" type="text" placeholder="Mr./Ms./Mrs." ng-model="me.salutation"  />
                      </div>
                    </div> 
                    
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Full Name</label>
                      <div className="col-sm-4">
                        <input ref="namalengkap" disabled defaultValue={this.state.namalengkap} className="form-control" type="text" placeholder="Last Name" ng-model="me.lastName"  />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Email</label>
                      <div className="col-sm-4">
                        <input ref="emailuser" disabled defaultValue={this.state.emailuser} className="form-control" type="email" placeholder="Email" ng-model="me.email"  />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Hobby</label>
                      <div className="col-sm-4">
                        <input ref="hobby" disabled defaultValue={this.state.hobby} className="form-control" type="text" placeholder="ex. Fishing/Basketball/Mall-visiting " ng-model="me.hobby" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Birthday</label>
                      <div className="col-sm-4">
                        <input ref="bday" disabled defaultValue={this.state.birthday} className="form-control" id="tanggal" type="text" placeholder="Start Date" ng-model="me.birthday"  />
                      </div>
                    </div>            
                    <div className="form-group">
                      <label className="col-sm-2 control-label">City of Living</label>
                      <div className="col-sm-4">
                        <input ref="city" disabled defaultValue={this.state.city} className="form-control" type="text" placeholder="i.e. South Jakarta" ng-model="me.city"  />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Phone</label>
                      <div className="col-sm-4">
                        <input ref="tel_no" disabled defaultValue={this.state.tel_no} className="form-control" type="text" placeholder="xxx-xxx-xxxx" ng-model="me.phone" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Cellular Phone</label>
                      <div className="col-sm-4">
                        <input ref="hp_no" disabled defaultValue={this.state.hp_no} className="form-control" type="text" placeholder="xxx-xxx-xxxx" ng-model="me.phone" />
                      </div>
                    </div>  
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Visa Card</label>
                      <div className="col-sm-4">
                        <input ref="visa" disabled defaultValue={this.state.visa} className="form-control" type="text" placeholder="xxx-xxx-xxxx" ng-model="me.visa" />
                      </div>
                    </div> 
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Address</label>
                      <div className="col-sm-4">
                        <textarea ref="alamatuser" disabled value={this.state.alamatuser} onChange={this.handleChange}  className="form-control" placeholder="add complete address here" rows={5} cols={48} ng-model="me.address" />
                      </div>
                    </div>

                  </form>
                </div>  {/* end form-horizontal */}
              </div> {/* end panel-body */}


            </div> {/* end panel */}
          </div> {/* end size */}
        </div> {/* end container */}
        <div style={{position: 'absolute', top: '25%', left: '60%'}}>
          <img className="img-responsive img-circle center-block" style={{height: 300, width: 300}} src="img/(logo)youtube.png" /> <br /> 
          <a href="#"> <figcaption> <center><Link to="/userprofile">Change Profile</Link></center> </figcaption> </a>
          
        </div>
      
    <Footer/>



    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default MyProfileDisp
