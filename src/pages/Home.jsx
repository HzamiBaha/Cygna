import React from 'react'

import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Rejoindre from '../components/rejoindre/Rejoindre'
import Fondateur from '../components/fondateur/Fondateur'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'
import sage from "../assets/Sage-logo.webp"

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Rejoindre />
            <Fondateur />
            <Footer background="rgb(207, 182, 236)" color="#41079F" icon="#FDEF97" button="#41079F" />
            <Link to={"/Cygna-partenaire"} className="floating-button">
                <img src={sage} alt=""width={"50px"} />
            </Link>
        </>
    )
}

export default Home