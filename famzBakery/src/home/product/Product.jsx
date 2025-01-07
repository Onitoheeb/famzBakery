import React from 'react'
import './product.css'
import ProductCard from './productCard/ProductCard'
import breadProducts from './data'
export default function () {
    return (
        <div className='product-container'>
            <h3>Our Products</h3>
            <div className="product-header">
                <ul>
                    <li>All product</li>
                    <li>Bread</li>
                    <li>Cafe</li>
                    <li>Cookies</li>
                    <li>Others</li>
                </ul>
            </div>
            <div className="product-body">
                {
                    breadProducts.length > 0 ? (
                        breadProducts.map((products) => (
                            <ProductCard key={products.id} name={products.name} description={products.description} image={products.image} price={products.price} />
                        ))
                    )
                        : (
                            <p>not found</p>
                        )
                }
            </div>
        </div>
    )
}
