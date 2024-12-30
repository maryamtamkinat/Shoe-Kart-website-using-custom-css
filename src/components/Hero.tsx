"use client"

import React, { useEffect } from "react";
import "../app/styles/hero.css"

const Hero = () => {
  return (
    <section className="hero" style={{backgroundImage: "url('/hero.jpg')"}}>
      <div>
        <h1 className="fade-in">Step Into Our Exclusive Shoe Collection</h1>
        <p>Discover the Best Shoes for Every Occasion.</p>
        <button>Shop Now</button>
      </div>
    </section>
  )
}

export default Hero
