import { searchProducts } from "../ProductsList/ProductListSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {useLocation} from "react-router-dom";
function SearchBar(){
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleSearchTerm(event){
        event.preventDefault();
        let searchTerm = event.target.search.value;
        dispatch(searchProducts(searchTerm));
        navigate('/products/search');
    }
    if(location === "/products" || location === "/" || location === "/categories"){
        return(
            <div>
                <form className="row" onSubmit={handleSearchTerm}>
                    <span className="col"/>
    
                    <div className="col">
                        <input type="text" placeholder="Search.." id="search" class="form-control rounded"></input>
                    </div>
    
                    <span className="col"/>
                </form>
            </div>
        )
    }else{
        return
    }

}
export default SearchBar;