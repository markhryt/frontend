import Product from "../products/Products";
import { Route, Routes as Switch } from 'react-router-dom';
import Login from "../account/Login";
import Register from "../account/Register";
import Home from "../home/Home";
function ProductList(){

    return(
        <div>
            <Switch>
                <Route path="/home" element={<div className='element'><Home/></div>} />
                <Route path={'/products'} element={<div className="element"><Product/></div>}/>
                <Route path = "/login" element={<div className="element"><Login/></div>}/>
                <Route path = "/register" element={<div className="element"><Register/></div>}/>
                
            </Switch>
        </div>
    )
    
}

export default ProductList;