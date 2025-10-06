import React from "react";
import "./Header.css";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="logo"><img src="./src/image/Logo Vector.png" alt="" /></div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Tìm kiếm" />
      </div>
      <nav className="nav">
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
        <a href="/blog">Blog</a>
        <a href="/about">Giới thiệu</a>
        <a href="/contact">Liên hệ</a>
      </nav>
      <div className="header-icons">
        <FaUser />
        <FaHeart />
        <FaShoppingCart />
      </div>
    </header>
  );
}
