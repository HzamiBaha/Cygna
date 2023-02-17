import React, { useEffect } from 'react'
import "./sageHero.css";
import background from "../../../assets/sage-image.webp";
import badge from "../../../assets/sage_Partner.webp";
import AOS from 'aos';

const SageHero = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (

        <div className='sage-hero'>

            <div className="sage-content">
                <h2 data-aos="fade-down-right" className="sage-title">
                    Activez votre transformation digitale avec notre Team experte en Sage
                </h2>
                <p  data-aos="fade-right" className="sage-desc">
                    Avec Sage X3, prenez le contrôle de votre entreprise et optimisez ses performances grâce aux capacités puissantes de ce logiciel. Gérez efficacement toutes vos activités, de l'approvisionnement aux ventes en passant par la finance et la comptabilité.
                </p>
                <img data-aos="fade-up-right" src={badge} width={"286px"}></img>

            </div>
            <img data-aos="fade-up-left" src={background} className="sage-image"  alt="sage" />
        </div>
    )
}

export default SageHero