import React from "react";
import Logo from "../../assets/logo_odyssey.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo__container">
        <img src={Logo} alt="" className="navbar__logo" />
      </div>
      <div className="navbar__links">
        <div className="navbar__item">Bikes</div>
        <div className="navbar__item">Services</div>
        <div className="navbar__item">About</div>
      </div>
    </nav>
  );
};

export default Navbar;
