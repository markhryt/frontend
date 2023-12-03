import { logoutUser } from "./LogoutSlice"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectIsLoggedIn } from "../login/LoginSlice";
import { Link } from "react-router-dom";
export default function Logout(){
    let isLoggedIn = false;
    isLoggedIn = useSelector(selectIsLoggedIn)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        // sessionStorage.removeItem('myKey');
        dispatch(logoutUser());
        navigate('/');
    }
    if(!isLoggedIn){
        return(
            <div className="text-center">
                <h1>You are not authenticated</h1>
                <Link to = '/login'>Login</Link>
            </div>
        )

    }
    return(
        <div className="logout-page text-center">
            <h1 className="mb-5">Are you sure you want to log out?</h1>
            <button className="btn btn-lg btn-danger" onClick={handleSubmit}>Log out</button>
        </div>
    )
}