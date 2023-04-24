import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectOrderDescription, fetchOrderDescription } from "./OrderDescriptionSlice";
export default function OrderPage(){
    const dispatch = useDispatch();
    let orderDescription = useSelector(selectOrderDescription);
    const {id} = useParams();
    useEffect(()=>{
        dispatch(fetchOrderDescription(id));
    }, [dispatch]);
    if(!orderDescription){
        return(
            <div>
                <h1>Order {id}</h1>
            </div>
        )
    }else{
        return(
            <div>
                <h1>Order {id}</h1>
            </div>
        )
    }
   
}