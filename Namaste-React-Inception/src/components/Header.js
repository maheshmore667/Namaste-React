import logo from "../../logo.png";
import {useState} from "react"

const Header = () => {
  const [btnName, setBtnName] = useState("Login")
    return (
      <div className="header-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="alt-image" />
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{btnName === "Login" ?setBtnName("Logout") : setBtnName("Login");}}>{btnName}</button>
          </ul>
          
        </div>
      </div>
    );
  };

  export default Header;