import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  /**
   * useState is always used inside function component
   * never declare useState inside if-else condition. or for loop
   * not even functions
   */
  const [btnName, setBtnName] = useState("Login");

  /**
   * If no dependency array, use effect is called at every render
   * If we provide empty array [], then use effect will be called only once -> only initial render
   * If we add a dependency in array, use effect will be called each time the dependency changes
   */
  useEffect(() => {
    console.log("Use effect called");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
