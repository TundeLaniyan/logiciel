import React, { useState } from "react";
import { Link } from "react-router-dom";
import importAll from "../../importAll";
import "./header.css";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const handleMenu = () => {
    setMobile((prev) => !prev);
  };

  return (
    <header>
      <Link to="/" className="logo-container">
        <img className="logo" alt="logiciel" src={importAll.logo} />
        <p className="logo-text">Logiciel solution</p>
      </Link>
      <Link className="desktop" to="/">
        Home
      </Link>
      <Link className="desktop" to="/jobsearch">
        Job search
      </Link>
      <Link className="desktop" to="/im-looking">
        Looking for work
      </Link>
      <Link className="desktop" to="/im-hiring">
        Submit a vacancy
      </Link>
      <Link className="desktop" to="/about-us">
        About us
      </Link>
      {/* <div className="header__btn mobile">&nbsp;</div> */}
      <div
        className={`container mobile ${mobile && "change"}`}
        onClick={handleMenu}
      >
        <div className={`bar1 ${mobile && "bar--active"}`}></div>
        <div className={`bar2 ${mobile && "bar--active"}`}></div>
        <div className={`bar3 ${mobile && "bar--active"}`}></div>
      </div>
      {mobile && (
        <div className={`header__mobile ${mobile && "change"}`}>
          <Link className="desktop" onClick={() => setMobile(false)} to="/">
            Home
          </Link>
          <Link
            className="desktop"
            onClick={() => setMobile(false)}
            to="/jobsearch"
          >
            Job search
          </Link>
          <Link
            className="desktop"
            onClick={() => setMobile(false)}
            to="/im-looking"
          >
            Looking for work
          </Link>
          <Link
            className="desktop"
            onClick={() => setMobile(false)}
            to="/im-hiring"
          >
            Submit a vacancy
          </Link>
          <Link
            className="desktop"
            onClick={() => setMobile(false)}
            to="/about-us"
          >
            About us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
