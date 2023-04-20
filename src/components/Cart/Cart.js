import { Link } from "react-router-dom";
function Cart(){
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
        console.log(cart);
            return(
                <div className="cart">
                    <h1>Cart</h1>
                    <ul>
                        {cart.map((item) => (
                        <li key={item.id}><Link to={`/cart/${item.id}`}>{item.name} x{item.amount}</Link>
                         <button>remove from cart</button></li>
                        ))}
                    </ul>
                </div>
            )
    }catch{
        return(
            <div className="cart">
                <h1>Cart</h1>
                <h2>Add items to cart to view them</h2>
            </div>
        )
    }

    
}

export default Cart;