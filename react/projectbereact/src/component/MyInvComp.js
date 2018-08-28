import React, { Component } from 'react'; /* by default */
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css'; /* by default */
import {Link, Redirect} from 'react-router-dom' /* by default (for changing pages from links inside web-page) */
import axios from 'axios'
/////////// A. Cookies  ///////////////////
import Cookies from 'universal-cookie'

/////////// A. Cookies  ///////////////////

    const cookies = new Cookies();

///////////Cookies-end///////////////////


class MyInvComp extends Component {
  state = {
    dataproduk: [],
    redirect: false,
    redirectinvoice: false,
    order_no:'',
    gabungan:'',
    listcart:[],
    dateonly:''
  }

  componentDidMount(){

    var idUser = cookies.get('sessionUserID')
    var invoice_id = this.props.location.state.inv_no
    // console.log(invoice_id)
    // console.log(idUser)
      axios.post(`http://localhost:3003/completeinvoice`, {
          user_id: idUser,
        invoice_id:invoice_id
      })
      .then(
          /** Disini fungsi */
          (ambilData) => {
              console.log(ambilData.data);
              var cekinv = ambilData.data[0][0].inv_no
              console.log(cekinv)
              
              // //// order :"header data
              this.setState({inv_no : ambilData.data[0][0].inv_no})
              this.setState({inv_stat_id : ambilData.data[0][0].stat_desc})
              this.setState({bill_to : ambilData.data[0][0].bill_to})
              // this.setState({name : ambilData.data[0][0].name})
              this.setState({complete_name : ambilData.data[0][0].ship_to_Fname})
              this.setState({tel_no : ambilData.data[0][0].ship_to_Telno})
              this.setState({hp_no : ambilData.data[0][0].hp_no})
              this.setState({address : ambilData.data[0][0].ship_to_Address})
              this.setState({email : ambilData.data[0][0].email})
              this.setState({shpemail : ambilData.data[0][0].ship_to_Email})
              this.setState({pay_method : ambilData.data[0][0].pay_method})
              this.setState({confirm_date : ambilData.data[0][0].confirm_date})
              this.setState({posted_date : ambilData.data[0][0].posted_date})
              
              // this.setState({order_date : ambilData.data[0][0].order_date})
              // this.setState({stat_desc : ambilData.data[0][0].stat_desc})
              this.setState({sub_total : ambilData.data[0][0].sub_total})
              this.setState({tax : ambilData.data[0][0].tax})
              this.setState({ship_cost : ambilData.data[0][0].ship_cost})
              this.setState({grand_total : ambilData.data[0][0].grand_total})
              
              // //// cart item data
            
              if(ambilData.data.length >= 1){
  
                var tampung=[]
                for(var i=0 ; i<ambilData.data[1].length ; i++){
                  tampung.push(ambilData.data[1][i])
                }
              this.setState({listcart : tampung})
              console.log(this.state.listcart)
              }

              this.setState({gabungan : this.state.complete_name + '\n' + this.state.tel_no + '\n' +  this.state.shpemail + '\n' + this.state.address})
              var abc = this.state.posted_date
              this.setState({dateonly : abc.substr(0,10)})
          }
      )
  }

  //// fungsi update order cart
        // invupdate = () => {

        // var inv_no = this.state.inv_no
        // var user_id = cookies.get('sessionUserID')

        // axios.post(`http://localhost:3003/postinvoice`, {

        //     UserID: user_id,  
        //     inv_no: inv_no,
            
        //     }).then((hasil) => {
        //     var validation = hasil.data
        //     if (validation === 1) {
        //         this.setState({
        //         redirectinvoice: true
        //         })
        //     }

        //     })

        // }

