import React, { useState } from "react";
import { FaHeart } from "react-icons/fa"; // dùng icon trái tim
import "./ProductList.css";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const newArrival: Product[] = [
  { id: 1, name: "Apple iPhone 14 Pro Max 128GB Deep Purple", price: 900, image: "./src/image/Iphone 14 pro 1.png" },
  { id: 2, name: "Blackmagic Pocket Cinema Camera 6k", price: 2535, image: "./src/image/Iphone 14 pro 1 (1).png" },
  { id: 3, name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium", price: 399, image: "./src/image/Iphone 14 pro 1 (2).png" },
  { id: 4, name: "AirPods Max Silver", price: 549, image: "./src/image/Iphone 14 pro 1 (3).png" },
  { id: 5, name: "Samsung Galaxy Watch6 Classic 47mm Black", price: 369, image: "./src/image/Iphone 14 pro 1 (4).png" },
  { id: 6, name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black", price: 1799, image: "./src/image/Iphone 14 pro 1 (5).png" },
  { id: 7, name: "Galaxy Buds FE Graphite", price: 99.99, image: "./src/image/Iphone 14 pro 1 (6).png" },
  { id: 8, name: "Apple iPad 9 10.2\" 64GB Wi-Fi Silver (MK2L3) 2021", price: 398, image: "./src/image/Iphone 14 pro 1 (7).png" },
];

// Tạm dùng cùng data cho 3 tab
const bestseller = newArrival;
const featured = newArrival;

export default function ProductList() {
  const [activeTab, setActiveTab] = useState("New Arrival");
  const [favorites, setFavorites] = useState<number[]>([]);

  const getProducts = () => {
    if (activeTab === "New Arrival") return newArrival;
    if (activeTab === "Bestseller") return bestseller;
    return featured;
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="product-section">
      {/* Tabs */}
      <div className="tabs">
        {["New Arrival", "Bestseller", "Featured Products"].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {getProducts().map((product) => (
          <div key={product.id} className="product-card">
            {/* Favorite Icon */}
            <div
              className="favorite-icon"
              onClick={() => toggleFavorite(product.id)}
            >
              <FaHeart
                size={18}
                color={favorites.includes(product.id) ? "red" : "#ccc"}
              />
            </div>

            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p className="price">${product.price}</p>
            <button className="buy-btn">Mua ngay</button>
          </div>
        ))}
      </div>
    </div>
  );
}
