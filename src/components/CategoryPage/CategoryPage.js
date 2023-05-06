import { useEffect } from "react";
import { useParams, useLocation } from "react-router"
import Products from "../products/Products";
import { useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../ProductsList/ProductListSlice";

export default function CategoryPage(){
    const { id } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProductsByCategory(id))
    })

    return(
        <div>
            <h1>{ category}</h1>
            <Products/>
        </div>
    )
}