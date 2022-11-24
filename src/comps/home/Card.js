import React from 'react';
import '../../static/home/card.css'

function Card(props) {
    const {img, price, rating, brand} = props

    return (
        <div className="card">
            <div className="card_cont">
                <div className="card_img">
                    <img className="card_img_cont" src={img} alt={brand} />
                </div>
                <div className="brand">
                    <p>{brand}</p>
                </div>
                <div className="ratings">
                    <p>rating: {rating}</p>
                </div>
                <div className="price">
                    <p>price: {price} rs.</p>
                </div>
            </div>
        </div>
    )
}

export default Card