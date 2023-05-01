import { fetchOrders, selectOrders } from "../account/AccountPage/AccountSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Orders(){
    let orders = useSelector(selectOrders);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchOrders());
    }, [dispatch])
    try{
        if(orders.length<1){
        return(
            <div>
                <h1>Orders</h1>
            </div>
        )
    }else{
        return(
            <div>
                {orders.map((order)=><li key = {order.id}>
                    <Link to = {order.id}>
                    <h3>order id: {order.id}</h3>
                    <p>amount: {order.amount}</p>
                    <p>date: {order.date}</p>
                    </Link>
                   </li>)}
            </div>
        )
    }
    }catch{
          return(
            <div>
                <h1>Your orders will be diplayed here. Please log in or register</h1>
                <Link to = "/login">Login</Link>
            </div>
        )
    }
 

}