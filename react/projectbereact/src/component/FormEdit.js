import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

class FormEdit extends Component {
    state = {
        id: '',
        namaproduk: '',
        hargaproduk: '',
        foto: ''
    }

    // Untuk memunculkan data yang di-refer of id yang dituju di database
    componentDidMount(){
        var id = this.props.location.state.produkID;
         
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

// ini di-assign ke input file, jika terjadi perubahan, maka akan dijalankan fungsi "onchange"
onchange = (e) => {
    switch(e.target.name){   // name adalah attribut 
        case 'fotoproduk':   // name=produk
            this.setState({
                foto: e.target.files[0],
            });
            break;
        }
    }
    
value = (e) => {
    this.setState({
            idproduk: e.idproduk.value,
            namaproduk: e.namaproduk.value,
            hargaproduk: e.hargaproduk.value,
            matauangproduk: e.matauangproduk.value,
            brandproduk: e.brandproduk.value,
            kategoriproduk: e.kategoriproduk.value,
            PNproduk: e.PNproduk.value,
            unitproduk: e.unitproduk.value,
            detilproduk: e.detilproduk.value            
        })
    }

upbahData = (e) => {
    e.preventDefault(); // spy tidak terjadi pengulangan 2x
    let formData = new FormData();
    formData.append('file', this.state.foto);   // 'file' untuk di-refer ke backend, .foto adalah dari foto: e.target.files[0] di atas
    formData.append('idproduk', this.state.idproduk);       // 'id' untuk di-refer ke backend, .id adalah dari id: e.idproduk.value di atas
    formData.append('namaproduk', this.state.namaproduk);   // 'namaproduk' untuk di-refer ke backend, .namaproduk adalah dari namaproduk: e.namaproduk.value di atas
    formData.append('hargaproduk', this.state.hargaproduk);
    formData.append('matauangproduk', this.state.matauangproduk);
    formData.append('brandproduk', this.state.brandproduk);
    formData.append('kategoriproduk', this.state.kategoriproduk);
    formData.append('PNproduk', this.state.PNproduk);
    formData.append('unitproduk', this.state.unitproduk);
    formData.append('detilproduk', this.state.detilproduk);

    axios.post('http://localhost:3003/ubahData/', formData);
    }

//     ubahData = (e) => {
//       axios.post(`http://localhost:3003/ubahData`, {
//             idproduk: e.idproduk.value,             // idproduk: yg dikirim ke backend; .idproduk diambil dari ref di form bawah
//             namaproduk: e.namaproduk.value,         // namaproduk: yg dikirim ke backend; .namaproduk diambil dari ref di form bawah
//             hargaproduk: e.hargaproduk.value,
//             matauangproduk: e.matauangproduk.value,
//             brandproduk: e.brandproduk.value,
//             kategoriproduk: e.kategoriproduk.value,
//             PNproduk: e.PNproduk.value,
//             unitproduk: e.unitproduk.value,
//             detilproduk: e.detilproduk.value
//         });
//   }
 
  render() {
    return (
      <div className="container">
        <form className="form-horizontal" onSubmit={this.updateData} encType="multipart/form-data">
            <fieldset>
                <legend>Edit Data</legend>
                <input ref="idproduk" type="hidden" defaultValue={this.state.idproduk}/>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Description</label>
                    <div className="col-lg-10">
                        <input ref="namaproduk" type="text"  className="form-control" defaultValue={this.state.namaproduk} placeholder="Nama produk ..."  />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Currency</label>
                    <div className="col-lg-10">
                        <input ref="matauangproduk" type="text"  className="form-control" defaultValue={this.state.matauangproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Price</label>
                    <div className="col-lg-10">
                        <input ref="hargaproduk" type="number"  className="form-control" defaultValue={this.state.hargaproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Part Number</label>
                    <div className="col-lg-10">
                        <input ref="PNproduk" type="text"  className="form-control" defaultValue={this.state.PNproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
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
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Brand</label>
                    <div className="col-lg-10">
                        <input ref="brandproduk" type="text"  className="form-control" defaultValue={this.state.brandproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Foto Produk</label>
                    <div className="col-lg-10">
                        {/* name= pasangannya dengan onChange */}
                        <input name="fotoproduk" onChange={this.onchange} type="file"  className="form-control" /> 
                    </div>
                </div>


                {/* <div className="form-group">
                    <label className="col-lg-2 control-label">Coba-coba</label>
                    <div className="col-lg-10">
                        <input ref="brandproduk" style={{height: 200, width: 945}} type="text" disabled  defaultValue={this.state.detilproduk} placeholder="Harga produk ..." />
                    </div>
                  
                </div> */}

                <div className="form-group">
                    <label className="col-lg-2 control-label">Complete Description</label>
                    <div className="col-lg-10">
                        <textarea ref="detilproduk" rows="6"  className="form-control" placeholder="Harga produk ..." > Paste and Edit Here </textarea>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Copy Details From Here</label>
                    <div className="col-lg-10">
                        <textarea  rows="8" disabled className="form-control" placeholder="Harga produk ..." value={this.state.detilproduk}> </textarea>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                    <Link to= "/productlist" type="reset" className="btn btn-info"> <i className="fas fa-arrow-circle-left"></i> &nbsp;Cancel</Link>&nbsp;
                    <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-warning"> <i className="far fa-paper-plane"></i> &nbsp;Submit</button>
                        
                        {/* <button type="button" onClick={() => this.ubahData(this.refs)} className="btn btn-warning"> <i className="far fa-paper-plane"></i> &nbsp;Submit</button> */}
                    </div>
                </div>

            </fieldset>
        </form>
      </div>
    )
  }
}
export default FormEdit