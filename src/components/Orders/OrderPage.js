import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectOrderDescription, fetchOrderDescription } from "./OrderDescriptionSlice";
export default function OrderPage(){
    const dispatch = useDispatch();
    let orderDescription = useSelector(selectOrderDescription);
    const params = useParams();
    const id = params.id;
    const countItems = (items) => {
        const itemCounts = {};
        items.forEach((item) => {
          const { product_id } = item;
          if (itemCounts[product_id]) {
            itemCounts[product_id].amount += 1;
          } else {
            itemCounts[product_id] = { product_id, amount: 1, name: item.name, id: item.id};
          }
        });
        return Object.values(itemCounts);
    };
    useEffect(()=>{
        dispatch(fetchOrderDescription(id));
    }, [dispatch, id]);
    if(!orderDescription){
        return(
            <div>
                <h1>Order {id}</h1>
            </div>
        )
    }else{
           let organizedDescription=countItems(orderDescription);
            return(
                <div className="order-page">
                    <h1>Order {id}</h1>
                    <ul>
                            {organizedDescription.map((item) => (
                            <li key={item.id}>Name: {item.name}, quantity: {item.amount}, id: {item.id}</li>
                            ))}
                        </ul>
                </div>
            )
        }
       
   
}