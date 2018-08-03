import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


// Step 5: Mengirim function yang dapat dari redux
function mapStateToProps(state) {
  return {
      user: state.user,
      pass: state.pass
    };
}

// Step 6: default false sebelum dijalamkan
class masuk extends Component {
  state = {
    redirect: false
  }

  render() {

    // Step 7: Mengecek apakah passwod sudah dan username udah benar?
  if((this.props.user && this.props.pass) !== "2"){
    {this.state.redirect= true}  
    this.props.dispatch({type:'KLIK', input1:"Username anda salah", input2:"Password anda salah"});     
  }

  // Step 8: Mengirm redirect jika pass dan user bukan dapat value 2
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }
  

    return (
      <div>

        <h1>{this.props.user}</h1>
        <h1>{this.props.pass}</h1>
        <h1>Ini masuk!</h1>
        <h1>Ini masuk!</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(masuk)