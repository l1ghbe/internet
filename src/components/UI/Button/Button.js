import React from 'react'
import {Link} from 'react-router-dom'
import './Button.scss'

const Button = ({children, ownClass = '', btnStyle, sizeBtn}) => {

    const styles = ['btn-primary', 'btn-outlined']
    const size = ['btn-medium', 'btn-small', 'btn-large']

    const classNameCheck = styles.includes(btnStyle) ? btnStyle : styles[0]
    const btnSizeCheck = size.includes(sizeBtn) ? sizeBtn : size[0]

    return (
        <Link to='/sign-up' className="btn-mobile">
            <button className={`btn ${classNameCheck} ${btnSizeCheck} ${ownClass}`}>
                {children}
            </button>
        </Link>
    )
}

export default Button
