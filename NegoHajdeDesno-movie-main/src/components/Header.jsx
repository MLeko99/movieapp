import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <h1 className="logo">Movie App</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/FavsPage">Favorites</Link>
          </li>
          <li>
            <Link to="/SignIn">Sign in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
