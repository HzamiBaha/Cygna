import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/headerSage/Header'
import SageCta from '../components/sageCta/SageCta'
import SageHero from '../components/sageHero/SageHero'
import SageInfo from '../components/sageInfo/SageInfo'
import Sagex3 from '../components/sagex3/Sagex3'
import Services from '../components/services/Services'

const Cygna = () => {
    return (
        <div>
            <Header />
            <SageHero />
            <Sagex3 />
            <Services />
            <SageInfo />
            <SageCta />
            <Footer background="#ADFF98" color="#141E24" icon="#00D639" button="#141E24" />
        </div>
    )
}

export default Cygna