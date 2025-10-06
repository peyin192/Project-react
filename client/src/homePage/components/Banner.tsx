import React from "react";
import Slider from "react-slick";
import "./Banner.css";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="slide">
          <img src="./src/image/Banner.png" alt="Banner 1" />
          <div className="banner-text">
            <h2>IPhone 14 Pro</h2>
            <p>Đột phá công nghệ mới nhất...</p>
            <button>Mua ngay</button>
          </div>
        </div>
        <div className="slide">
          <img src="./src/image/Banner.png" alt="Banner 2" />
        </div>
      </Slider>
    </div>
  );
}
