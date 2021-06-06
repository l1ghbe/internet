import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({src, title, path, label}) => {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item-link" to={path}>
                    <div className="cards__item-picture" data-category={label}>
                        <img src={src} alt="" className="cards__item-img" />
                    </div>
                    <div className="cards__item-info">
                        <h5 className="cards__item-text">{title}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
