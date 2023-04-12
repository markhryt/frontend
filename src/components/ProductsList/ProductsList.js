import Product from "../products/Products";
import { Route, Routes as Switch } from 'react-router-dom';
import Login from "../account/login/Login";
import RegistrationForm from "../account/register/Register";
import Home from "../home/Home";
import Logout from "../account/logout/Logout";
function ProductList(){

    return(
        <div>
            <Switch>
                <Route path="/" element={<div className='element'><Home/></div>} />
                <Route path={'/products'} element={<div className="element"><Product/></div>}/>
                <Route path = "/login" element={<div className="element"><Login/></div>}/>
                <Route path = "/register" element={<div className="element"><RegistrationForm/></div>}/>
                <Route path = "logout" element={<div className="element"><Logout/></div>}/>
            </Switch>
        </div>
    )
    
}

export default ProductList;