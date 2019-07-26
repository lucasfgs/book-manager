import React from "react";
import { Link } from "react-router-dom";
import * as Routes from "../constants/routes";

function Nav() {
  const navStyle = {
    color: "white",
    textDecoration: "none"
  };

  return (
    <nav className="nav-bar">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to={Routes.HOME}>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to={Routes.LOGIN}>
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
