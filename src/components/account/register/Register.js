import { useDispatch, useSelector } from 'react-redux';
import {
  registerUser
} from './RegisterSlice';
import { Link, useNavigate } from 'react-router-dom';


export default function RegistrationForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
        const userData = {
            email: event.target.email.value,
            full_name: event.target.full_name.value,
            address: event.target.address.value,
            password: event.target.password.value,
          };
        // dispatch an action to register the user
        dispatch(registerUser(userData))
    };

    return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required />

        <label htmlFor="full_name">Full Name:</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          required/>

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
        />

        <button type="submit">Register</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}
