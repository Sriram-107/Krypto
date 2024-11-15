import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <div className="flex-container">
      <p className="flex-item title">KRYPTO</p>
      <div className="flex-item">
        <p className="title">Krypto</p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Buy NFTs</li>
          <li>Sell NFTs</li>
        </ul>
      </div>
      <div className="flex-item">
        <p className="title">Market</p>
        <ul>
          <li>Browse NFTs</li>
          <li>Buy NFTs</li>
          <li>Sell NFTs</li>
        </ul>
      </div>
      <div className="flex-item">
        <p className="title">Contact</p>
        <ul>
          <li>Email</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="flex-item">
        <p className="title">Join our Newsletter</p>
        <div className="mail-input">
          <input type="email" id="email" placeholder="Email Address" />

          <button className="btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
