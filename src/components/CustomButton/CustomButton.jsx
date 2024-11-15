import React from "react";
import "./index.css";

export default function CustomButton({ btnContent, bgColor, border, height }) {
  return (
    <>
      <button
        className="cust-btn"
        style={{
          background: bgColor || "none",
          border: border || "none",
          height: height,
        }}
      >
        {btnContent}
      </button>
    </>
  );
}
