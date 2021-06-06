import React from 'react'
import Button from '../UI/Button/Button'
import './ContactBanner.scss'

const ContactBanner = () => {
    return (
        <div className="contact-banner">
            <h2>Liked it? Contact us!</h2>
            <Button btnStyle="btn-primary" ownClass="btn-contact" sizeBtn="btn-large">Contact Us</Button>
        </div>
    )
}

export default ContactBanner
