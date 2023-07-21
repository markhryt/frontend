import { Link } from "react-router-dom";
import { removeItem, selectCart } from "./CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function Cart(){
    const dispatch = useDispatch();
    let cartItems = useSelector(selectCart);
    function updateStorage(){
        sessionStorage.setItem('cart', JSON.stringify({items:cartItems}));
    }
    useEffect(()=>{
        updateStorage();
    })
    const handleRemoveItem = (event)=>{
        dispatch(removeItem({idToRemove: event.target.value, cart: cartItems}));
        updateStorage();
        window.location.reload();
    }

    const countItems = (items) => {
        const itemCounts = {};
        items.forEach((item) => {
          const { id, name } = item;
          if (itemCounts[id]) {
            itemCounts[id].amount += 1;
          } else {
            itemCounts[id] = { id, name, amount: 1 };
          }
        });
        return Object.values(itemCounts);
    };
    let cartStore = JSON.parse(sessionStorage.getItem('cart'));
    
    try{
        let cart = countItems(cartStore.items);
        if(cart.length){
            return(
                <div className="cart">
                    <h1>Cart</h1>
                    <ul>
                        {cart.map((item) => (
                        <li key={item.id}><Link to={`/cart/${item.id}`}>{item.name} x{item.amount}</Link>
                         <button onClick={handleRemoveItem} value = {item.id}>remove from cart</button></li>
                        ))}
                    </ul>
                    <Link to = 'placeorder'>Place order</Link>
                </div>
            )
        }else{
            return(
                <div className="cart">
                    <h1>Cart</h1>
                    <h2>Add items to cart to view them</h2>
                </div>
            )
        }
            
    }catch{
        return(
            <div className="cart">
                <h1>Cart</h1>
                <h2>Something went wrong</h2>
            </div>
        )
    }

    
}

export default Cart;