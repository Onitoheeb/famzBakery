import React from 'react'
import Hero from './hero/Hero'
import Product from './product/Product'
export default function Home() {
  return (
    <div className='home-container'>
        <Hero />
        <Product />
    </div>
  )
}
