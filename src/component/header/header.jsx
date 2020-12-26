import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/" className="logo-container">
          <img className="logo" src="img/logo.png" />
          <p className="logo-text">Logiciel solution</p>
        </Link>
        <Link to="/im-looking">Looking for work</Link>
        <Link to="/im-hiring">Submit a vacancy</Link>
        <Link to="/jobsearch">Job search</Link>
        {/* <Link to="/">Insight</Link>
        <Link to="/">Partners</Link> */}
        <Link to="/about-us">About us</Link>
      </div>
    </header>
  );
};

export default Header;
