import SearchBar from "../searchbar/SearchBar";
import { useLocation} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import "./Header.css";
function Header(){
    const location = useLocation();
      return(
        <header  key={location.pathname}>
            <Navbar/>
          <div className="container">  
             
              <div className="row justify-content-center align-items-center">
                  <div className="col-md-12 text-center mb-5">
                    <h1>Style</h1>
                  </div>
                </div>
              
                <div className="row justify-content-center align-items-center mt-5 mb-5">
                  <div className="col-md-12 text-center mt-5">
                    <div>
                      <SearchBar className='d-flex justify-content-center'/>
                    </div>
                  </div>
                </div>
            </div>
         </header>
         )
    
}

export default Header;