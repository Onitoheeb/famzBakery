import React from 'react'
import './appWrapper.css'
import { Outlet } from 'react-router-dom'
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
        <div className="button-and-search">
          <i className='bx bx-search'></i>
          <button className="get-started">
            Get Started
          </button>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
