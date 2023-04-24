import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../login/LoginSlice";
import { selectUsername } from "../../header/HeaderSlice";
import { Link } from "react-router-dom";
import { fetchOrders } from "./AccountSlice";
export default function Account(){
    let userIsLoggedIn = useSelector(selectIsLoggedIn);
    let userName = useSelector(selectUsername);
    const dispatch = useDispatch();
    if(!userIsLoggedIn){
        return(
            <div>
                <h1>Please log in to view Account</h1>
            </div>
        )
    }else{
        return(
            <div>
                <h1>{userName}</h1>
                <h2>Options</h2>
                <ul>
                    <li><Link to = 'accountinfo'>Account Information</Link></li>
                    <li><Link to = 'orders'>Orders History</Link></li>
                </ul>
            </div>
        )
    }

}