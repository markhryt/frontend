import './App.css';
import {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from '../home/Home';
import Header from '../header/Header';
import ProductList from '../ProductsList/ProductsList';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ProductListWrapper />
      </div>
    </Router>
  );
}

function ProductListWrapper() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <ProductList />;
}

export default App;
