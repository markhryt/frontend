import { Link } from "react-router-dom";
function Cart(){
    let cart = JSON.parse(sessionStorage.getItem('cart')).items;

    return(
        <div className="cart">
            <h1>Cart</h1>
            <ul>
                {cart.map((item) => (
                <li key={item.id}><Link to={`/cart/${item.id}`}>{item.name}</Link>
                 <button>add to cart</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Cart;