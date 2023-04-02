import Product from "../product/Product";
import { Route, Link, Routes as Switch } from 'react-router-dom';
import { fetchProducts, selectProducts } from "./ProductListSlice";
import { useDispatch, useSelector } from 'react-redux';

const { useEffect, } = require("react");
function ProductList(){
    const dispatch = useDispatch();
    let products = [];
    products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return(
        <div>
            <ul>
                {Array.isArray(products) && products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
            <Switch>
                <Route path="/product/:id" render={({ match }) => {
                    const productId = parseInt(match.params.id);
                    const product = products.find(p => p.id === productId);
                    if (product) {
                        return <Product id={product.id} name={product.name} />;
                    } else {
                        return <div>Product not found</div>;
                    }
                }} />
            </Switch>
        </div>
    )
    
}

export default ProductList;