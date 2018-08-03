import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Admh0 from './component/Admh0';
import Admlogin from './component/Admlogin';
import RegisterUser from './component/RegisterUser';
import LoginUser from './component/LoginUser';
import Itemlist from './component/Itemlist';
import ListProd from './component/ListProd';
import FormBarangDisp from './component/FormBarangDisp';
import FormBarang from './component/FormBarang';
import FormEdit from './component/FormEdit';
import AddPic from './component/AddPic';
import FormDelete from './component/FormDelete';
import ListProdDeleted from './component/ListProdDeleted';
import FormBarangTerhapus from './component/FormBarangTerhapus';
import ListUser from './component/ListUser';
import UserEdit from './component/UserEdit';


 class AppRBE extends Component { 
   
  render() { 
    
    return ( 
    <div> 
     
      {/* di bawah ini routing paths yang dedefinisikan untuk masing-masing component */}
      <Route exact path="/" component={Admh0}/> 
      <Route path="/adminmasuk" component={Admlogin}/> 
      <Route path="/reguser" component={RegisterUser}/> 
      <Route path="/loginuser" component={LoginUser}/> 
      <Route path="/listofitems" component={Itemlist}/> 
      <Route path="/productlist" component={ListProd}/> 
      <Route path="/displayproductdata" component={FormBarangDisp}/> 
      <Route path="/addproductdata" component={FormBarang}/> 
      <Route path="/editproductdata" component={FormEdit}/> 
      <Route path="/addeditpic" component={AddPic}/> 
      <Route path="/fdeleteproductdata" component={FormDelete}/> 
      <Route path="/deletedproductlist" component={ListProdDeleted}/> 
      <Route path="/returdeletedproductlist" component={FormBarangTerhapus}/> 
      <Route path="/userlist" component={ListUser}/> 
      <Route path="/edituserdata" component={UserEdit}/> 
    
    </div>
    );
  } 
} 
export default AppRBE;