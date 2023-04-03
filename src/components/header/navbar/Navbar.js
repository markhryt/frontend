import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar(){
    return(
        <nav>
            <ul className="navbar">
                <li><Link to ="/home">Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;