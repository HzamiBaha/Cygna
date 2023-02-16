import React, { useEffect } from 'react'
import "./rejoindre.css";
import AOS from 'aos';
const Rejoindre = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="rejoindre" id='rejoindre'>
            <div className="rejoindre-upper_section">
                <h2 data-aos="fade-up" className="rejoindre-title">
                    nous rejoindre
                </h2>
                <p data-aos="fade-up" className="rejoindre-desc">
                    Nous sommes en constante recherche de talents souhaitant évoluer dans un environnement dynamique qui va leur donner accès à la veille, l’apprentissage et le challenge.
                </p>
            </div>

            <div className="rejoindre-lower_section">
                <div data-aos="flip-down" data-aos-duration="3000" className="offre">
                    <div className="offre-header">
                        <div className="offre-title">
                            Ingénieur Full stack JAVA/Angular
                        </div>
                        <button className='postuler'> postuler </button>
                    </div>

                    <div className="offre-desc">
                        Nous recherchons activement plusieurs ingénieurs Back-end ou Full-stack JAVA/Angular pour rejoindre notre expertise conseils IT.
                        pour travailler sur des projets from scratch et accompagner nos clients dans leurs projets de transformation.
                    </div>

                    <div className="offre-desc">
                        Communauté Java, manifestez-vous !
                    </div>
                </div>
                <div data-aos="flip-down" data-aos-duration="3000" className="offre">

                    <div className="offre-header">
                        <div className="offre-title">
                            Tech Lead Senior Big Data
                        </div>
                        <button className='postuler'> postuler </button>
                    </div>
                    <div className="offre-desc">
                        Rejoignez notre équipe passionnée par la Data !
                    </div>
                    <div className="offre-desc">
                        Vous souhaitez travailler sur des projets à forte valeur ajoutée pour accroître la performance de nos clients, vous avez 10 ans d'expérience dans le domaine de la Data et souhaitez manager des équipes ?                    </div>

                    <div className="offre-desc">
                        N'hésitez pas à nous contacter !
                    </div>
                </div>
                <div data-aos="flip-down" data-aos-duration="3000" className="offre">
                    <div className="offre-header">
                        <div className="offre-title">
                            Ingénieur Machine Learning
                        </div>
                        <button className='postuler'> postuler </button>
                    </div>
                    <div className="offre-desc">
                        Dans le cadre de l'accélération de notre activité, nous recherchons un ingénieur Machine Learning pour intervenir sur une mission dans le secteur financier. Vous aimez les algorithmes, la finance et l'innovation ?
                    </div>

                    <div className="offre-desc">
                        Alors rejoignez-nous !
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rejoindre