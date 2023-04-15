import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts } from "../ProductsList/ProductListSlice";

function Products(){
    const dispatch = useDispatch();
    let products = [{id:2, name: 't'}];

    products = useSelector(selectProducts);

    useEffect(() => {   
    dispatch(fetchProducts());
    }, [dispatch]);
    return(
        <div className='product'>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                <li key={product.id}><Link to={`/products/:${product.id}`}>{product.name}</Link>
                 <button>add to cart</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Products;