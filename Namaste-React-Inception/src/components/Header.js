import logo from "../../logo.png";
import { useState} from "react"
import { Link } from "react-router-dom";
import useAvailableStatus from "../Utils/useAvailableStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login")
  const cartItems = useSelector ((store)=>store.cart.cartItems)
    return (
      <div className="header-container"> 
        <div className="logo-container">
          <img className="logo" src={logo} alt="alt-image" />
        </div>
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cart"><b>Cart {cartItems?.length}</b></Link></li>
            <button className="login-btn" onClick={()=>{btnName === "Login" ?setBtnName("Logout") : setBtnName("Login");}}>{btnName} { useAvailableStatus() ? "✔" : "🚫"}</button>
          </ul>
          
        </div>
      </div>
    );
  };

  export default Header;