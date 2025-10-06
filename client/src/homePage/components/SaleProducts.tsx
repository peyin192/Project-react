import React, { useState } from "react";
import "./SaleProducts.css";
import { FaHeart } from "react-icons/fa";


type SaleProduct = {
  id: number;
  name: string;
  oldPrice: number;
  newPrice: number;
  img: string;
  liked: boolean;
};

export default function SaleProducts() {
  const [sales, setSales] = useState<SaleProduct[]>([
    { id: 1, name: "iPhone 13 Pro", oldPrice: 999, newPrice: 849, img: "./src/image/Iphone 14 pro 1 (1).png", liked: false },
    { id: 2, name: "Airpods Pro", oldPrice: 249, newPrice: 199, img: "./src/image/Iphone 14 pro 1 (2).png", liked: false },
    { id: 3, name: "iPad Air", oldPrice: 599, newPrice: 529, img: "./src/image/Iphone 14 pro 1 (3).png", liked: false },
    { id: 4, name: "Apple Watch", oldPrice: 399, newPrice: 349, img: "./src/image/Iphone 14 pro 1 (4).png", liked: false },
  ]);

  const toggleLike = (id: number) => {
    setSales(prev =>
      prev.map(item =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <section className="product-section">
      <h3>Sản phẩm giảm giá</h3>
      <div className="product-grid">
        {sales.map(s => (
          <div key={s.id} className="product-card">
            <div className="favorite-icon" onClick={() => toggleLike(s.id)}>
              <FaHeart color={s.liked ? "red" : "#ccc"} />
            </div>
            <img src={s.img} alt={s.name} />
            <h4>{s.name}</h4>
            <p className="old-price">${s.oldPrice}</p>
            <p className="new-price">${s.newPrice}</p>
            <button className="buy-btn">Mua ngay</button>
          </div>
        ))}
      </div>
    </section>
  );
}