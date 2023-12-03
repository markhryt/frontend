import { useSelector } from "react-redux"
import { selectUserRegistered } from "./RegisterSlice"
import { Link } from "react-router-dom";
export default function PostConfirm(){
    let userRegistered = useSelector(selectUserRegistered);
    if(userRegistered){
        return(
            <div className="text-center">
                <h1 >Thank you for registration!</h1>
                <br/>
                <Link to = "/login"><button className="btn btn-outline-secondary">Login</button></Link>
            </div>
        )
    }else{
        return(
            <div>
                <h1>Registration Error</h1>
                <Link to = '/register'>Register</Link>
            </div>
        )
    }

}