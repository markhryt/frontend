import { useDispatch,  useSelector} from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import {useEffect } from "react";
import { isLoged, selectUsername } from "../HeaderSlice";
import { selectIsLoggedIn, isUserLoggedIn } from "../../account/login/LoginSlice";
const loginImagePath = "https://cdn.iconscout.com/icon/premium/png-256-thumb/login-2651140-2198240.png";
const registerImagePath = "https://static.thenounproject.com/png/736543-200.png";
const cartImagePath = "https://cdn-icons-png.flaticon.com/512/126/126083.png";
const logoutImagePath = "https://cdn.icon-icons.com/icons2/2518/PNG/512/logout_icon_151219.png";
const accountImagePath = "https://cdn-icons-png.flaticon.com/512/1144/1144760.png";
function Navbar(){
    const dispatch = useDispatch();
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
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/"><Link to="/">Home</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/products"><Link to="/products">Products</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/categories"><Link to="/categories">Categories</Link></a>
              </li>
            </ul>
      
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/cart">
                  <Link to="/cart">Cart<img src={cartImagePath} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  <Link to="/login">Login<img src={loginImagePath} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/register">
                  <Link to="/register">Register<img src={registerImagePath} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    )
    }else{
        return(
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/"><Link to="/">Home</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/products"><Link to="/products">Products</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/categories"><Link to="/categories">Categories</Link></a>
              </li>
            </ul>
      
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/cart">
                  <Link to="/cart">Cart<img src={cartImagePath} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  <Link to="/account">{userName} <span width = "5"/><img src={accountImagePath} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  <Link to="/logout">Logout<img src={logoutImagePath} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    )
    }

}

export default Navbar;