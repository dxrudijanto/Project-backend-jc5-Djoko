import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

class FormDelete extends Component {
    state = {
        id: '',
        namaproduk: '',
        harga: ''
    }

    componentDidMount(){
        var id = this.props.location.state.produkID;
        
        console.log(id)
        
        
        axios.get('http://localhost:8002/editdata/'+ id)
            .then ((hasilDariDatabase) => {
                // console.log(hasilDariDatabase.data);
                this.setState({
                    idproduk: hasilDariDatabase.data[0].id,
                    namaproduk: hasilDariDatabase.data[0].mobil,
                    hargaproduk: hasilDariDatabase.data[0].harga
                })
            }
        )

    }
  
  
    hapusData  = (ev) => {
      axios.post('http://localhost:8002/hapusData', {
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
                <legend>Hapus Data</legend>
                <input ref="idproduk" type="hidden" defaultValue={this.state.idproduk}/>  
                {/* id dari table di database dipanggil, tapi tidak ditampikan di sini -> type="hidden" */}
                <div className="form-group">
                    <label className="col-lg-2 control-label">Nama Produk</label>
                    <div className="col-lg-10">
                        <input ref="namaproduk" type="text" className="form-control" defaultValue={this.state.namaproduk} placeholder="Nama produk ..."  />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Harga</label>
                    <div className="col-lg-10">
                        <input ref="hargaproduk" type="text" className="form-control" defaultValue={this.state.hargaproduk} placeholder="Harga produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                    <Link to= "/"  className="btn btn-success"> <i className="far fa-times-circle"></i> &nbsp;Cancel</Link>&nbsp;
                    <Link to= "/"  onClick={() => this.hapusData(this.refs)} className="btn btn-primary"> <i className="far fa-paper-plane"></i> &nbsp;Hapus Data</Link>
                    </div>
                </div>

            </fieldset>
        </form>
      </div>
    )
  }
}
export default FormDelete