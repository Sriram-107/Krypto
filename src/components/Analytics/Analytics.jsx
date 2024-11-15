import React from "react";
import "./index.css";
import analytics from "./assets/analytics.png";
import Content from "../Content/Content";
export default function Analytics() {
  return (
    <div className="analytics-container">
      <img src={analytics} alt="" srcset="" />
      <Content
        contentHeading="ANALYTICS"
        heading="Built-In Analytics To Track Your Nfts"
        description=" Use our built-in analytics dashboard to pull valuable insights and
          monitor the value of your Krypto portfolio over time."
        btnText="VIEW OUR PRICING"
        bgColor="#8F8FDB"
      />
    </div>
  );
}
