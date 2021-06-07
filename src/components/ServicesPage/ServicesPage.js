import React from 'react'
import './ServicesPage.scss'

const ServicesPage = ({imageSrc}) => {
    return (
        <div className="services-wrapper">
            <img src={imageSrc} alt="Services" />
            <h2 className="services-title">Page with services</h2>
        </div>
    )
}

export default ServicesPage
