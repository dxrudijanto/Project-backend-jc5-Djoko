import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

class FormBarangDisp extends Component {
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
                    brandproduk: hasilDariDatabase.data[0].brand,
                    kategoriproduk: hasilDariDatabase.data[0].category,
                    PNproduk: hasilDariDatabase.data[0].part_no,
                    unitproduk: hasilDariDatabase.data[0].uom,
                    detilproduk: hasilDariDatabase.data[0].Long_desc
                })
            }
        )

    }
  
    

    displayData = (e) => {
      axios.post(`http://localhost:8002/lihatData`, {
          inputSatu: e.namaproduk.value,
          inputDua: e.hargaproduk.value
        });
  }
 
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
            <fieldset>
                <legend>Display Data</legend>
                <input ref="idproduk" type="hidden" defaultValue={this.state.idproduk}/>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Description</label>
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
                    <label className="col-lg-2 control-label">Part Number</label>
                    <div className="col-lg-10">
                        <input ref="PNproduk" type="text" disabled className="form-control" defaultValue={this.state.PNproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Unit of Measure</label>
                    <div className="col-lg-10">
                        <input ref="unitproduk" type="text" disabled className="form-control" defaultValue={this.state.unitproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Category</label>
                    <div className="col-lg-10">
                        <input ref="unitproduk" type="text" disabled className="form-control" defaultValue={this.state.kategoriproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Brand</label>
                    <div className="col-lg-10">
                        <input ref="brandproduk" type="text" disabled className="form-control" defaultValue={this.state.brandproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    {/* <label className="col-lg-2 control-label">Coba-coba</label>
                    <div className="col-lg-10">
                        <input ref="brandproduk" style={{height: 200, width: 945}} type="text" disabled  defaultValue={this.state.detilproduk} placeholder="Harga produk ..." />
                    </div> */}
                  
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Complete Description</label>
                    <div className="col-lg-10">
                        <textarea ref="detilproduk" rows="8" disabled className="form-control" placeholder="Harga produk ..." value={this.state.detilproduk}> </textarea>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                    <Link to= "/productlist"  className="btn btn-info"> <i className="fas fa-arrow-circle-left"></i> &nbsp;OK</Link>&nbsp;
                        {/* <button type="button" onClick={() => this.ubahData(this.refs)} className="btn btn-primary"> <i className="far fa-paper-plane"></i> &nbsp;Submit</button> */}
                    </div>
                </div>

            </fieldset>
        </form>
      </div>
    )
  }
}
export default FormBarangDisp