import React, { useState } from 'react'
import './appWrapper.css'
import { Outlet, NavLink } from 'react-router-dom'
export default function AppWrapper() {
  const [showBar, setShowBar] = useState(false)
  return (
    <div className='app-wrapper'>
      <nav>
        <div className="nav-brand">
          <h2>Famz <span>Bakery</span></h2>
        </div>
        <div className={`${showBar ? "active" : ""} nav-items`}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className="button-and-search">
          <i className='bx bx-search'></i>
          <button className="get-started">
            Get Started
          </button>
          {
            showBar && <div className="overlay" onClick={() => setShowBar(prev => !prev)}></div>
          }
          <i className='bx bx-menu' onClick={() => setShowBar(prev => !prev)}></i>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
