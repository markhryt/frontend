import {login} from "./LoginSlice"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from "./LoginSlice";
import "./Login.css"
export default function Login(){
    let isLoggedIn = false;
    isLoggedIn = useSelector(selectIsLoggedIn)
    const navigate = useNavigate();
    const dispatch = useDispatch();
 
    function handleSubmit(event) {
        event.preventDefault();
        const userData = {
          email: event.target.email.value,
          password: event.target.password.value
        };
        dispatch(login(userData));
        navigate('/');
      }

    if(isLoggedIn){
        return(
            <div className="text-center">
                <h1>You are Logged In</h1>
                <Link to = "/logout">Logout</Link>
            </div>
        )
    }
    return(
        <div className="login-page">
            <form onSubmit={handleSubmit} className="login-form container">
                <ul>
                    <li className = "row"> 
                        <h1 className = "text-center mb-5">Sign In</h1>
                    </li>
                    <li className = "row">
                    <label htmlFor="email" className="form-label">Email:</label>
                   </li>
                    <li className = "row">
                        <span class = "col"></span>
                        <input type="email" className="form-control form-control-lg col" id="email" name="email" required />
                        <span className = "col"></span>
                    </li>
                    <li className = "row">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <br/>
                    </li>
                    <li className = "row">
                        <span className = "col"></span>
                        <input type="password" id="password" className="form-control form-control-lg col" name="password" required />
                        <span className = "col"></span>
                    </li>
                    <li>
                        <button type="submit" className="btn btn-outline-primary mb-2">login</button>
                    </li>
                    <li >
                        <p>Do not have an account?</p>
                    </li>
                    <li>
                        <Link to = '/register'>Register</Link>
                    </li>
                </ul>
            </form>
        </div> 
    )
}