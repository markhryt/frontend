import './App.css';
import {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from '../home/Home';
import Header from '../header/Header';
import ProductList from '../ProductsList/ProductsList';
function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <ProductList/>
      </div>
    </Router>
  );
}

export default App;
