import React, { useRef } from "react";
import "./Categories.css";

const categories = [
  "Điện thoại",
  "Đồng hồ",
  "Cameras",
  "Tai nghe",
  "Máy tính",
  "Gaming",
  "Tablet",
  "Phụ kiện",
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="categories">
      <div className="categories-header">
        <h3>Danh mục sản phẩm</h3>
        <div className="categories-controls">
          <button className="scroll-btn" onClick={scrollLeft}>
            &#8249;
          </button>
          <button className="scroll-btn" onClick={scrollRight}>
            &#8250;
          </button>
        </div>
      </div>

      <div className="category-list" ref={scrollRef}>
        {categories.map((cat, idx) => (
          <div key={idx} className="category-card">
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}
