import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../ProductsList/ProductListSlice";
function Navbar(){
    const dispatch = useDispatch();
    function handleProducts(){
        dispatch(fetchProducts());
    }
    return(
        <nav>
            <ul className="navbar">
                <li><Link to ="/">Home</Link></li>
                <li onClick={handleProducts}><Link to='/products'>Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to ='/account'>Account</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;