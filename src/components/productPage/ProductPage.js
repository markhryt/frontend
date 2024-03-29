import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getProduct } from "./ProductsPageSlice";
import { selectProductName } from "./ProductsPageSlice";
import "./ProductPage.css"
export default function ProductPage(){
    const dispatch = useDispatch();
    let product = useSelector(selectProductName);
    let {id} = useParams();
    useEffect(()=>{
        dispatch(getProduct(id));
    }, [dispatch, id]);
    if(!product){
        return(
            <div  className="productpage">
                <h1>Product</h1>
            </div>
        )
    }else{
        return(
            <div className="productpage text-center">
                <img src = {product.img_url} className = "productpage-image" width="20%" alt="product"/>
                <h1>{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</h1>
            </div>
        )
    }

}