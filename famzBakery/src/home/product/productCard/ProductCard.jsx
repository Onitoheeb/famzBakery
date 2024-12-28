import React from 'react'
import './product-card.css'
export default function ProductCard({image, name, description, price}) {
    return (
        <div className='product-card'>
            <div className="product-image">
                <img src={image} alt="product bread" />
            </div>
            <div className="product-card-body">
                <h4 className="product-name">{name}</h4>
                <div className="price">
                    ${price}
                </div>
                <p className="card-description">
                    {description}
                </p>
                <div className="review-and-price">
                    <div className="review">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half' ></i>
                    </div>
                    <button>Buy now</button>
                </div>
            </div>
        </div>
    )
}
