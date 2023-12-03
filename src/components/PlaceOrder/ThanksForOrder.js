import { Link } from "react-router-dom";
export default function ThanksForOrder(){
    sessionStorage.clear();
    return( 

        <div className = 'thanks text-center'>
            <h1>Thank You for order!</h1>
            <Link to = '/products'>Continue shopping</Link>
        </div>
    )
}