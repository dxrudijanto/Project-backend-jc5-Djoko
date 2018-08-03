import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import login from './component/login'; 
import masuk from './component/masuk'; 


 class App extends Component { 
   
  render() { 
    
    return ( 
  <div> 
    <Route exact path="/" component={login}/> 
    <Route path="/masuk" component={masuk}/> 
    
    </div>
    );
  } 
} 
export default App;