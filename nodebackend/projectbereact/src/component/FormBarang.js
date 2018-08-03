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

class FormBarang extends Component {
  tambahData = (e) => {
      axios.post(`http://localhost:3003/tambahData`, {
          inputSatu: e.namaproduk.value,
          inputDua: e.lengkaproduk.value,
          inputTiga: e.unitproduk.value,
          inputEmpat: e.matauang.value,
          inputLima: e.hargaproduk.value,
          inputEnam: e.kodeproduk.value, 
          inputTujuh: e.kategoriproduk.value,
          inputDelapan: e.merekproduk.value
        });
  }
 
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
            <fieldset>
                <legend>Add Product</legend>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Nama Produk</label>
                    <div className="col-lg-10">
                        <input ref="namaproduk" type="text" className="form-control" placeholder="Enter Product Name here ..." required oninvalid="this.setCustomValidity('Hello Nama Produk cannot be Blank!')" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Complete Description</label>
                    <div className="col-lg-10">
                        <textarea ref="lengkaproduk" rows="6"  className="form-control" placeholder="Enter Product Details here..." defaultValue={""} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Unit of Sale/Measure</label>
                    <div className="col-lg-10">
                        <input ref="unitproduk" rows="6"  className="form-control" placeholder="Enter Product Unit of Sale/Measure here ..."   />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Price Currency</label>
                    <div className="col-lg-10">
                        <input ref="matauang" rows="6"  className="form-control" placeholder="Enter Product Price Currency here ..." value="USD" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Price</label>
                    <div className="col-lg-10">
                        <input ref="hargaproduk" type="text" className="form-control"  placeholder="Enter Product Price here ..." required oninvalid="this.setCustomValidity('Hello Harga cannot be Blank!')"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Code/Part Number</label>
                    <div className="col-lg-10">
                        <input ref="kodeproduk" type="text" className="form-control"  placeholder="Enter Product Code/Part No. here ..." required oninvalid="this.setCustomValidity('Hello Harga cannot be Blank!')"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Category</label>
                    <div className="col-lg-10">
                        <input ref="kategoriproduk" type="text" className="form-control"  placeholder="Enter Product Category here ..." required oninvalid="this.setCustomValidity('Hello Harga cannot be Blank!')"/>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Product Brand</label>
                    <div className="col-lg-10">
                        <input ref="merekproduk" type="text" className="form-control"  placeholder="Enter Brand of Product here ..." required oninvalid="this.setCustomValidity('Hello Harga cannot be Blank!')"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default"> <i className="fas fa-eraser"></i> &nbsp; Clear</button>&nbsp;
                        
                        <Link to= "/productlist"  onClick={() => this.tambahData(this.refs)} className="btn btn-primary"> <i className="far fa-paper-plane"></i> &nbsp;Submit</Link> &nbsp;
                        <Link to= "/productlist"  className="btn btn-success"> <i className="fas fa-list-ol"></i> &nbsp;Product List</Link>

                    </div>
                </div>

            </fieldset>
        </form>
      </div>
    )
  }
}
export default connect(mapStateToProps) (FormBarang)