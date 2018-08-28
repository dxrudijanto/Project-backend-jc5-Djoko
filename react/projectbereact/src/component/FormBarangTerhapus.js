import React, { Component } from 'react';
import axios from 'axios';
import NavbarYeti from './NavbarYeti'; 
import {Link, Route} from 'react-router-dom';
import {connect} from 'react-redux'; // untuk proteksi, library {connect} sudah methodnya

// ini store redux yang menyimpan data user yang berhasil login buat meng-access rights ke laman KOMPONEN ini //
function mapStateToProps(state){
    return {
        login: state.hasil_login
    };
}
// end of redux store //

class FormEdit extends Component {
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
                    hargaproduk: hasilDariDatabase.data[0].price,
                    matauangproduk: hasilDariDatabase.data[0].curr,
                    detilproduk: hasilDariDatabase.data[0].Long_desc,
                    gambarproduk: hasilDariDatabase.data[0].id_pics
                })
            }
        )

    }
  
  
    kembaliData  = (ev) => {
      axios.post('http://localhost:3003/balikinData', {
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
                <legend>Return Deleted Product</legend>
                <input ref="idproduk" type="hidden" defaultValue={this.state.idproduk}/>
                
                <div className="form-group">
                    <label className="col-lg-2 control-label ">Product Picture</label>
                    <div className="text-center">
                    <img src={'http://localhost:3003/tampunganFile/'+ this.state.gambarproduk} style={{width: 200}} alt='gambar produk'/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Description</label>
                    <div className="col-lg-10">
                        <input ref="namaproduk" type="text" disabled className="form-control" defaultValue={this.state.namaproduk} placeholder="Nama produk ..."  />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Currency</label>
                    <div className="col-lg-10">
                        <input ref="hargaproduk" type="text" disabled className="form-control" defaultValue={this.state.matauangproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Price</label>
                    <div className="col-lg-10">
                        <input ref="hargaproduk" type="text" disabled className="form-control" defaultValue={this.state.hargaproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Complete Product Description</label>
                    <div className="col-lg-10">
                        <textarea ref="detilproduk" rows="8" disabled className="form-control" placeholder="product detail ..." value={this.state.detilproduk}> </textarea>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                    <Link to= "/deletedproductlist"  className="btn btn-info"> <i className="far fa-times-circle"></i> &nbsp;Cancel</Link>&nbsp;
                        <Link to= "/deletedproductlist" onClick={() => this.kembaliData(this.refs)} className="btn btn-warning"> <i className="fas fa-recycle"></i> &nbsp;Return Data</Link>&nbsp;
                        <Link to= "/productlist"  className="btn btn-success"> <i className="fas fa-list-ol"></i> &nbsp;Product List</Link>
                    </div>
                </div>

            </fieldset>
        </form>
      </div>
    )
  }
}
export default connect(mapStateToProps) (FormEdit)