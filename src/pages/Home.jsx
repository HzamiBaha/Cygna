import React from 'react'

import Hero from '../components/home/hero/Hero'
import About from '../components/home/about/About'
import Rejoindre from '../components/home/rejoindre/Rejoindre'
import Fondateur from '../components/home/fondateur/Fondateur'
import Footer from '../components/common/footer/Footer'
import Header from '../components/home/header/Header'
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

        </>
    )
}

export default Home