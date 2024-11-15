import React from "react";
import "./index.css";
import { data } from "./assets/utils/testimonial";
import Card from "./Card";

export default function Testimonial() {
  return (
    <div className="testimonial-container">
      <p>TESTIMONIALS</p>
      <h2>Read What Others Have To Say</h2>
      <div className="card-flex-container">
        {data.map((item) => {
          return (
            <Card
              key={item.uid}
              imageSrc={item.imageSrc}
              username={item.username}
            />
          );
        })}
      </div>
    </div>
  );
}
