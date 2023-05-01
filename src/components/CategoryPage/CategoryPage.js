import { useParams } from "react-router"
import Products from "../products/Products";

export default function CategoryPage(){
    const { id } = useParams();
    id.toLowerCase();
    return(
        <div>
            <h1>{ id.charAt(0).toUpperCase() + id.slice(1)}</h1>
            <Products/>
        </div>
    )
}