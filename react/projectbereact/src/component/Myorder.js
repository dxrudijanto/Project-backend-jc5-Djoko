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


class myinvpdg extends Component {
  state = {
    dataproduk: [],
    redirect: false,
    redirectorder: false,
    order_no:'',
    listcart:[],
    redirectinvoice: false,
    dateonly:''
  }

componentDidMount(){

  var idUser = cookies.get('sessionUserID')
  console.log(idUser)
    axios.post(`http://localhost:3003/showorder`, {
        user_id: idUser

    })
    .then(
        /** Disini fungsi */
        (ambilData) => {
            console.log(ambilData.data);
            // order :"header data
            this.setState({order_no : ambilData.data[0][0].order_no})
            this.setState({bill_to : ambilData.data[0][0].bill_to})
            this.setState({name : ambilData.data[0][0].name})
            this.setState({complete_name : ambilData.data[0][0].complete_name})
            this.setState({tel_no : ambilData.data[0][0].tel_no})
            this.setState({hp_no : ambilData.data[0][0].hp_no})
            this.setState({address : ambilData.data[0][0].address})
            this.setState({email : ambilData.data[0][0].email})
            this.setState({pay_method : ambilData.data[0][0].pay_method})
            this.setState({order_date : ambilData.data[0][0].order_date})
            this.setState({stat_desc : ambilData.data[0][0].stat_desc})
          
            
            // cart item data
          
            if(ambilData.data.length >= 1){

              var tampung=[]
              for(var i=0 ; i<ambilData.data[1].length ; i++){
                tampung.push(ambilData.data[1][i])
              }
            this.setState({listcart : tampung})
            console.log(this.state.listcart)
            }
            console.log(tampung[0].total_price)

            var Subtotal = 0
            for (var i=0; i<tampung.length; i++) {
              Subtotal = Subtotal+tampung[i].total_price

            }
            this.setState({Subtotal : Subtotal})
            this.setState({VAT : Subtotal*0.1})
            this.setState({SHP : Subtotal*0.01})
            // this.setState({GrandTot : Subtotal+VAT+SHP})
            this.setState({GrandTot : Subtotal + Subtotal*0.11})
            
            var abc = this.state.order_date
            this.setState({dateonly : abc.substr(0,10)})

        }
    )
}

/////// Untuk default value di text area bisa ubah-ubah ///////
// constructor(props) {
//   super(props);
//   this.state = {
//     value: 'Test On-change in your text-area form', 
//     addr: ''
//   };

//   this.handleChange = this.handleChange.bind(this);
// }

/////// text area bisa ubah-ubah ///////
handleChange = (event) => {
  this.setState({address: event.target.value});
}
/////// mengambil field yang sudah di ubah-ubah ///////

namaChange = (event) => {
  this.setState({name: event.target.value});
}
namalengkapChange = (event) => {
  this.setState({complete_name: event.target.value});
}
telnoChange = (event) => {
  this.setState({tel_no: event.target.value});
}
emailChange = (event) => {
  this.setState({email: event.target.value});
}
addressChange = (event) => {
  this.setState({address: event.target.value});
}

//// fungsi update order cart
ordercartupdate = () => {
  var ST = this.state.Subtotal
  var VT = this.state.VAT
  var SH = this.state.SHP
  var GT = this.state.GrandTot

  var BillTo = this.state.bill_to
  var Name = this.state.name
  var FullName = this.state.complete_name
  var TelNo = this.state.tel_no
  var Email = this.state.email
  var Address = this.state.address
  var PayMethod = this.state.pay_method
  var OrderDate = this.state.order_date

  // var himpuncart = this.state.listcart
  var ord_no = this.state.order_no
  var user_id = cookies.get('sessionUserID')

  axios.post(`http://localhost:3003/confirmorder`, {

    ordernumber: ord_no,
    subtotal: ST,
    valaddtax: VT,
    shipcost: SH,
    grandtotal: GT,
    UserID: user_id,

    billto: BillTo,
    name: Name,
    fname: FullName,
    telno: TelNo,
    email: Email,
    address: Address,
    paymethod: PayMethod,
    orderdate: OrderDate

  }).then((hasil) => {
    var validation = hasil.data
    if (validation === 1) {
      this.setState({
        redirectinvoice : true
      })
    } 


  })


  console.log(ST, VT, SH, GT)
  // console.log(himpuncart)
}

