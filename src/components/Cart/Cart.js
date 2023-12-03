import { Link } from "react-router-dom";
import { removeItem, selectCart, addItem } from "./CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./Cart.css"

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
    }
    const handleAddToCart = (event) => {
        let idToRemove = event.target.value;
        let index = cartItems.findIndex(item => item.id === Number(idToRemove));
        dispatch(addItem(cartItems[index]));
        updateStorage();
      }

    const countItems = (items) => {
        const itemCounts = {};
        items.forEach((item) => {
            const img_url = item.img_url;
            const { id, name } = item;
        
            if (itemCounts[id]) {
                itemCounts[id].amount += 1;
            } else {
                itemCounts[id] = { id, name, amount: 1, img_url };
            }
        });
        return Object.values(itemCounts);
    };
    let cartStore = JSON.parse(sessionStorage.getItem('cart'));
    
    try{
        let cart = countItems(cartStore.items);
        if(cart.length){
            return(
                <div className="cart container">
                    <h1 className="row text-center"><p>Cart</p></h1>
                    <div className="row">
                        <span className="col-md-3"/>
                        <ul className="col-md">
                            {cart.map((item) => (
                            <li key={item.id}>
                                <div className = "container">
                                    <Link className="row" to={`/cart/${item.id}`}><p>{item.name.toUpperCase()}</p></Link>
                                    <div className="row">
                                        <img className="col" src = {item.img_url} alt = "cart"/>
                                        <h6 className="col-8 text-left"><p></p>Quantity: {item.amount}</h6>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <button className="col btn btn-success"  onClick={handleAddToCart} value = {item.id}>+</button>
                                        <button className="col btn btn-danger"  onClick={handleRemoveItem} value = {item.id}>-</button>
                                    </div>
                                
                                    
                                </div>
                                </li>
                                 ))}
                        </ul>
                        <span className="col-md-3"/>

                    </div>
                    <br/>
                    <div className="row">
                        <span className="col"/>
                        <Link className="col text-center" to = 'placeorder'><button className="btn btn-light btn-lg mb-5">Proceed With Purchase</button></Link>
                        <span className="col"/>
                    </div>
               </div>
            )
        }else{
            return(
                <div className="cart text-center">
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