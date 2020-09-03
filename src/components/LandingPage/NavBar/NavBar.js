import React from "react";
import "./navbar.scss";
import logo from "../../../images/logo.png";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="navbar-social">
        <NavItem href="http://www.facebook.com" icon="fab fa-facebook" />
        <NavItem href="http://www.instagram.com" icon="fab fa-instagram" />
        <NavItem href="http://www.twitter.com" icon="fab fa-twitter" />
      </div>
    </div>
  );
};

export default NavBar;