  render() {

    ///////// A. Fungsi Wajib Untuk Setiap Component yang perlu proteksi login //////////////
    if (cookies.get('sessionUserID') == undefined) {
      return <Redirect to='/loginuser' />
    }
    /////////// Khusus buat proteksi komponen tanpa ada logout button /////////////////////

    if (this.state.redirectinvoice) return <Redirect to='/invoice' />

    const listcart = this.state.listcart.map((item, index) => {
        var longdesc = item.Long_desc
        var harga = item.price
        var qty = item.quantity
        var totharga = item.total_price
        var gambar = item.id_pics
  
        return <tr key={index}>
        <td> <img className="img-responsive" src={'http://localhost:3003/tampunganFile/' + gambar}  style={{width:100}}/> </td>
        <td> {longdesc} </td>
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
                      <h2>Cart Order {this.state.order_no}</h2> <i> Order Status: <b style={{color:'red'}}>{this.state.stat_desc}</b> </i> <h3 className="pull-right">Purchase Order # PO.{this.state.order_no} </h3>
                    </div>
                    <hr style={{borderColor: 'maroon'}} />
                    <div className="row">
                      <div className="col-xs-9">
                        <address>
                          <strong>Billed To:</strong><br />
                          {this.state.bill_to}<br />
                          {this.state.email}
                        </address>
                      </div>
                      <div className="col-xs-3 text-right">
                        <address>
                          <strong>Shipped To <i>(modifiable):</i></strong><br />
                          <form>
                            <input className="form-control input-sm" type="text" placeholder="First Name" defaultValue={this.state.name} 
                            onChange={this.namaChange} />
                            <input className="form-control input-sm" type="text" placeholder="Last Name" defaultValue={this.state.complete_name} 
                            onChange={this.namalengkapChange}/>
                            <input className="form-control input-sm" type="text" placeholder="Phone" defaultValue={this.state.tel_no} 
                            onChange={this.telnoChange}/>
                            <input className="form-control input-sm" type="email" placeholder="e-mail" defaultValue={this.state.email} 
                            onChange={this.emailChange}/>
                            <textarea className="form-control input-sm" rows={4} cols={48} placeholder="Describe shipping to address here (required)" 
                            value={this.state.address} onChange={this.handleChange}/>
                          </form>
                        </address>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-6">
                        <address>
                          <strong>Payment Method:</strong><br />
                          {this.state.pay_method}<br />
                          BCA <br/>
                          A/C No. 2721000111 <br/>
                          A/C Name. PT OneParts.com<br/>
                        </address>
                      </div>
                      <div className="col-xs-6 text-right">
                        <address>
                          <strong>Order Date:</strong><br />
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
                        <h3 className="panel-title"><strong>Order summary</strong></h3>
                      </div>
                      <div className="panel-body">
                        <div className="table-responsive">
                          <table className="table table-condensed">
                            <thead>
                              <tr>
                                <td><strong>Pic</strong></td>
                                <td><strong>Item</strong></td>
                                <td className="text-center"><strong>Price</strong></td>
                                <td className="text-center"><strong>Quantity</strong></td>
                                <td className="text-right"><strong>Totals</strong></td>
                              </tr>
                            </thead>
                            <tbody>
                              {/* foreach ($order->lineItems as $line) or some such thing here */}
                              {/* <tr>
                                <td> <a href="pd1.html"> OS-2018-<em>01</em>-0056 </a> </td>
                                <td> <a href="pd1.html"> OS-2018-<em>01</em>-0056 </a> </td>
                                <td className="text-center">$85.50</td>
                                <td className="text-center">2</td>
                                <td className="text-right">$171.00</td>
                              </tr> */}
                              
                              {listcart}
                              {/* TOTAL - total */}
                              <tr>
                                <td className="thick-line" />
                                <td className="thick-line" />
                                <td className="thick-line" />
                                <td className="thick-line text-center"><strong>Subtotal</strong></td>
                                <td className="thick-line text-right">${this.state.Subtotal}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Value Added Tax (VAT) 10%</strong></td>
                                <td className="no-line text-right">${this.state.VAT}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Shipping</strong></td>
                                <td className="no-line text-right">${this.state.SHP}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Total</strong></td>
                                <td className="no-line text-right">${this.state.GrandTot}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center" />
                                <td className="no-line text-right">  <button onClick = {this.ordercartupdate} className="btn btn-warning"> Confirm Order </button> </td>
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



export default myinvpdg
