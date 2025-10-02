import React from "react";
import "./navbar.css";
import { FaBell } from "react-icons/fa";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-right">
          <button className="icon-btn"> <FaBell size={20} color="gray" /> </button>
          <img src="https://i.pravatar.cc/40" alt="avatar" className="avatar"/>
        </div>
      </div>
    );
  }
}

export default Navbar;
