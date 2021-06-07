import React from 'react'
// import { Link } from 'react-router-dom'
import './Cards.scss'
import CardItem from './CardItem'

const Cards = () => {
    return (
        <div className="cards">
            <h1>Latest news from the world of events </h1>
            <div className="cards-container">
                <div className="cards__row">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-9.jpg"
                            path="/services"
                            title="Unforgettable adventures around the globe at incredible speed!"
                            label="Adventure"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            path="/services"
                            title="Unimaginable impressions of communicating with family and friends from anywhere in the world!"
                            label="Communication"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-1.jpg"
                            path="/services"
                            title="Visiting different places"
                            label="Travelling"
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            path="/services"
                            title="Introduction of artificial intelligence!"
                            label="Neural networks"
                        />
                        <CardItem
                            src="images/img-5.jpg"
                            path="/services"
                            title="Creation of new software!"
                            label="IT"
                        />
                        <CardItem
                            src="images/img-6.jpg"
                            path="/services"
                            title="Other things about the world"
                            label="Other"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
