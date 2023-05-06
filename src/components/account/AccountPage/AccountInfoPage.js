import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectAccountInfo, fetchUserInfo } from "./AccountSlice"
import { selectIsLoggedIn } from "../login/LoginSlice";
import { Link } from "react-router-dom";
export default function AccountInfoPage(){
    const isLoggedIn = useSelector(selectIsLoggedIn);
    let accountInfo = useSelector(selectAccountInfo);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUserInfo());
    },[dispatch]);
    if(!isLoggedIn || !accountInfo){
        return(
            <div>
                <h2>Please Log in to view the account information</h2>
                <Link to = "/login">Login</Link>
            </div>
        )
    }else{
        return(
            <div className="account-info">
                <h1>Account Information</h1>
                <ul>
                    <li>User name:  <br/> {accountInfo.userName}</li>
                    <li>Email: <br/> {accountInfo.email}</li>
                    <li>address:  <br/> {accountInfo.address || 'none'}</li>
                </ul>
            </div>
        )
    }
   
}