import { Navigate, useNavigate } from "react-router";
import { placeOrder } from "./PlaceOrderSlice";
import { useDispatch } from "react-redux";
export default function PlaceOrder(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault(); 
        navigate('thankyou')
        dispatch(placeOrder());
      };
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