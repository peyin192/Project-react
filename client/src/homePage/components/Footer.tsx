import React from "react";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Banner chiếm full chiều ngang */}
      <div className="footer-banner">
        <img src="./src/image/Banner 2.png" alt="Ưu đãi mùa hè" />
      </div>

      {/* Footer content */}
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-logo">
            <span className="logo-icon">▿\</span> cyber
          </div>
          <p className="footer-desc">
            Chúng tôi cung cấp các sản phẩm công nghệ, giúp khách hàng thỏa sức
            trải nghiệm các dịch vụ, tiện ích nhanh chóng và hiệu quả.
          </p>
          <div className="footer-socials">
            <FaTwitter />
            <FaFacebookF />
            <FaTiktok />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-col">
          <h4>Dịch vụ</h4>
          <ul>
            <li>Chương trình khuyến mãi</li>
            <li>Gift cards</li>
            <li>Tín dụng và thanh toán</li>
            <li>Dịch vụ hợp đồng</li>
            <li>Ví tiền điện tử</li>
            <li>Thanh toán</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Hỗ trợ cho người mua</h4>
          <ul>
            <li>Tìm kiếm đơn đặt hàng</li>
            <li>Điều khoản giao hàng</li>
            <li>Trao đổi và trả hàng</li>
            <li>Chính sách bảo hành</li>
            <li>Câu hỏi thường gặp</li>
            <li>Chính sách và điều khoản</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