  render() {

        ///////// A. Fungsi Wajib Untuk Setiap Component yang perlu proteksi login //////////////
        if (cookies.get('sessionUserID') == undefined) {
          return <Redirect to='/loginuser' />
        }
        /////////// Khusus buat proteksi komponen tanpa ada logout button /////////////////////
    
        if (this.state.redirectinvoice) return <Redirect to='/completeinvoice' />
    
        const listcart = this.state.listcart.map((item, index) => {
            var longdesc = item.Long_desc
            var ordno = item.order_no
            var harga = item.price
            var qty = item.quantity
            var totharga = item.total_price
            var gambar = item.id_pics
      
            return <tr key={index}>
            <td> <img className="img-responsive" src={'http://localhost:3003/tampunganFile/' + gambar}  style={{width:100}}/> </td>
            <td> {longdesc} </td>
            <td> {ordno} </td>
            <td className="text-center">${harga}</td>
            <td className="text-center">{qty}</td>
            <td className="text-right">${totharga}</td>
          </tr>
      
          })
    

    return (

    <div>
      <div>
        <Navbar />
              {/* Start of My Invoice */}
              <div className="container" style={{marginTop: 70}}>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="invoice-title">
                    <h2>INV-{this.state.inv_no}</h2> <i> Invoice Status: <b style={{color:'steelblue'}}>{this.state.inv_stat_id}</b> </i> <h3 className="pull-right">Purchase Order # PO.{this.state.inv_no} </h3>
                    </div>
                    <hr style={{borderColor: 'maroon'}} />
                    <div className="row">
                      <div className="col-xs-8">
                        <address>
                          <strong>Billed To:</strong><br />
                          {this.state.bill_to}<br />
                          {this.state.email}<br />
                          HP No. {this.state.hp_no}
                        </address>
                      </div>
                      
                      <div className="col-xs-4 text-right">
                        <address>
                          <strong>Shipped To:</strong><br />
                          <form>
                            <textarea name="shipTo" disabled className="form-control" value={this.state.gabungan} rows={6} cols={50} />
                          </form>
                        </address>
                      </div>

                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        <address>
                          <strong>Please Make Your Payment to:</strong><br />
                          {this.state.pay_method}<br />
                          BCA <br/>
                          A/C No. 2721000111 <br/>
                          A/C Name. PT OneParts.com<br/>
                          <strong>Send Copy of Transfer Slyp to:</strong><br />
                          <i style={{color:'green'}} class="fab fa-whatsapp-square"></i>&nbsp; +62-8588-066-1971
                        </address>
                      </div>
                      <div className="col-xs-6 text-right">
                        <address>
                          <strong>Invoice Date:</strong><br />
                          {this.state.dateonly}<br />
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="panel panel-info">
                      <div className="panel-heading">
                        <h3 className="panel-title"><strong>Invoice summary</strong></h3>
                      </div>
                      <div className="panel-body">
                        <div className="table-responsive">
                          <table className="table table-condensed">
                            <thead>
                              <tr>
                                <td><strong>Pic</strong></td>
                                <td><strong>Item</strong></td>
                                <td><strong>Order_No</strong></td>
                                <td className="text-center"><strong>Price</strong></td>
                                <td className="text-center"><strong>Quantity</strong></td>
                                <td className="text-right"><strong>Totals</strong></td>
                              </tr>
                            </thead>
                            <tbody>
       
                              {listcart}
                              {/* TOTAL - total */}
                              <tr>
                                <td className="thick-line" />
                                <td className="thick-line" />
                                <td className="thick-line" />
                                <td className="thick-line" />
                                <td className="thick-line text-center"><strong>Subtotal</strong></td>
                                <td className="thick-line text-right">${this.state.sub_total}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Value Added Tax (VAT) 10%</strong></td>
                                <td className="no-line text-right">${this.state.tax}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Shipping</strong></td>
                                <td className="no-line text-right">${this.state.ship_cost}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Total</strong></td>
                                <td className="no-line text-right">${this.state.grand_total}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center" />
                                {/* <td className="no-line text-right">  <button onClick = {this.invupdate} className="btn btn-danger"> Post Invoice </button> </td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid"> </div>
            </div>
      
    <Footer/>



    </div>  /* end of opening div */

    );  /* end of return */

  } /* end of render */

} /* end of component */



export default MyInvComp
