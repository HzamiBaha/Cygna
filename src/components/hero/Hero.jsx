import React, { useEffect } from 'react'
import "./hero.css";
import background from "../../assets/lines-background.webp";
import triangle1 from "../../assets/triangle-1.webp";
import triangle2 from "../../assets/triangle-2.webp";
import triangle3 from "../../assets/triangle-3.webp";
import triangle4 from "../../assets/triangle-4.webp";
import badge from "../../assets/sage_Partner-Black.webp";
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Hero = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className="hero">

            <div className="hero-background" />
            <h1 className='hero-title'>
                Libérez le plein potentiel de votre entreprise            </h1>
            <img src={badge} data-aos="fade-up" height={48} className="hero-desc" />
            <div className="triangles">
                <img src={triangle1} data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className="triangle-1" />
                <img src={triangle2}
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className="triangle-2" />
                <img src={triangle3}
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className="triangle-3" />
                <img src={triangle4}
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className="triangle-4" />
            </div>
            <Link data-aos="fade-up" to={"/Cygna-partenaire"} style={{ zIndex: "15" }}>
                <button className="button-style" />
            </Link>


            <div className="expertise" id='Expertise'>
                <h2 data-aos="fade-up" className="expertise-title">
                    Nos expertises
                </h2>
                <p data-aos="fade-up" className="expertise-desc">
                    Chez CYGNA, nous mettons notre savoir-faire IT et métier à votre service pour vous aider à concevoir des solutions innovantes et performantes. Votre réussite est notre priorité absolue, c'est pourquoi nous nous engageons à vos côtés. Des grands groupes aux PME en passant par les start-ups, nous accompagnons avec succès nos clients vers la réussite.         </p>
                <div className="experstise-conatiner" >
                    <div data-aos="flip-up" className="item" style={{ background: "#FDEF97" }}>
                        <div className="icon-container" style={{ background: "#F8CB71" }}>

                        </div>
                        <div className="item-title">
                            L'intégration ERP
                        </div>
                        <div className="item-desc">
                            Ayez un pas d’avance sur la prise de décisions grâce aux solutions intelligentes, agiles et flexibles conseillées par nos experts.
                        </div>
                    </div>
                    <div data-aos="flip-up" className="item" style={{ background: "#ADFF98" }}>
                        <div className="icon-container" style={{ background: "#85D072" }}>

                        </div>
                        <div className="item-title">
                            Cybersécurité
                        </div>
                        <div className="item-desc">
                            Nous repensons votre stratégie cybersécurité pour faire évoluer vos projets d’innovation technologiques en toute sérénité.                        </div>
                    </div>
                    <div data-aos="flip-up" className="item" style={{ background: "rgb(207, 182, 236)" }}>
                        <div className="icon-container" style={{ background: "rgb(149 98 209)" }}>

                        </div>
                        <div className="item-title">
                            Consulting IT
                        </div>
                        <div className="item-desc">
                            Ensemble, repoussons les limites de vos projets digitaux et donnons leur du sens et les moyens pour assurer une croissance florissante                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero