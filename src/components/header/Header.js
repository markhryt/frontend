import {useEffect } from "react";
import SearchBar from "../searchbar/SearchBar";
import { Link, useLocation} from "react-router-dom";
import { isLoged, selectUsername } from "./HeaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, isUserLoggedIn } from "../account/login/LoginSlice";
import Navbar from "./navbar/Navbar";
function Header(){
    const dispatch = useDispatch();
    const location = useLocation();
    let userName = useSelector(selectUsername);
    let isLoggedIn = useSelector(selectIsLoggedIn);
    useEffect(()=>{
      dispatch(isLoged());
    }, [dispatch]);
    useEffect(()=>{
      setTimeout(()=>{
        dispatch(isUserLoggedIn());
      }, 1000)
    }, [dispatch]);
    if(!isLoggedIn){
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
    }else{
      return(
        <header  key={location.pathname}>
            <h1 id='top-text'><span className='welcome'>Welcome,</span> <span className='dear'>dear {userName}</span></h1>
              <Navbar/>
              <div className='searchBar'>
               <SearchBar/>
              </div>
              <div className='account'>
                <Link to="/logout"><button className="register">logout</button></Link>
              </div>
         </header>
         )
    }
    
}

export default Header;