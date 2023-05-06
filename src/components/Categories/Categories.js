import { useDispatch, useSelector } from "react-redux"
import { selectCategories, fetchCategories } from "./CategoriesSlice"
import { useEffect } from "react"
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../ProductsList/ProductListSlice";
export default function Categories(){
    const dispatch = useDispatch();
    let categories = useSelector(selectCategories);
    useEffect(()=>{
        dispatch(fetchCategories());
    },[dispatch])
    try{
        return(
            <div className="categories">
                <h1>Categories</h1>
                <ul>
                    {categories.map(element=><li key = {element.id} onClick={()=>dispatch(fetchProductsByCategory(element.id))}>
                    <Link to = {`${element.id}?category=${element.name}`}>{element.name}</Link></li>)}
                </ul>
            </div>
        )
    }catch{
        return(
            <div>
                <h1>Ooops, it seems like an error ocured :(</h1>
            </div>
        )
    }

}