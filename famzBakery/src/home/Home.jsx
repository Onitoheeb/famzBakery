import React from 'react'
import Hero from './hero/Hero'
import Product from './product/Product'
import About from './about/About'
export default function Home() {
  return (
    <div className='home-container'>
        <Hero />
        <Product />
        <About />
    </div>
  )
}
