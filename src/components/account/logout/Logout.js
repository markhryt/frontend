import { logoutUser } from "./LogoutSlice"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
export default function Logout(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        sessionStorage.removeItem('myKey');
        dispatch(logoutUser());
        navigate('/');
    }
    return(
        <div>
            <h1>Are you sure you want to log out?</h1>
            <button onClick={handleSubmit}>Log out</button>
        </div>
    )
}