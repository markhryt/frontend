import Product from "../product/Product";

const { useEffect, useState } = require("react");

function ProductList(){
    let [products, setProducts] = useState([{name: 'Sorry we have some troubles', id: 404}]);
    async function getProducts(){
        let data = await fetch("http://localhost:3000/products");
        let response = await data.json()
        console.log(products)
        setProducts(response.products);
    }
    useEffect(()=>{
        getProducts();
    }, []);
    return(
        <div>
            <ul>
            {Array.isArray(products) &&
          products.map((product) => (
            <Product key={product.id} id = {product.id} name={product.name}/>
          ))}
            </ul>
        </div>
    )
    
}

export default ProductList;