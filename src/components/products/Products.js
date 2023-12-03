import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts } from "../ProductsList/ProductListSlice";
import { selectCart, addItem } from "../Cart/CartSlice";
import "./Products.css";
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
        <div className='product container'>
            <div className="row">
                <span className="col"/>
                <h1 className="col">Products</h1>
                <span className="col"/>
            </div>
            
            <div className="row">
                <span className="col"/>
                <ul className="col-9">
                    {products.map((product) => (
                    <li key={product.id}>
                    <img src = {product.img_url} className='product-image' alt ="product"/>
                    <Link to={`/products/${product.id}`} className='link'>{product.name}</Link>
                    <button className="btn btn-primary"onClick={() => handleAddToCart(product)}>add to cart</button>
                    </li>
                    ))}
                </ul>
                <span className="col"/>
            </div>

        </div>
    )
}

export default Products;