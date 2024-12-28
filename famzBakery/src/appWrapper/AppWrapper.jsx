import React from 'react'
import './appWrapper.css'
export default function AppWrapper() {
  return (
    <div className='app-wrapper'>
      <nav>
        <div className="nav-brand">
          <h2>Famz <span>Bakery</span></h2>
        </div>
        <div className='nav-items'>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>Shop</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
        </div>
        <button className="get-started">
          Get Started
        </button>
      </nav>
      <main>

      </main>
    </div>
  )
}
