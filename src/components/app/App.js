import './App.css';
import {useEffect} from 'react';
import {
  BrowserRouter as Router,useLocation
} from "react-router-dom";
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
