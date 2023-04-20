import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts, searchProducts } from "../ProductsList/ProductListSlice";
import { selectCart, addItem } from "../Cart/CartSlice";

function Products(){
    function updateStorage(){
        sessionStorage.setItem('cart', JSON.stringify({items:cart}));
    }
    const dispatch = useDispatch();
    let products = [{id:2, name: 't'}];
    products = useSelector(selectProducts);
    const location = useLocation();
    let currentlocation = location.pathname;
    let cart = useSelector(selectCart);
    useEffect(()=>{
        if(currentlocation==="/products"){
            dispatch(fetchProducts());
        }
        updateStorage();
    })
    
    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        updateStorage();
      }

    return(
        <div className='product'>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                <li key={product.id}><Link to={`/products/${product.id}`}>{product.name}</Link>
                 <button onClick={() => handleAddToCart(product)}>add to cart</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Products;