import React from "react";
import logo1 from "./assets/logo-1.png";
import logo2 from "./assets/logo-2.png";
import logo3 from "./assets/logo-3.png";
import logo4 from "./assets/logo-4.png";
import "./index.css";

export default function FeaturedOn() {
  return (
    <div className="featured">
      <h1 className="content-heading">FEATURED ON</h1>
      <div className="logo-container">
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
        <img src={logo3} alt="logo" />
        <img src={logo4} alt="logo" />
      </div>
    </div>
  );
}
