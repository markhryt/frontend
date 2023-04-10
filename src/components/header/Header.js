import {useEffect } from "react";
import SearchBar from "../searchbar/SearchBar";
import { Link, useLocation} from "react-router-dom";
import { isLoged, selectUsername } from "./HeaderSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./navbar/Navbar";
function Header(){
    const dispatch = useDispatch();
    let userName = "";
    const location = useLocation();
    userName = useSelector(selectUsername);
    useEffect(()=>{
      dispatch(isLoged());
    });

    return(
        <header  key={location.pathname}>
        <h1 id='top-text'><span className='welcome'>Welcome,</span> <span className='dear'>dear {userName}</span></h1>
          <Navbar/>
          <div className='searchBar'>
           <SearchBar/>
         </div>
         <div className='account'>
          <Link to="/login"><button className='login'>login</button></Link>
         
        <Link to="/register"><button className='register'>register</button></Link>
         </div>
     </header>
    )
}

export default Header;