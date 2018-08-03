import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


//Redux Store
function mapStateToProps(state){
    return {
    user: state.user,
    pass: state.pass
    };
  }

class login extends Component {

// increment = () => {  
//   this.props.dispatch({type:'INCREMENT'});
// }

// decrement = () => {  
//   this.props.dispatch({type:'DECREMENT'});
// }

// Step 3: Buat fungsi untuk kirim data ke App nodeJS
klik = (apa) => {    

  // axios.post('http//localhost:8000/login', {
  //   input1: apa.nama.value,   // membawa input username
  //   input2: apa.pass.value    // membawa input password
  // }).then((respond) => {
  //   this.setState({
  //     hasilLogin: respond.data
  //   });
  // })

  this.props.dispatch({
        type:'KLIK',  // untuk case KLIK di Index.js react
        input1: apa.nama.value,   // membawa input username
        input2: apa.pass.value    // membawa input password

    });    
   }



render(){  
  return (
<div>
    <center>
       {/* <h1>{this.props.count}</h1>
    <div>
        <button onClick = {this.decrement}>Kurang
    </button>
    <span> </span>
          <button onClick = {this.increment}>Tambah
    </button>
    </div> */}




 <h1>Username: {this.props.user}!</h1>        
 <h1>password: {this.props.pass}!</h1>   

{/* Step1: Buat Login Form */}
  <input ref='nama' type="text" placeholder="username" required/>  &nbsp; 
  <input ref="pass" type="password" placeholder="password" required/>  &nbsp; 
  
{/* Step2: Ambil value dari input form di atas */}
  <button>
  <Link onClick={() => this.klik(this.refs)} to="/masuk"> Tekan saya gan</Link>
  </button>

    </center>
</div>
  );
  }
}





export default connect(mapStateToProps)(login)