import { useDispatch, useSelector } from "react-redux";
import { registerUser, selectUserData } from "./RegisterSlice";
import { useNavigate } from "react-router";
export default function Verifyemail(){
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
    return(
        <div>
        <h1>Verify email</h1>
        <form onSubmit={handleConfirm}>
        <label>Confirmation Code</label>
        <input
          type="number"
          id="code"
          name="code"
          min = '10000'
          max = '99999'
          required/>

        <button type="submit">Confirm</button>
      </form>
        </div>
    )
}