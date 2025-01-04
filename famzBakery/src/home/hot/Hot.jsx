import React from 'react'
import './hot.css'
import hotProducts from './data'
import ProductCard from '../product/productCard/ProductCard'

export default function Hot() {
  return (
    <div className='hot-container'>
        <div className="hot-header">
            <h3>Fresh From Our <span>Ovens</span></h3>
            <p>Discover our master bakers' most celebrated creations, handcrafted daily with premium ingredients and years of expertise</p>
        </div>
        <div className="hot-body">
            <section className="hot-product">
                {
                    hotProducts && hotProducts.map((product) => (
                        <ProductCard image={product.image} name={product.name} price={product.price} description={product.description} />
                    ))
                }
            </section>
        </div>
    </div>
  )
}
