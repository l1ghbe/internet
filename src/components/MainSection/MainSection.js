import React from 'react'
import Button from '../UI/Button/Button'
import './MainSection.scss'

const MainSection = () => {
    return (
        <section className="main-section">
            <video src="./videos/video-2.mp4" autoPlay loop muted></video>
            <div className="main-section__info">
                <h1>The Universe is Incredible!</h1>
                <p>Let's see what's inside</p>
                <div className="btns">
                    <Button btnStyle="btn-outlined" sizeBtn="btn-large">GET STARTED</Button>
                    <Button sizeBtn="btn-large">WATCH TRAILER</Button>
                </div>
            </div>
        </section>
    )
}

export default MainSection
