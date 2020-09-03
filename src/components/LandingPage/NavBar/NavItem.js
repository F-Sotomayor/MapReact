import React from "react";
import "./navbar.scss";

const NavItem = ({ href, icon }) => {
  return (
    <div className="social-item">
      <a href={href}>
        <i className={icon}></i>
      </a>
    </div>
  );
};

export default NavItem;
