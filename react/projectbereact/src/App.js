import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route } from 'react-router-dom'

// User sites
import Home0 from './component/Home0';
import LoginUser from './component/LoginUser';
import RegisterUSer from './component/RegisterUser';
// import Home from './component/Home';
import Itemlist from './component/Itemlist';
// import mycart from './component/mycart';
// import myinvoice from './component/myinvoice';
// import myprofile from './component/myprofile';
// import myinvpdg from './component/myinvpdg';
import pd1 from './component/pd1';
import pd2 from './component/pd2';
import pd3 from './component/pd3';
import pd4 from './component/pd4';
import pd5 from './component/pd5';
import pd6 from './component/pd6';
import pd7 from './component/pd7';
import pd8 from './component/pd8';
import pd9 from './component/pd9';


// Admin sites
// import Admh0 from './component/Admh0';
// import Admlogin from './component/Admlogin';
// import Admh from './component/Admh';
// import Adminvlist from './component/Adminvlist';
// import AdmMC from './component/AdmMC';
// import AdmMP from './component/AdmMP';


class App extends Component {
  render() {
    return (
      <div className="App">
       
       {/* User sites */}
       <Route  exact path="/" component={Home0}/>
       <Route  path="/LoginUser" component={LoginUser}/>
       <Route  path="/RegisterUser" component={RegisterUSer}/>
       {/* <Route  path="/Home" component={Home}/> */}
       <Route  path="/Itemlist" component={Itemlist}/>
       {/* <Route  path="/mycart" component={mycart}/>
       <Route  path="/myinvoice" component={myinvoice}/>
       <Route  path="/myprofile" component={myprofile}/>
       <Route  path="/myinvpdg" component={myinvpdg}/> */}
       <Route  path="/pd1" component={pd1}/>
       <Route  path="/pd2" component={pd2}/>
       <Route  path="/pd3" component={pd3}/>
       <Route  path="/pd4" component={pd4}/>
       <Route  path="/pd5" component={pd5}/>
       <Route  path="/pd6" component={pd6}/>
       <Route  path="/pd7" component={pd7}/>
       <Route  path="/pd8" component={pd8}/>
       <Route  path="/pd9" component={pd9}/>

      {/* Admin sites */}
      {/* <Route  path="/Admh0" component={Admh0}/>
      <Route  path="/Admlogin" component={Admlogin}/>
      <Route  path="/Admh" component={Admh}/>
      <Route  path="/Adminvlist" component={Adminvlist}/>
      <Route  path="/AdmMC" component={AdmMC}/>
      <Route  path="/AdmMP" component={AdmMP}/> */}



      </div>
    );
  }
}

export default App;
