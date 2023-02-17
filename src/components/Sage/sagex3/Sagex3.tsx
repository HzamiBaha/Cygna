import React, { useEffect } from 'react'
import "./sagex3.css";
import lines from "../../../assets/sagex3-lines.webp";
import AOS from 'aos';

const Sagex3 = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="sagex3" id='sagex3'>
            <img src={lines} alt="" className="sagex3-lines" />
            <div className="sagex3-upper_section">
                <h2 data-aos="fade-up" className="sagex3-sub">
                    Sage X3
                </h2>
                <h2 data-aos="fade-up" className="sagex3-title">
                    On le qualifie souvent de "La solution la plus complète"
                </h2>
                <p data-aos="fade-up" className="sagex3-desc">
                    Sage est un des plus grands éditeurs de logiciels de gestion d'entreprise au monde.
                    En France, une entreprise sur deux utilise au moins une de ses solutions. Sage X3
                    fait partie de cette famille de logiciels et est reconnu comme étant le logiciel le plus
                    complet proposant des solutions sur mesure pour votre entreprise.
                    Sage X3 vous offre de nombreux avantages
                </p>
                <div data-aos="fade-up" className="sagex3-devider" />
            </div>

            <div className="sagex3-lower_section">
                <div data-aos="flip-left" data-aos-easing="linear"
                    data-aos-duration="4000" className="sagex3-step">
                    <h2 className='step-number'> 01 </h2>
                    <p className="step-content">
                        Un déploiement rapide de votre projet ERP en seulement 3 mois, sans les
                        contraintes habituelles de ce type de projets.
                    </p>
                </div>
                <div data-aos="flip-left" data-aos-easing="linear"
                    data-aos-duration="5000" className="sagex3-step">
                    <h2 className='step-number'> 02 </h2>
                    <p className="step-content">
                        Une solution standardisée prête à l'emploi en un temps record, qui peut
                        soutenir l'évolution de votre entreprise.
                    </p>
                </div>
                <div data-aos="flip-left" data-aos-easing="linear"
                    data-aos-duration="6000" className="sagex3-step">
                    <h2 className='step-number'> 03 </h2>
                    <p className="step-content">
                        Les mêmes outils proposés aux grandes entreprises adaptés à la taille de
                        votre structure.
                    </p>
                </div>
                <div data-aos="flip-left" data-aos-easing="linear"
                    data-aos-duration="7000" className="sagex3-step">
                    <h2 className='step-number'> 04 </h2>
                    <p className="step-content">
                        Pas d'investissement lourd en optant pour la solution cloud.
                    </p>
                </div>
                <div data-aos="flip-left" data-aos-easing="linear"
                    data-aos-duration="8000"className="sagex3-step">
                    <h2 className='step-number'> 05 </h2>
                    <p className="step-content">
                        Un niveau de sécurité maximum pour protéger vos données.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sagex3