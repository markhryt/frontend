import './App.css';
import {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from '../header/Header';
import ProductList from '../ProductsList/ProductsList';
function App() {

  return (
    <div className="App">
      <Router>
        <Header/>

      <div className='ProductList'>
        <ProductList/>
      </div>
      </Router>
     
     
        
    </div>
  );
}

export default App;
