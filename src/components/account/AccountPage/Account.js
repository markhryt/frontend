import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../login/LoginSlice";
import { selectUsername } from "../../header/HeaderSlice";
import { Link } from "react-router-dom";

export default function Account(){
    let userIsLoggedIn = useSelector(selectIsLoggedIn);
    let userName = useSelector(selectUsername);
    if(!userIsLoggedIn){
        return(
            <div>
                <h2>Please Log in to view the account information</h2>
                <Link to = "/login">Login</Link>
            </div>
        )
    }else{
        return(
            <div className="account-page">
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