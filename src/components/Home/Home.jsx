import React from "react";
import "./index.css";
import Navbar from "../NavBar/Navbar";
import FeaturedOn from "../FeaturedOn/FeaturedOn";
import Discover from "../Discover/Discover";
import Footer from "../Footer/Footer";
import Started from "../Started/Started";
import Testimonial from "../Testimonial/Testimonial";
import Analytics from "../Analytics/Analytics";
import GetApp from "../GetApp/GetApp";

export default function Home() {
  return (
    <div className="main-container">
      <Navbar />
      <Discover />
      <FeaturedOn />
      <Analytics />
      <GetApp />
      <Testimonial />
      <Started />
      <Footer />
    </div>
  );
}
