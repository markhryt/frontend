import { Link } from "react-router-dom";

export default function ThanksForOrder(){
    return( 
        <div className = 'thanks'>
            <h1>Thank You for order!</h1>
            <Link to = '/products'>Continue shopping</Link>
        </div>
    )
}