import Products from "../products/Products";
import { Route, Routes as Switch } from 'react-router-dom';
import Login from "../account/login/Login";
import RegistrationForm from "../account/register/Register";
import Home from "../home/Home";
import Logout from "../account/logout/Logout";
import ProductPage from "../productPage/ProductPage";
import Cart from "../Cart/Cart";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import ThanksForOrder from "../PlaceOrder/ThanksForOrder";
import Account from "../account/AccountPage/Account";
import AccountInfoPage from "../account/AccountPage/AccountInfoPage";
import Orders from "../Orders/Orders";
import OrderPage from "../Orders/OrderPage";
import Categories from "../Categories/Categories";
import CategoryPage from "../CategoryPage/CategoryPage";
import Verifyemail from "../account/register/VerifyEmail";
import PostConfirm from "../account/register/PostConfirm";
function ProductList(){
  
    return(
        <div>
            <Switch>
                <Route path="/" element={<div className='element'><Home/></div>} />
                <Route path={'/products'} element={<div className="element"><Products/></div>}/>
                <Route path = "/login" element={<div className="element"><Login/></div>}/>
                <Route path = "/register" element={<div className="element"><RegistrationForm/></div>}/>
                <Route path = "/logout" element={<div className="element"><Logout/></div>}/>
                <Route path = "/account" element={<div className="element"><Account/></div>}/>
                <Route path = "/categories" element={<div className="element"><Categories/></div>}/>
                <Route path = '/products/:id' element = {<div className='element'><ProductPage/></div>}/>
                <Route path = '/cart/:id' element = {<div className='element'><ProductPage/></div>}/>
                <Route path = '/categories/:id' element = {<div className='element'><CategoryPage/></div>}/>
                <Route path = '/products/search' element = {<div className="element"><Products/></div>}/>
                <Route exact path="/cart" element={<div className='element'><Cart/></div>} />
                <Route exact path="/cart/placeorder" element={<div className='element'><PlaceOrder/></div>} />
                <Route exact path="/cart/placeorder/thankyou" element={<div className='element'><ThanksForOrder/></div>} />
                <Route exact path="/account/accountinfo" element={<div className='element'><AccountInfoPage/></div>} />
                <Route exact path="/account/orders" element={<div className='element'><Orders/></div>} />
                <Route exact path="/account/orders/:id" element={<div className='element'><OrderPage/></div>} />
                <Route path = "/register/verifyemail" element={<div className="element"><Verifyemail/></div>}/>
                <Route path = "/register/verifyemail/postconfirm" element={<div className="element"><PostConfirm/></div>}/>
            </Switch>
        </div>
    )
    
}

export default ProductList;