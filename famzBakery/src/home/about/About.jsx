import React from 'react'
import './about.css'
export default function About() {
  return (
    <div className='about-container'>
        <div className="about-header">
            <h3>Our Story of Flour, <span>Family & Tradition</span></h3>
            <p>From our family's traditional recipes to your breakfast table, we're baking memories one slice at a time</p>
        </div>
        <div className="about-body">
            <section className="about-image">
                <img src="assets/About-image.jpg" alt="About image" />
            </section>
            <section className="about-text">
                <h4>The FamzStory</h4>
                <p>Our bakery stands on three core beliefs: quality ingredients make quality bread, traditional methods are worth preserving, and nothing brings people together like the warmth of fresh-baked goods. Each morning, our bakers arrive before dawn to prepare the day's offerings, using techniques passed down through generations and refined through modern expertise.</p>
                <p>Today, we proudly serve our local community while embracing innovation in our craft. Our dedication to quality remains unchanged, even as we grow and adapt to meet our customers' evolving tastes. Step into Famz Bakery, and become part of our continuing story.</p>
                <button>Read More</button>
            </section>
        </div>
    </div>
  )
}