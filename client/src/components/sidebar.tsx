import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { FaHome } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { MdCategory } from "react-icons/md";class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h3 className="logo">Ecommerce</h3>
        <nav>
          <ul className="menu_siderbar">
            <li><NavLink to="/statistic" className={({ isActive }) => isActive ? "active" : ""}> <FaHome size={20} color="gray" />  Thống kê </NavLink></li>
            <li><NavLink to="/category" className={({ isActive }) => isActive ? "active" : ""}> <MdCategory size={20} color="gray" /> Danh mục </NavLink></li>
            <li><NavLink to="/product" className={({ isActive }) => isActive ? "active" : ""}> <FaFolder size={20} color="gray" /> Sản phẩm </NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
