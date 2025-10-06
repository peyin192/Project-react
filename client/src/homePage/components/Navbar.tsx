import React from "react";
import { FaMobileAlt, FaLaptop, FaCamera, FaHeadphones, FaGamepad } from "react-icons/fa";
import { MdWatch } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <FaMobileAlt className="icon" /> Điện thoại
        </li>
        <li>
          <FaLaptop className="icon" /> Laptop
        </li>
        <li>
          <MdWatch className="icon" /> Đồng hồ thông minh
        </li>
        <li>
          <FaCamera className="icon" /> Cameras
        </li>
        <li>
          <FaHeadphones className="icon" /> Tai nghe
        </li>
        <li>
          <FaGamepad className="icon" /> Gaming
        </li>
      </ul>
    </nav>
  );
}
