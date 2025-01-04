import React from 'react'
import './hero.css'
export default function Hero() {
  return (
    <div className='hero-container'>
      <div className="hero-image">
        <img src="assets/hero-image.png" alt="hero-image" />
        <h1>Freshness</h1>
      </div>
      <div className="hero-wrapper">
        <h1>
          Experience the Warmth and Flavour of Artisan Bread at <span>Our Bakery</span>
        </h1>
        <button className="hero-button">Explore Flavours</button>
      </div>
    </div>
  )
}
