import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logoContainr">
          {/* Add your logo or branding here */}
        </div>
        <ul>
          {/* Navigation links (uncomment and adjust as needed) */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <Link to="/about">About</Link> */}
          </li>
          <li>
            {/* <Link to="/contact">Contact</Link> */}
          </li>
        </ul>
      </nav>

    </>
  );
};

export default NavBar;
