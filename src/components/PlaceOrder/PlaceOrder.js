import { Navigate, useNavigate } from "react-router";
import { placeOrder } from "./PlaceOrderSlice";
import { useDispatch, useSelector } from "react-redux";
import {selectIsLoggedIn} from "../account/login/LoginSlice";
import { Link } from "react-router-dom";
export default function PlaceOrder(){
    let isLoggedIn = useSelector(selectIsLoggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault(); 
        navigate('thankyou')
        dispatch(placeOrder());
      };
    if(!isLoggedIn){
        return(
            <div className="place-order">
            <h2>Please Log in to proceed the purchase</h2>
            <Link to="/login">Login</Link>
        </div>
        )

    }else{
        return(
            <div className="place-order">
                <h1>Order confirmation</h1>
                <h2>Are you sure you want to add items in cart to your order?</h2>
                <form onSubmit={handleSubmit}>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}