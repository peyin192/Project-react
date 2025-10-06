import React from "react";
import "./PromoBanner.css";

export default function PromoBanner() {
  return (
    <div className="promo-banner">
      <div className="promo-content">
        <h2>Ưu đãi mùa hè</h2>
        <p>Nhanh tay săn đón các sản phẩm chất lượng</p>
        <button className="promo-btn">Mua ngay</button>
      </div>
      <div className="promo-images">
        <img src="/images/phone.png" alt="Điện thoại" />
        <img src="/images/tablet.png" alt="Máy tính bảng" />
        <img src="/images/watch.png" alt="Đồng hồ" />
      </div>
    </div>
  );
}
