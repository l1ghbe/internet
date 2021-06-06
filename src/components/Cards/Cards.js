import React from 'react'
// import { Link } from 'react-router-dom'
import './Cards.css'
import CardItem from './CardItem'

const Cards = () => {
    return (
        <div className="cards">
            <h1>Lorem ipsum dolor sit amet consectetur </h1>
            <div className="cards-container">
                <div className="cards__row">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-9.jpg"
                            path="/services"
                            title="Look at that! Look at that! Look at that! Look at that! Look at that!"
                            label="Somethin"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            path="/services"
                            title="Look at that!"
                            label="Somethin"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-1.jpg"
                            path="/services"
                            title="Look at that! Look at that! Look at that! Look at that! Look at that!"
                            label="Somethin"
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            path="/services"
                            title="Look at that!"
                            label="Somethin"
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            path="/services"
                            title="Look at that!"
                            label="Somethin"
                        />
                        <CardItem
                            src="images/img-6.jpg"
                            path="/services"
                            title="Look at that!"
                            label="Somethin"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
