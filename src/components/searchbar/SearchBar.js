import { searchProducts } from "../ProductsList/ProductListSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
function SearchBar(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleSearchTerm(event){
        event.preventDefault();
        let searchTerm = event.target.search.value;
        dispatch(searchProducts(searchTerm));
        navigate('/products/search');
    }
    return(
        <div>
            <form onSubmit={handleSearchTerm}>
                <input type="text" placeholder="Search.." id="search"></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default SearchBar;