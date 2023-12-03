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
        <div className='text-center'>
          <h1>You are Logged In</h1>
          <Link to = "/">Home</Link>
        </div>
      )
    }
    return (
      <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form container">
          <ul>
              <li className = "row"> 
                  <h1 className = "text-center mb-5">Sign Up</h1>
              </li>
              <li className = "row">
              <label htmlFor="email" className="form-label">Email:</label>
             </li>
             <li class = "row">
                  <span className = "col"></span>
                  <input type="email" 
                  className="form-control form-control-lg col" 
                  id="email" name="email" 
                  required />
                  <span className = "col"></span>
              </li>
              <li className = "row">
                <label htmlFor="full_name" className= "form-label">Full Name:</label>
                <br/>
              </li>
              <li className = "row">
                  <span class = "col"></span>
                    <input
                  className="form-control form-control-lg col"
                  type="text"
                  id="full_name"
                  name="full_name"
                  required/>
                  <span class = "col"></span>
              </li>
              <li className = "row">
                <label htmlFor="address" className= "form-label">Address: </label>
                <br/>
              </li>
              <li class = "row">
                  <span className = "col"></span>
                    <input
                    className="form-control form-control-lg col"
                    type="text"
                    id="address"
                    name="address"
                    required/>
                  <span class = "col"></span>
              </li>
              <li className = "row">
              <label htmlFor="password" className="form-label">Password:</label>
              <br/>
              </li>
              <li className = "row">
                  <span className = "col"></span>
                  <input type="password" 
                  id="password" className="form-control form-control-lg col" 
                  name="password" 
                  required />
                  <span className = "col"></span>
              </li>
              <li>
                  <button type="submit" className="btn btn-outline-success mb-2">Sign Up</button>
              </li>
              <li >
                  <p>Already got an account?</p>
              </li>
              <li >
                  <Link to = '/login'>Login</Link>
              </li>
          </ul>
      </form>
  </div> 
  );
}
