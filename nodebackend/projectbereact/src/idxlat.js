import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppLat from './AppLat';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

// Start Reducers
// InitialState fungsinya seperti state biasa, buat konstanta kosongan similar dengan varian "tampung"
const initialState = {
  count: 0,
  user: "",
  pass: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    
    case 'KLIK':
      return {
        user: action.input1,  // seperti req.body.name di express
        pass: action.input2   // seperti req.body.password di express
      };
    default:
      return state;
  }
}

const store = createStore(reducer); // fungsinya untuk menampung hasil fungsi 'reducer' di atas
// End of Reducers
// Catatan: reducer bisa dipecah jadi beberapa files, dalam sub-folder reducers, e.g. loginreducer.js, etc.


ReactDOM.render(
  <Provider store={store}>  
    <BrowserRouter>
      <AppLat />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();