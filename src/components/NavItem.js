import React from "react";
import "../styles/navbar.scss";

class NavItem extends React.Component {
  render() {
    return (
      <div className="social-item">
        <a href={this.props.href}>
          <i className={this.props.icon}></i>
        </a>
      </div>
    );
  }
}

export default NavItem;
