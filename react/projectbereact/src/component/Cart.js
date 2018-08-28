import React, { Component } from 'react'; /* by default */
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link, Redirect} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */

/////////// A. Cookies  ///////////////////
import Cookies from 'universal-cookie'

/////////// A. Cookies  ///////////////////

    const cookies = new Cookies();

///////////Cookies-end///////////////////


class Cart extends Component {
    state = {
        dataproduk: [],
        redirect: false,
        redirectorder: false
    }
    componentDidMount(){
        axios.post(`http://localhost:3003/showcart`, {
            user_id: cookies.get('sessionUserID')

        })
        .then(
            /** Disini fungsi */
            (ambilData) => {
                console.log(ambilData.data);
                this.setState({
                    dataproduk: ambilData.data
                });

            }
        )
    }

updateorder = (nilai) => {
    console.log(nilai)
    var user_id = cookies.get('sessionUserID')
    axios.post(`http://localhost:3003/updateorder`, {
            idUser  : user_id,
            // datacart: nilai
        })
        .then ((ambilDataCart) => {
            var respon = ambilDataCart.data
            if (respon === 1) {
                this.setState({
                    redirectorder: true
                });
            }
          

        })
}

  render() {
      ///////// A. Fungsi Wajib Untuk Setiap Component yang perlu proteksi login //////////////
      if (cookies.get('sessionUserID') == undefined ) {
        return <Redirect to='/loginuser'/>
    }
     /////////// Khusus buat proteksi komponen tanpa ada logout button /////////////////////

    if (this.state.redirectorder) return <Redirect to='/order' />



    const hasil = this.state.dataproduk.map((isi, urutan) =>
    {
        var urut = urutan + 1
        var produkId = isi.id
        var namaproduk = isi.desc
        var hargaproduk = isi.price
        var totalharga = isi.total_price
        var quantity = isi.quantity
        var longdesc = isi.Long_desc
        var partno = isi.part_no
        var gambar = isi.id_pics; // .id = mengambil data dari table-column "id" yg ditargetkan di server port 3003


        return <tr>
            <td data-th="Product">
                <div className="row">
                    <div className="col-sm-2 hidden-xs"><img className="img-responsive" src={'http://localhost:3003/tampunganFile/' + gambar} alt={gambar} /></div>
                    
                    {/* <img src={'http://localhost:3003/tampunganFile/' + gambar} style={{ width: 200, height:200 }} alt={gambar} /> */}

                    <div className="col-sm-10">
                        <h6 className="nomargin">Part No: &nbsp;<em>{partno}&nbsp;&nbsp;</em> <u>{namaproduk}</u> </h6>
                        <p>{longdesc}</p>
                    </div>
                </div>
            </td>
            <td data-th="Price">${hargaproduk}</td>
            <td data-th="Quantity">
                <input disabled className="form-control text-center" type="number" defaultValue={quantity} />
            </td>
            <td className="text-center" data-th="Subtotal"> {totalharga}</td>
            <td className="actions" data-th>
                <button className="btn btn-info btn-sm"><i className="fa fa-sync" /></button> &nbsp;
                      <button className="btn btn-danger btn-sm"><i className="fa fa-trash-alt" /></button>
            </td>
        </tr>

    }
)

    return (

    <div>
 

    <Navbar />

      {/* Start of My Cart */}
            <div className="container" style={{marginTop: 70}}>
              <table className="table table-hover table-condensed" id="cart">
                <thead>
                  <tr>
                    <th style={{width: '50%'}}>Product</th>
                    <th style={{width: '10%'}}>Price</th>
                    <th style={{width: '8%'}}>Quantity</th>
                    <th className="text-center" style={{width: '22%'}}>Subtotal</th>
                    <th style={{width: '10%'}} />
                  </tr>
                </thead>
                <tbody>
                
                  {hasil}
                  
                </tbody>
                
                <tfoot>
                  <tr className="visible-xs">
                    {/* <td className="text-center"><strong>Total 417.50</strong></td> */}
                  </tr>
                  <tr>
                    <td><Link to="/productlisting" className="btn btn-warning" href="Itemlist"><i className="fa fa-angle-left" /> Continue Shopping</Link></td>
                    <td className="hidden-xs" colSpan={2} />
                    <td className="hidden-xs text-center"><strong>Total</strong></td>
                   
                <td className="btn btn-success btn-block" onClick={()=>this.updateorder(this.state.dataproduk)} style={{marginTop:5}} >Checkout <i className="fa fa-angle-right" /></td>
                  </tr>
                </tfoot>
              </table>
            </div>
           
      
    <Footer/>



    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default Cart