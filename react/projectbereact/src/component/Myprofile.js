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

class myprofile extends Component {

  state = {
    id: '',
    birthday: '',
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

ubahData = (e) => {
  axios.post(`http://localhost:3003/updateuserprofile`, {
        iduser: e.iduser.value,             // iduser: yg dikirim ke backend; .iduser diambil dari ref di form bawah
        salutation: e.salutation.value, 
        // namauser: e.namauser.value,
        namalengkap: e.namalengkap.value,         // namalengkap: yg dikirim ke backend; .namalengkap diambil dari ref di form bawah
        emailuser: e.emailuser.value,
        hobby: e.hobby.value,
        bday: e.bday.value,
        city: e.city.value,
        tel_no: e.tel_no.value,
        hp_no: e.hp_no.value,
        visa: e.visa.value,
        // passworduser: e.passworduser.value,
        alamatuser: e.alamatuser.value,

    }).then((hasil) => {
      var validation = hasil.data
      if (validation === 1) {
        this.setState({
          redirect: true
        })
      }

    })

}

/////// text area bisa ubah-ubah ///////
handleChange = (event) => {
  this.setState({alamatuser: event.target.value});
}
/////// mengambil field yang sudah di ubah-ubah ///////

  render() {

    ///////// A. Fungsi Wajib Untuk Setiap Component yang perlu proteksi login //////////////
    if (cookies.get('sessionUserID') == undefined) {
      return <Redirect to='/loginuser' />
    }
    /////////// Khusus buat proteksi komponen tanpa ada logout button /////////////////////

    if (this.state.redirect) return <Redirect to='/userprofile' />

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
                        <input ref="salutation" defaultValue={this.state.salutation} className="form-control" type="text" placeholder="Mr./Ms./Mrs." ng-model="me.salutation"  />
                      </div>
                    </div> 
                    
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Full Name</label>
                      <div className="col-sm-4">
                        <input ref="namalengkap" defaultValue={this.state.namalengkap} className="form-control" type="text" placeholder="Last Name" ng-model="me.lastName"  />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Email</label>
                      <div className="col-sm-4">
                        <input ref="emailuser" defaultValue={this.state.emailuser} className="form-control" type="email" placeholder="Email" ng-model="me.email"  />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Hobby</label>
                      <div className="col-sm-4">
                        <input ref="hobby" defaultValue={this.state.hobby} className="form-control" type="text" placeholder="ex. Fishing/Basketball/Mall-visiting " ng-model="me.hobby" />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Birthday</label>
                      <div className="col-sm-4">
                        <input  defaultValue={this.state.birthday} disabled className="form-control" id="tanggal" type="text" placeholder="Start Date" ng-model="me.birthday"  />
                      </div>
                    </div>  
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Change Bday Date here</label>
                      <div className="col-sm-4">
                        <input ref="bday" defaultValue={this.state.bday} className="form-control" id="tanggal" type="date" placeholder="Start Date" ng-model="me.birthday"  />
                      </div>
                    </div>            
                    <div className="form-group">
                      <label className="col-sm-2 control-label">City of Living</label>
                      <div className="col-sm-4">
                        <input ref="city" defaultValue={this.state.city} className="form-control" type="text" placeholder="i.e. South Jakarta" ng-model="me.city"  />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Phone</label>
                      <div className="col-sm-4">
                        <input ref="tel_no" defaultValue={this.state.tel_no} className="form-control" type="text" placeholder="xxx-xxx-xxxx" ng-model="me.phone" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Cellular Phone</label>
                      <div className="col-sm-4">
                        <input ref="hp_no" defaultValue={this.state.hp_no} className="form-control" type="text" placeholder="xxx-xxx-xxxx" ng-model="me.phone" />
                      </div>
                    </div>  
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Visa Card</label>
                      <div className="col-sm-4">
                        <input ref="visa" defaultValue={this.state.visa} className="form-control" type="text" placeholder="xxx-xxx-xxxx" ng-model="me.visa" />
                      </div>
                    </div> 
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Address</label>
                      <div className="col-sm-4">
                        <textarea ref="alamatuser" value={this.state.alamatuser} onChange={this.handleChange}  className="form-control" placeholder="add complete address here" rows={5} cols={48} ng-model="me.address" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button onClick={() => this.ubahData(this.refs)}  className="btn btn-primary" ng-click="updateMe()">Update</button>
                      </div>
                    </div>
                  </form>
                </div>  {/* end form-horizontal */}
              </div> {/* end panel-body */}
              <div className="alert alert-success">
                <a className="close" aria-label="close" href="#" data-dismiss="alert">×</a>
                <strong>Success!</strong> Profile successfully saved
              </div>
              <div className="alert alert-warning">
                <a className="close" aria-label="close" href="#" data-dismiss="alert">×</a>
                <strong>Oops!</strong> Profile not saved. Try later.
              </div>
            </div> {/* end panel */}
          </div> {/* end size */}
        </div> {/* end container */}
        <div style={{position: 'absolute', top: '25%', left: '60%'}}>
          <img className="img-responsive img-circle center-block" style={{height: 300, width: 300}} src="img/(logo)youtube.png" /> <br /> <a href="#"> <figcaption> <center>Change Avatar</center> </figcaption> </a>
        </div>
      
    <Footer/>



    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default myprofile
