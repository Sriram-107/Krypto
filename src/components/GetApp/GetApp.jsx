import React from "react";
import mobile from "./assets/mobile.png";
import Content from "../Content/Content";
export default function GetApp() {
  return (
    <div className="analytics-container">
      <Content
        contentHeading="GET OUR APP"
        heading="Browse Nfts From Your Smartphone"
        description=" Our Krypto app is the easiest way to keep track of your assets when you’re on the go."
        btnText="DOWNLOAD ON IOS"
        bgColor="#8F8FDB"
      />
      <img src={mobile} alt="" srcset="" />
    </div>
  );
}
