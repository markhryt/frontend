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
    if(!orders.length){
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
                    </Link>
                   </li>)}
            </div>
        )
    }

}