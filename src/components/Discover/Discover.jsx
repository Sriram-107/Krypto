import React from "react";
import pcImage from "./assets/pc-img.png";
import CustomButton from "../CustomButton/CustomButton";
import "./index.css";
export default function Discover() {
  return (
    <>
      <div className="discover-container">
        <div className="content">
          <h1>Discover And Collect Rare NFTs</h1>
          <p className="description">
            The most secure marketplace for buying and selling unique crypto
            assets.
          </p>
          <div className="btn-container">
            <CustomButton btnContent="BUY NFTS" bgColor="#8F8FDB" />
            <CustomButton btnContent="SELL NFTS" border="1px solid #83cece" />
          </div>
        </div>
        <img src={pcImage} alt="pc image" loading="lazy" id="pc" />
      </div>
    </>
  );
}
