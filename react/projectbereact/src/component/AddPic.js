import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'; // untuk proteksi, library {connect} sudah methodnya

// ini store redux yang menyimpan data user yang berhasil login buat meng-access rights ke laman KOMPONEN ini //
function mapStateToProps(state){
    return {
        login: state.hasil_login
    };
}
// end of redux store //

class AddPic extends Component {
    state = {
        id: '',
        namaproduk: '',
        foto: '',
        redirect:false,
        
    }

    // Untuk memunculkan data yang di-refer of id yang dituju di database
    componentDidMount(){
        var id = this.props.location.state.produkID ;
         
        axios.get('http://localhost:3003/editdata/'+ id)
            .then ((hasilDariDatabase) => {
                // console.log(hasilDariDatabase.data);
                this.setState({
                    idproduk: hasilDariDatabase.data[0].id,
                    namaproduk: hasilDariDatabase.data[0].desc,
                    hargaproduk: hasilDariDatabase.data[0].price,
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
            detilproduk: e.detilproduk.value            
        })
    }

updateData = (e) => {
    e.preventDefault(); // spy tidak terjadi pengulangan 2x
    let formData = new FormData();
    formData.append('file', this.state.foto);   // 'file' untuk di-refer ke backend, .foto adalah dari foto: e.target.files[0] di atas
    formData.append('idproduk', this.state.idproduk);       // 'id' untuk di-refer ke backend, .id adalah dari id: e.idproduk.value di atas
    formData.append('namaproduk', this.state.namaproduk);   // 'namaproduk' untuk di-refer ke backend, .namaproduk adalah dari namaproduk: e.namaproduk.value di atas
    // formData.append('hargaproduk', this.state.hargaproduk);
    // formData.append('matauangproduk', this.state.matauangproduk);
    // formData.append('brandproduk', this.state.brandproduk);
    // formData.append('kategoriproduk', this.state.kategoriproduk);
    // formData.append('PNproduk', this.state.PNproduk);
    // formData.append('unitproduk', this.state.unitproduk);
    formData.append('detilproduk', this.state.detilproduk);

    axios.post('http://localhost:3003/tambahGambar/', formData);
    
    this.setState({redirect:true})

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

    
    if(this.state.redirect){
        return <Redirect to='/productlist'/>
    }


    return (
      <div className="container">
        <form className="form-horizontal" onSubmit={this.updateData} encType="multipart/form-data">
            <fieldset>
                <legend>Add/Edit Product Picture</legend>
                
                <input ref="idproduk" type="hidden" defaultValue={this.state.idproduk}/>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Description</label>
                    <div className="col-lg-10">
                        <input ref="namaproduk" disabled type="text"  className="form-control" defaultValue={this.state.namaproduk} placeholder="Nama produk ..."  />
                    </div>
                </div>


                <div className="form-group">
                    <label className="col-lg-2 control-label">Details of Product</label>
                    <div className="col-lg-10">
                        <textarea ref="detilproduk" rows="8" disabled className="form-control" placeholder="Harga produk ..." value={this.state.detilproduk}> </textarea>
                    </div>
                </div>


                <div className="form-group">
                    <label className="col-lg-2 control-label">Foto Produk</label>
                    <div className="col-lg-10">
                        {/* name= pasangannya dengan onChange */}
                        <input name="fotoproduk" onChange={this.onchange} type="file"  className="form-control" /> 
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
export default connect(mapStateToProps) (AddPic);