import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

class ListProdDeleted extends Component {
  state = {
      dataproduk: [],
  }
  componentDidMount(){
      axios.get(`http://localhost:8002/tampildataterhapus/`).then(
          /** Disini fungsi */
          (ambilData) => {
              console.log(ambilData.data);
              this.setState({
                  dataproduk: ambilData.data
              });
          }
      )
  }
  render() {
    const hasil = this.state.dataproduk.map(
        (isi, index) => {               // index tidak mengambil dari id database, tapi langsung di frontend nya, shg no. urut independent mulai dari 1 (index + 1)
            var urut = index + 1;
            var namaproduk = isi.mobil; // .namabarang = mengambil data dari table-column "namabarang" yg ditargetkan di server port 8002
            var hargaproduk = isi.harga; // .harga = mengambil data dari table-column "harga" yg ditargetkan di server port 8002
            var produkID = isi.id; // .id = mengambil data dari table-column "id" yg ditargetkan di server port 8002
            var tanggalhapus = isi.posted_on; // .posted_on = mengambil data dari table-column "posted_on" yg ditargetkan di server port 8002
                                         // target database dan data-table terdapat dalam file appbackend.js (nodeJS yg terhubung dg database)
            return <tr key={index} style={{textAlign: 'center'}}>
            <td>{urut}</td>
            <td>{namaproduk}</td>
            <td>{hargaproduk}</td>
            <td>{tanggalhapus}</td>
            <td>
                <Link to={{pathname: "/balikindata/", state: {produkID:produkID}  }}  className="btn btn-info btn-md"> <i className="fas fa-undo-alt"></i> &nbsp; Return Data </Link >
                               
            </td>
        </tr>
        }
    );
    return (
      <div className="container">
        <table className="table table-striped table-hover table-bordered">
        <thead>
            <tr>
                <th style={{textAlign: 'center'}}>Nomor</th>
                <th style={{textAlign: 'center'}}>Nama Produk</th>
                <th style={{textAlign: 'center'}}>Harga Produk</th>
                <th style={{textAlign: 'center'}}>Tanggal Dihapus</th>
                <th style={{textAlign: 'center'}}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {hasil}
        </tbody>
        </table>
      </div>
    )
  }
}
export default ListProdDeleted;