import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '../UI/Button/Button'
import './Navbar.scss'

const Navbar = () => {

    const [toggle, setToggle] = useState(true)
    // const [burger, setBurger] = useState(false)
    // const [menu, setMenu] = useState(true)
    const [activeHeader, setActiveHeader] = useState(false)

    // const showBurger = () => {
    //     if (window.innerWidth <= 768) {
    //         setBurger(true)
    //     } else {
    //         setBurger(false)
    //     }
    // }

    // useEffect(() => {
    //     showBurger()
    // }, [])

    const showHeader = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            setActiveHeader(true)
        } else {
            setActiveHeader(false)
        }
    }
    

    window.addEventListener('scroll', showHeader)



    return (
        <>
            <nav className={activeHeader ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link className="navbar-logo" to="/">Here u go</Link>
                    <ul className={toggle ? 'navbar-menu' : 'navbar-menu active'}>
                        <li className="navbar-menu__item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="navbar-menu__item">
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="navbar-menu__item">
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                    <Button btnStyle="btn-outlined" ownClass="btn-sign-up">SIGN UP</Button>
                    <div onClick={() => setToggle(prev => !prev)} className={toggle ? 'menu-icon' : 'menu-icon active'}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>   
        </>
    )
}

export default Navbar
