import logo from "../../logo.png";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;