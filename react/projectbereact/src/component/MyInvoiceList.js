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
    console.log(idUser)
      axios.post(`http://localhost:3003/userlistinvoice`, {
          user_id: idUser
  
      })
      .then(
          /** Disini fungsi */
          (ambilData) => {
              console.log(ambilData.data);
            //   var cekinv = ambilData.data[0][0].inv_no
            //   console.log(cekinv)
              
              // //// order :"header data
              this.setState({inv_no : ambilData.data[0].inv_no})
              this.setState({inv_stat_id : ambilData.data[0].stat_desc})
            //   this.setState({bill_to : ambilData.data[0][0].bill_to})
              this.setState({salute : ambilData.data[0].salutation})
              this.setState({billname : ambilData.data[0].nama_lengkap})
              this.setState({complete_name : ambilData.data[0].ship_to_Fname})
            //   this.setState({tel_no : ambilData.data[0][0].ship_to_Telno})
            //   this.setState({hp_no : ambilData.data[0][0].hp_no})
            //   this.setState({address : ambilData.data[0][0].ship_to_Address})
              this.setState({email : ambilData.data[0].email})
            //   this.setState({shpemail : ambilData.data[0][0].ship_to_Email})
            //   this.setState({pay_method : ambilData.data[0][0].pay_method})
            //   this.setState({confirm_date : ambilData.data[0][0].confirm_date})
              this.setState({posted_date : ambilData.data[0].posted_date})
              
              // this.setState({order_date : ambilData.data[0][0].order_date})
              // this.setState({stat_desc : ambilData.data[0][0].stat_desc})
            //   this.setState({sub_total : ambilData.data[0][0].sub_total})
            //   this.setState({tax : ambilData.data[0][0].tax})
            //   this.setState({ship_cost : ambilData.data[0][0].ship_cost})
              this.setState({grand_total : ambilData.data[0].grand_total})
              
              // //// cart invoice_header data
            
              if(ambilData.data.length >= 1){
  
                var tampung=[]
                for(var i=0 ; i<ambilData.data.length ; i++){
                  tampung.push(ambilData.data[i])
                }
              this.setState({listcart : tampung})
              console.log(this.state.listcart)
              }

             
            var TSubtotal = 0
            for (var i=0; i<tampung.length; i++) {
              TSubtotal = TSubtotal+tampung[i].sub_total

            }
                this.setState({TSubtotal : TSubtotal})
                this.setState({TVAT : TSubtotal*0.1})
                this.setState({TSHP : TSubtotal*0.01})
                // this.setState({GrandTot : Subtotal+VAT+SHP})
                this.setState({TGrandTot : TSubtotal + TSubtotal*0.11})

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
    
        // if (this.state.redirectinvoice) return <Redirect to='/completeinvoice' />
    
        const listcart = this.state.listcart.map((item, index) => {
      
            
            var inv_no = item.inv_no
            var inv_stat = item.stat_desc
            var inv_sht = item.ship_to_Fname
            var inv_she = item.ship_to_Email
            var inv_pd = item.posted_date
            var inv_gt = item.grand_total

            var dateonly = inv_pd.substr(0,10)
           
            return <tr key={index}>
            <td> {inv_no} </td>
            <td> {inv_stat} </td>
            <td> {inv_sht} </td>
            <td className="text-center">{inv_she}</td>
            <td className="text-center">{dateonly}</td>
            <td className="text-center" >  
                <Link to={{pathname: "/completeinvoice/", state: {inv_no:inv_no}  }}  className="btn btn-info btn-sm"> <i className="far fa-eye"></i> &nbsp; Display </Link > &nbsp;
                
            </td>
            <td className="text-right">${inv_gt}</td>
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
                    <h2>Invoice List </h2>  <h3 className="pull-right"> {this.state.salute} {this.state.billname} </h3>
                    </div>
                    <hr style={{borderColor: 'maroon'}} />
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
                                <td><strong>Invoice Number</strong></td>
                                <td><strong>Status</strong></td>
                                <td><strong>Ship To</strong></td>
                                <td className="text-center"><strong>Ship To email</strong></td>
                                <td className="text-center"><strong>Posted Date</strong></td>
                                <td className="text-center"><strong>Details</strong></td>
                                <td className="text-right"><strong>Total Amount Due</strong></td>
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
                                <td className="thick-line" />
                                <td className="thick-line text-center"><strong>Subtotal</strong></td>
                                <td className="thick-line text-right">${this.state.TSubtotal}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Value Added Tax (VAT) 10%</strong></td>
                                <td className="no-line text-right">${this.state.TVAT}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Shipping</strong></td>
                                <td className="no-line text-right">${this.state.TSHP}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Total</strong></td>
                                <td className="no-line text-right">${this.state.TGrandTot}</td>
                              </tr>
                              <tr>
                                <td className="no-line" />
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
