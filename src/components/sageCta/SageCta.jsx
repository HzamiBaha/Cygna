import React, { useEffect } from 'react'
import "./sagecta.css"
import AOS from 'aos';

const SageCta = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='sage-cta'>
            <h2  data-aos="fade-up" className="cta-title">
                Prêt à travailler différemment ?
            </h2>
            <p  data-aos="fade-up" className="cta-desc">
                Passez à l'étape suivante
            </p>
            <button  data-aos="fade-up" className='cta-button'>
                <p className="button-text">
                    contactez-nous !
                </p>
            </button>
        </div>
    )
}

export default SageCta