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
    const date = new Date().toISOString().slice(0, 10);
    console.log(date);
    if(!isLoggedIn || !accountInfo){
        return(
            <div>
                <h2>Please Log in to view the account information</h2>
                <Link to = "/login">Login</Link>
            </div>
        )
    }else{
        return(
            <div>
                <h1>Account Info</h1>
                <ul>
                    <li>user name: {accountInfo.userName}</li>
                    <li>email: {accountInfo.email}</li>
                    <li>address: {accountInfo.address}</li>
                </ul>
            </div>
        )
    }
   
}