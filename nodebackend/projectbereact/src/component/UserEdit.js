import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

class UserEdit extends Component {
    state = {
        id: '',
        namalengkap: '',
        namauser: '',
        alamatuser: '',
    }

    componentDidMount(){
        var id = this.props.location.state.userID;
        
        console.log(id)
       
        axios.get('http://localhost:3003/userdata/'+ id)
            .then ((hasilDariDatabase) => {
                // console.log(hasilDariDatabase.data);
                this.setState({
                    iduser: hasilDariDatabase.data[0].id,
                    namalengkap: hasilDariDatabase.data[0].nama_lengkap,
                    namauser: hasilDariDatabase.data[0].username,
                    passworduser: hasilDariDatabase.data[0].password,
                    alamatuser: hasilDariDatabase.data[0].address,
                    emailuser: hasilDariDatabase.data[0].email

                    // PNproduk: hasilDariDatabase.data[0].part_no,
                    // unitproduk: hasilDariDatabase.data[0].uom,
                    // detilproduk: hasilDariDatabase.data[0].Long_desc
                })
            }
        )

    }
  
    

    ubahData = (e) => {
      axios.post(`http://localhost:3003/ubahUser`, {
            iduser: e.iduser.value,             // iduser: yg dikirim ke backend; .iduser diambil dari ref di form bawah
            namalengkap: e.namalengkap.value,         // namalengkap: yg dikirim ke backend; .namalengkap diambil dari ref di form bawah
            namauser: e.namauser.value,
            passworduser: e.passworduser.value,
            alamatuser: e.alamatuser.value,
            emailuser: e.emailuser.value,
            // PNproduk: e.PNproduk.value,
            // unitproduk: e.unitproduk.value,
            // detilproduk: e.detilproduk.value
        });
  }
 
  constructor(props) {
    super(props);
    this.state = {
      value: 'Test On-change in your text-area form', 
      alamatuser: ''
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({alamatuser: event.target.value});
  }

  render() {
      
    return (
      <div className="container">
        <form className="form-horizontal">
            <fieldset>
                <legend>Edit User Data</legend>
                <input ref="iduser" type="hidden" defaultValue={this.state.iduser}/>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Complete Name of User</label>
                    <div className="col-lg-10">
                        <input ref="namalengkap" type="text"  className="form-control" defaultValue={this.state.namalengkap} placeholder="Complete Name of User ..."  />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Username</label>
                    <div className="col-lg-10">
                        <input ref="namauser" type="text"  className="form-control" defaultValue={this.state.namauser} placeholder="Username ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Password</label>
                    <div className="col-lg-10">
                        <input ref="passworduser" type="password"  className="form-control" defaultValue={this.state.passworduser} placeholder="User Password ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Email Address</label>
                    <div className="col-lg-10">
                        <input ref="emailuser" type="text"  className="form-control" defaultValue={this.state.emailuser} placeholder="User email address ..." />
                    </div>
                </div>

                {/* <div className="form-group">
                    <label className="col-lg-2 control-label">Unit of Measure</label>
                    <div className="col-lg-10">
                        <input ref="unitproduk" type="text"  className="form-control" defaultValue={this.state.unitproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Category</label>
                    <div className="col-lg-10">
                        <input ref="kategoriproduk" type="text"  className="form-control" defaultValue={this.state.kategoriproduk} placeholder="Harga produk ..." />
                    </div>
                </div> */}

                {/* <div className="form-group">
                    <label className="col-lg-2 control-label">Brand</label>
                    <div className="col-lg-10">
                        <input ref="brandproduk" type="text"  className="form-control" defaultValue={this.state.brandproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Foto Produk</label>
                    <div className="col-lg-10">
                        <input ref="fotoproduk" type="file"  className="form-control" />
                    </div>
                </div> */}


                {/* <div className="form-group">
                    <label className="col-lg-2 control-label">Coba-coba</label>
                    <div className="col-lg-10">
                        <input ref="brandproduk" style={{height: 200, width: 945}} type="text" disabled  defaultValue={this.state.detilproduk} placeholder="Harga produk ..." />
                    </div>
                  
                </div> */}

                {/* <div className="form-group">
                    <label className="col-lg-2 control-label">Home Address</label>
                    <div className="col-lg-10">
                        <input ref="alamatuser" style={{height: 100, width: 945, wordBreak:'break-word'}} type="text"  className="form-control" placeholder="Home Address ..." defaultValue={this.state.alamatuser} /> 
                    </div>
                </div> */}

                <div className="form-group">
                    <label className="col-lg-2 control-label">Home Address</label>
                    <div className="col-lg-10">
                        <textarea rows="5" ref="alamatuser" type="text"  className="form-control" placeholder="Home Address ..." value={this.state.alamatuser} onChange={this.handleChange}/> 
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Home Address Details View</label>
                    <div className="col-lg-10">
                        <textarea  rows="8" disabled className="form-control" placeholder="Home Address ..." value={this.state.alamatuser}/> 
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                    <Link to= "/userlist"  className="btn btn-info"> <i className="fas fa-arrow-circle-left"></i> &nbsp;Cancel</Link>&nbsp;
                        <Link to= "/userlist" type="button" onClick={() => this.ubahData(this.refs)} className="btn btn-warning"> <i className="far fa-paper-plane"></i> &nbsp;Submit</Link>
                    </div>
                </div>

            </fieldset>

        </form>
        
      </div>
      
    )
  }
}
export default UserEdit