import React, { useEffect } from 'react'
import "./services.css"
import AOS from 'aos';

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="services">
            <h3 data-aos="fade-up" className="services-title">
                Il est temps de changer votre façon de travailler !

            </h3>
            <p data-aos="fade-up" className="services-desc">
                Mettez votre entreprise sur la voie de la modernité en optant pour une solution de
                gestion d'entreprise qui vous permettra de :
            </p>
            <div  className="services-container">
                <div data-aos="flip-up" className="services-item">
                    <div className="services-content">
                        <div className="dot" />
                        <p className="desc">
                            Partager et intégrer vos données de manière efficace.
                        </p>
                    </div>

                </div>
                <div data-aos="flip-up" className="services-item">
                    <div className="services-content">
                        <div className="dot" />
                        <p className="desc">
                            Communiquer et collaborer facilement dans le cloud avec votre équipe.
                        </p>
                    </div>

                </div>
                <div data-aos="flip-up" className="services-item">
                    <div className="services-content">
                        <div className="dot" />
                        <p className="desc">
                            Planifier à l'avance et anticiper les demandes.
                        </p>
                    </div>

                </div>
                <div data-aos="flip-up" className="services-item">
                    <div className="services-content">
                        <div className="dot" />
                        <p className="desc">
                            Accroître vos revenus et réduire les coûts opérationnels.
                        </p>
                    </div>

                </div>
                <div data-aos="flip-up" className="services-item">
                    <div className="services-content">
                        <div className="dot" />
                        <p className="desc">
                            Adapter votre solution pour suivre l'évolution de votre entreprise au fil du
                            temps.
                            </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services