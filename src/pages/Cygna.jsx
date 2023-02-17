import React from 'react'
import Footer from '../components/common/footer/Footer'
import Header from '../components/Sage/headerSage/Header'
import SageCta from '../components/Sage/sageCta/SageCta'
import SageHero from '../components/sage/sageHero/SageHero'
import SageInfo from '../components/sage/sageInfo/SageInfo'
import Sagex3 from '../components/sage/sagex3/Sagex3'
import Services from '../components/Sage/services/Services'

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