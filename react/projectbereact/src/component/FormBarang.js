import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

class FormBarang extends Component {
  tambahData = (e) => {
      axios.post(`http://localhost:8002/tambahData`, {
          inputSatu: e.namaproduk.value,
          inputDua: e.hargaproduk.value
        });
  }
 
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
            <fieldset>
                <legend>Tambah Data</legend>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Nama Produk</label>
                    <div className="col-lg-10">
                        <input ref="namaproduk" type="text" className="form-control" placeholder="Nama produk ..." required oninvalid="this.setCustomValidity('Hello Nama Produk cannot be Blank!')" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Harga</label>
                    <div className="col-lg-10">
                        <input ref="hargaproduk" type="text" className="form-control"  placeholder="Harga produk ..." required oninvalid="this.setCustomValidity('Hello Harga cannot be Blank!')"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                        
                        <Link to= "/"  onClick={() => this.tambahData(this.refs)} className="btn btn-primary"> <i className="far fa-paper-plane"></i> &nbsp;Submit</Link>
                    </div>
                </div>

            </fieldset>
        </form>
      </div>
    )
  }
}
export default FormBarang