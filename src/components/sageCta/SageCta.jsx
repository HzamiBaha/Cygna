import React, { useEffect } from 'react'
import { InlineWidget } from "react-calendly";
import "./sagecta.css"
import AOS from 'aos';
import { padding } from '@mui/system';

const SageCta = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='sage-cta'>
            <h2 data-aos="fade-up" className="cta-title">
                Prêt à travailler différemment ?
            </h2>
            <p data-aos="fade-up" className="cta-desc">
                Passez à l'étape suivante
            </p>
            <p data-aos="fade-up" className="button-text">
                contactez-nous !
            </p>
            <InlineWidget styles={{
                height: '100%'
            }}
             url="https://calendly.com/hellocygna/30min?background_color=0e171b&text_color=ffffff&primary_color=adff98" />

        </div>
    )
}

export default SageCta