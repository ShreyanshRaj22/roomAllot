import React from "react";
import bannerImage from "../images/banner.jpg";
import "./banner.css"

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <img className="banner-image" src={bannerImage} alt="" />
        <div className="centered-text">
        <h1>Welcome to NIT Delhi </h1>
      </div>
      </div>
    </div>
  );
};

export default Banner;
