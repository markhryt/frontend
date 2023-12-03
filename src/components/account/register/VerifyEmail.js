import { useDispatch, useSelector } from "react-redux";
import { registerUser, selectUserData } from "./RegisterSlice";
import { useNavigate } from "react-router";
import { selectIsLoggedIn } from "../login/LoginSlice";
import "./VerifyEmail.css";
export default function Verifyemail(){
  let isLoggedIn = false;
  isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let userData = useSelector(selectUserData);
  function handleConfirm(event){
    event.preventDefault();
    dispatch(registerUser({
      userData,
      confirmationCode: event.target.code.value}));
    navigate('postconfirm')

  }
  if(isLoggedIn){
    return(
      <div>
        <h1>
        You are Logged In
        </h1>
      </div>
    )
  }
    return(
        <div className="verify-email">
        <h1>Verify email</h1>
        <form onSubmit={handleConfirm}>
        <label>We have sent a Confirmation Code to your email</label>
        <input
          className="form-control form-control-lg col"
          type="number"
          id="code"
          name="code"
          min = '10000'
          max = '99999'
          required/>

        <button type="submit" class = "btn btn-secondary">Confirm</button>
      </form>
        </div>
    )
}