import React from 'react'
import Cards from '../Cards/Cards'
import ContactBanner from '../ContactBanner/ContactBanner'
import Footer from '../Footer/Footer'
import MainSection from '../MainSection/MainSection'

const Home = () => {
    return (
        <>
            <MainSection />
            <Cards />
            <ContactBanner />
            <Footer />
        </>
    )
}

export default Home
