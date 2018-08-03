import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import {connect} from 'react-redux'; // untuk proteksi, library {connect} sudah methodnya

// ini store redux yang menyimpan data user yang berhasil login buat meng-access rights ke laman KOMPONEN ini //
function mapStateToProps(state){
    return {
        login: state.hasil_login
    };
}
// end of redux store //

class FormDelete extends Component {
    state = {
        id: '',
        namaproduk: '',
        harga: ''
    }

    componentDidMount(){
        var id = this.props.location.state.produkID;
        
        console.log(id)
        
        
        axios.get('http://localhost:3003/editdata/'+ id)
            .then ((hasilDariDatabase) => {
                // console.log(hasilDariDatabase.data);
                this.setState({
                    idproduk: hasilDariDatabase.data[0].id,
                    namaproduk: hasilDariDatabase.data[0].desc,
                    matauangproduk: hasilDariDatabase.data[0].curr,
                    hargaproduk: hasilDariDatabase.data[0].price,
                    detilproduk: hasilDariDatabase.data[0].Long_desc,
                    gambarproduk: hasilDariDatabase.data[0].id_pics
                })
            }
        )

    }
  
  
    hapusData  = (ev) => {
      axios.post('http://localhost:3003/hapusData', {
          idproduk: ev.idproduk.value,
          namaproduk: ev.namaproduk.value,
          hargaproduk: ev.hargaproduk.value
      })

  }


  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
            <fieldset>
                <legend>Delete Product</legend>
                <input ref="idproduk" type="hidden" defaultValue={this.state.idproduk}/>  
                {/* id dari table di database dipanggil, tapi tidak ditampikan di sini -> type="hidden" */}

                <div className="form-group">
                    <label className="col-lg-2 control-label ">Product Picture</label>
                    <div className="text-center">
                    <img src={'http://localhost:3003/tampunganFile/'+ this.state.gambarproduk} style={{width: 200}} alt='gambar produk'/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Name</label>
                    <div className="col-lg-10">
                        <input disabled ref="namaproduk" type="text" className="form-control" defaultValue={this.state.namaproduk} placeholder="Nama produk ..."  />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Price</label>
                    <div className="col-lg-10">
                        <input disabled ref="hargaproduk" type="text" className="form-control" defaultValue={this.state.hargaproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Price Currency</label>
                    <div className="col-lg-10">
                        <input disabled ref="hargaproduk" type="text" className="form-control" defaultValue={this.state.matauangproduk} placeholder="Harga produk ..." />
                    </div>
                </div>


                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Details</label>
                    <div className="col-lg-10">
                        <textarea ref="detilproduk" rows="8" disabled className="form-control" placeholder="Detil produk ..." value={this.state.detilproduk}> </textarea>
                    </div>
                </div>      

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                    <Link to= "/productlist"  className="btn btn-success"> <i className="far fa-times-circle"></i> &nbsp;Cancel</Link>&nbsp;
                    <Link to= "/productlist"  onClick={() => this.hapusData(this.refs)} className="btn btn-primary"> <i className="far fa-paper-plane"></i> &nbsp;Delete Product</Link>
                    </div>
                </div>

            </fieldset>
        </form>
      </div>
    )
  }
}
export default connect(mapStateToProps) (FormDelete)