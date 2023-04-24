import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectAccountInfo, fetchUserInfo } from "./AccountSlice"
export default function AccountInfoPage(){
    let accountInfo = useSelector(selectAccountInfo);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUserInfo());
    },[dispatch]);
    if(!accountInfo){
        return(
            <div>
                <h1>Account Info</h1>
                <ul>
                    <li>userName: user</li>
                    <li>email: email</li>
                    <li>address: address</li>
                </ul>
            </div>
        )
    }else{
        return(
            <div>
                <h1>Account Info</h1>
                <ul>
                    <li>userName: {accountInfo.userName}</li>
                    <li>email: {accountInfo.email}</li>
                    <li>address: {accountInfo.address}</li>
                </ul>
            </div>
        )
    }
   
}