import {login} from "./LoginSlice"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from "./LoginSlice";
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
            <div>
                <h1>You are Logged In</h1>
                <Link to = "/logout">Logout</Link>
            </div>
        )
    }
    return(
        <div className="login-page">
            <form onSubmit={handleSubmit} className="login-form">
            <h1>Login</h1>
                <ul>
                    <li>
                    <label htmlFor="email">Email:</label>
                    <br/>
                    <input type="email" id="email" name="email" required />
                    </li>
                    <li>
                    <label htmlFor="password">Password:</label>
                    <br/>
                    <input type="password" id="password" name="password" required />
                    </li>
                </ul>
                <button type="submit">login</button>
                <p>Do not have an account?</p>
                <Link to = '/register'>Register</Link>
            </form>
        </div> 
    )
}