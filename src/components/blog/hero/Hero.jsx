import React, { useEffect } from 'react'
import "./hero.css";
import arrow from "../../../assets/arrow.webp";

import AOS from 'aos';


const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className="hero">

            <div className="hero-background" />
            <div className='blog-image'>
                <div className="blog-content">
                    <div className="blog-info">
                        <p className="blog-ticket">Buisness</p>
                        <h2 className='blog-title'>L'importance des ERP pour les entreprises</h2>
                        <p className="desc">L'ERP est un type de logiciel qui aide les entreprises à gérer leurs processus. Il intègre tous les différents services d'une entreprise, tels que la comptabilité, les ressources humaines, les ventes et la production. Bien que les logiciels ERP ne soient pas absolument nécessaires à toutes les entreprises,</p>
                    </div>
                    <button className='blog-button'>
                        <img src={arrow} />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Hero