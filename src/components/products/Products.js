import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts } from "../ProductsList/ProductListSlice";
import { selectCart, addItem } from "../Cart/CartSlice";

function Products(){
    function updateStorage(){
        sessionStorage.setItem('cart', JSON.stringify({items:cart}));
    }
    const dispatch = useDispatch();
    let products = [{id:0, name: ''}];
    products = useSelector(selectProducts);
    const location = useLocation();
    let currentlocation = location.pathname;
    let cart = useSelector(selectCart);
    useEffect(()=>{
        if(currentlocation==="/products"){
            dispatch(fetchProducts());
        }
    }, [dispatch, currentlocation]);
    useEffect(()=>{
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
                <li key={product.id}>
                <img src = {product.img_url} className='product-image' alt ="product"/>
                <Link to={`/products/${product.id}`} className='link'>{product.name}</Link>
                <button onClick={() => handleAddToCart(product)}>add to cart</button>
               </li>
                ))}
            </ul>
        </div>
    )
}

export default Products;