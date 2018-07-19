import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavbarYeti from './component/NavbarYeti'; 
import FormBarang from './component/FormBarang';
import ListProd from './component/ListProd'; 
import FormEdit from './component/FormEdit'; 
import FormDelete from './component/FormDelete'; 
import ListProdDeleted from './component/ListProdDeleted'; 
import FormBarangTerhapus from './component/FormBarangTerhapus'; 
 
import './App.css';

 class AppLat1 extends Component { 
   
  render() { 
    
    return ( 
    <div className="App"> 
    
          {/* di bawah ini artinya by default semua laman mengandung navbar yang dirender dari component file NavbarYeti.js */}
        <NavbarYeti />
          {/* di bawah ini artinya laman utama = hasil render component file ListProduk.js */}
        <Route exact path="/" component={ListProd} />    
          {/* di bawah ini artinya laman url /tambahdata = hasil render component file Form.js  */}
        <Route path="/tambahdata" component={FormBarang}/>

        <Route path="/editdata" component={FormEdit}/>

        <Route path="/hapusdata" component={FormDelete}/>

        <Route path="/listdataterhapus" component={ListProdDeleted}/>

        <Route path="/balikindata" component={FormBarangTerhapus}/>  


    </div>
    );
  } 
} 
export default AppLat1;