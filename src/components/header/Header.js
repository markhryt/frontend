import { useState, useEffect } from "react";
import SearchBar from "../searchbar/SearchBar";
function Header(){

    async function getUserName(){
        let data = await fetch( "http://localhost:3000/username");
        let response = await data.json();
        setUserName(response.userName);
      }
      let [userName, setUserName]= useState('Customer');
      useEffect(()=>{
        getUserName();
      }, [])
    return(
        <header>
        <h1 id='top-text'><span className='welcome'>Welcome,</span> <span className='dear'>dear {userName}</span></h1>
          <div className='searchBar'>
           <SearchBar/>
         </div>
         <div className='account'>
         <button className='login element'>login</button>

         <button className='register element'>register</button>

         </div>
     </header>
    )
}

export default Header;