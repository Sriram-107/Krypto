import React from "react";

export default function Card({ imageSrc, username }) {
  return (
    <div className="card-container">
      <div className="blend-container">
        <img src={imageSrc} alt="profile image" />
      </div>
      <p className="content-heading">{username}</p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        ullamcorper scelerisque mi, in malesuada felis malesuada vel.{" "}
      </p>
    </div>
  );
}
