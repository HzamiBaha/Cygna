import React, { useEffect } from 'react'
import "./about.css";
import AOS from 'aos';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <section className="about" id='about'>
            <h2 data-aos="zoom-in" className="about-title">
                Qui sommes-nous ?
            </h2>
            <div className="about-container">
                <div  data-aos="zoom-in-right" className="about-item">
                    <div className="line" style={{ background: "#CFB6EC" }} />
                    <h3 className="about-item__title" style={{ color: "#CFB6EC" }}>
                        Notre
                        histoire
                    </h3>
                    <div className="about-desc" >
                        CYGNA est votre accélérateur de transformations. Créée en 2020, CYGNA est un acteur sur le marché de la prestation informatique, se concentrant sur les domaines de l'ERP, des conseils IT. Grâce à une équipe technique ambitieuse et créative composée d'experts multidisciplinaires, nous accompagnons les entreprises dans leurs projets IT. Notre mission est de soutenir les entreprises dans leur transformation digitale.                    </div>
                </div>
                <div data-aos="zoom-out" className="about-item">
                    <div className="line" style={{ background: "#FFC28A" }} />
                    <h3 className="about-item__title" style={{ color: "#FFC28A" }}>
                        Notre mission
                    </h3>
                    <div className="about-desc" >
                        S'adapter à un monde en constante évolution est crucial pour la survie, le développement et la réussite de toute entreprise dans de nouveaux environnements. La modernisation, l'adaptation et la croissance sont plus accessibles que jamais grâce aux avancées technologiques et stratégiques puissantes.
                    </div>

                </div>
                <div data-aos="zoom-in-left" className="about-item">
                    <div className="line" style={{ background: "#95E681" }} />
                    <h3 className="about-item__title" style={{ color: "#95E681" }}>
                        Notre approche
                    </h3>
                    <div className="about-desc" >
                        Notre objectif est de soutenir les entreprises dans leurs projets IT en utilisant notre large pool d'experts en transformation digitale. Nous collaborons avec nos clients pour identifier les opportunités d'amélioration, puis concevons et déployons des stratégies personnalisées pour optimiser les opérations de manière novatrice et axée sur les résultats.                    </div>

                </div>
            </div>
        </section>
    )
}

export default About