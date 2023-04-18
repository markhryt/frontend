import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getProduct } from "./ProductsPageSlice";
import { selectProductName } from "./ProductsPageSlice";
export default function ProductPage(){
    const dispatch = useDispatch();
    let productName = useSelector(selectProductName);
    let {id} = useParams();
    useEffect(()=>{
        dispatch(getProduct(id));
    })
    
    return(
        <div className="productpage">
            <h1>{productName}</h1>
        </div>
    )
}