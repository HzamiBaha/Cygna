import React, { useEffect } from 'react'
import image1 from "../../../assets/sage-info1.webp";
import image2 from "../../../assets/sage-info2.webp";
import image3 from "../../../assets/sage-info3.webp";
import "./sageInfo.css";

import AOS from 'aos';

const SageInfo = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='info-section'>
            <div className="info">
                <img src={image1} data-aos="fade-right" alt="" className="info-image" />
                <div data-aos="fade-left" className="info-content">
                    <h2 className="info-title">
                        Qui sommes-nous ?
                    </h2>
                    <h3 className='subtitle' style={{color: "#95E681"}}>
                        Accélérateur de vos projets de transformations
                    </h3>
                    <p className="desc">
                        En tant que partenaires certifiés Sage, chez Cygna, nous sommes experts dans
                        l'intégration de la solution de gestion d'entreprise Sage X3.
                        Nous croyons que chaque
                        entreprise est unique et mérite une solution sur mesure qui s'adapte à ses propres
                        modes de fonctionnement.

                    </p>
                    <p className="desc">
                        Notre objectif est de vous accompagner de bout en bout sur vos projets IT en
                        mettant votre métier au centre de nos actions.
                        Nous sommes là pour vous aider et
                        vous accompagner à réussir à l'ère digitale.
                    </p>
                </div>
            </div>
            <div className="info reversed">
                <div data-aos="fade-right" className="info-content">
                    <h2 className="info-title">
                        A qui s’adressent nos services ?

                    </h2>
                    <p className="desc">
                        Nous croyons que chaque
                        entreprise est unique et mérite une solution sur mesure qui s'adapte à ses propres
                        modes de fonctionnement. 
                    </p>
                    <p className="desc" style={{fontWeight : "600" }}>Nous proposons nos services aux entreprises de tous les secteurs, des services aux
                        start-ups en passant par la petite industrie et les PME/ETI.

                    </p>
                    <p className="desc">
                        N'hésitez pas à nous contacter pour en savoir plus sur notre offre d'intégration de
                        Sage X3 et découvrir comment nous pouvons vous aider à améliorer la gestion de
                        votre entreprise, quel que soit votre secteur d'activité.
                    </p>
                  
                </div>
                <img data-aos="fade-left" src={image2} alt="" className="info-image" />
            </div>
            <div className="info">
                <img data-aos="fade-right" src={image3} alt="" className="info-image" />
                <div data-aos="fade-left" className="info-content">
                    <h2 className="info-title">
                        Comment se déroulent
                        nos interventions ?
                    </h2>
                    <p className="desc">
                        Au début de chaque intervention, nos consultants commencent par analyser et
                        cadrer les besoins de l'entreprise pour configurer ensuite la solution Sage X3 de
                        manière à répondre le plus précisément possible à ses enjeux.

                    </p>
                    <p className="desc">

                        Une fois que la solution est intégrée, nous continuons à accompagner l'entreprise
                        pour s'assurer que Sage X3 est utilisé de la manière la plus optimale et pour offrir un
                        support correctif et évolutif.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default SageInfo