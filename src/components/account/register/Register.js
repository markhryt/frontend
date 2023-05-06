import { useDispatch, useSelector } from 'react-redux';
import {
  setUserData,
  verifyemail
} from './RegisterSlice';
import { Link, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../login/LoginSlice';

export default function RegistrationForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let isLoggedIn = false
    isLoggedIn = useSelector(selectIsLoggedIn);
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('verifyemail');
        const userData = {
            email: event.target.email.value,
            password: event.target.password.value,
            address: event.target.address.value,
            full_name: event.target.full_name.value,
          };

        dispatch(setUserData(userData));
        dispatch(verifyemail(userData.email));
    };
    if(isLoggedIn){
      return(
        <div>
          <h1>You are Logged In</h1>
        </div>
      )
    }
    return (
    <div className='register-page'>
      <form onSubmit={handleSubmit}>
        <ul className='registration-form'>
        <h1>Register</h1>
        <li>
        <label htmlFor="email">Email:*</label>
        <br/>
        <input
          type="email"
          id="email"
          name="email"
          required />
        </li>
   
        <li>
        <label htmlFor="full_name">Full Name: *</label>
        <br/>
        <input
          type="text"
          id="full_name"
          name="full_name"
          required/>
        </li>
 
        <li>
        <label htmlFor="address">Address:</label>
        <br/>
        <input
          type="text"
          id="address"
          name="address"
        />
        </li>

        <li>
        <label htmlFor="password">Password:*</label>
        <br/>
        <input
          type="password"
          id="password"
          name="password"
          required
        />
        </li>

        <button type="submit">Register</button>
        <p>Already got an account?</p>
      <Link to="/login">Login</Link>
        </ul>
      </form>


    </div>
  );
}
