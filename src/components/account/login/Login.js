import {login} from "./LoginSlice"
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
export default function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleSubmit(event) {
        event.preventDefault();
        const userData = {
          email: event.target.email.value,
          password: event.target.password.value
        };
        console.log(JSON.stringify(userData));
        navigate('/');
        dispatch(login(userData));
        
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">login</button>
            </form>
        </div> 
    )
}