import React from 'react'
import './ProductsPage.scss'

const ProductsPage = ({imageSource}) => {
    return (
        <div className="products-wrapper">
            <img src={imageSource} alt="products" />
            <h2 className="products-title">Page with products</h2>
        </div>
    )
}

export default ProductsPage
