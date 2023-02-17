import React, { useEffect } from 'react'
import "./fondateur.css";
import ahmed from "../../../assets/ahmed.webp";
import nawel from "../../../assets/nawel.webp";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AOS from 'aos';

const Fondateur = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className="fondateur" id='fondateur'>
            <h2 data-aos="fade-up" className="fondateur-title">Nos Fondateurs</h2>
            <p data-aos="fade-up" className="fondateur-desc">
                En mars 2020, Ahmed et Nawel ont fondé CYGNA avec pour ambition de faire converger leurs compétences respectives et de développer leur équipe et leur portée internationale. Cette entreprise est née de la transformation de leurs aspirations en un projet concret. Ils étaient animés par le désir de révolutionner la façon d'intégrer les systèmes, la vision de placer le client au centre de toutes les préoccupations de l'entreprise et la volonté d'apporter leur propre approche entrepreneuriale et d'impliquer leur équipe dans les décisions stratégiques de l'entreprise.                </p>
            <div className="fondateur-cards">
                <div data-aos="fade-up-right" className="card">
                    <img src={ahmed} alt="" className='image' />
                    <div className="fondateur-card__info">
                        <div className="title">
                            <h4 className="name">Ahmed CHAKROUN </h4>
                            <div className="links">
                                <a href="http://www.linkedin.com/in/ahmed-chakroun-b73b321b/">
                                    <LinkedInIcon className='icon'></LinkedInIcon>
                                </a>
                                <a href="mailto:ahmed.chakroun@cygna.fr">
                                    <MailOutlineIcon className='icon'></MailOutlineIcon>
                                </a>
                            </div>
                        </div>
                        <div className="fondateur-subtitle">
                            Founder & CEO
                        </div>
                        <div className="fondateur-caption">
                            Ma passion pour les nouvelles technologies, m'a amené à créer un nouveau modèle dans l'intégration ERP en s'inspirant de la stratégie : Standardize, Simplify, Speed, with a Smile!
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up-left" className="card">
                    <img src={nawel} alt="" className='image' />
                    <div className="fondateur-card__info">
                        <div className="title">
                            <h4 className="name">Nawel CHAKROUN </h4>
                            <div className="links">
                            <a href=" https://www.linkedin.com/in/nawel-zgolli-chakroun-0094205a/">
                                    <LinkedInIcon className='icon'></LinkedInIcon>
                                </a>
                                <a href="mailto:nawel.chakroun@cygna.fr">
                                    <MailOutlineIcon className='icon'></MailOutlineIcon>
                                </a>
                            </div>
                        </div>
                        <div className="fondateur-subtitle">
                            Co-fondatrice & HR manager
                        </div>
                        <div className="fondateur-caption">
                            Consciente des enjeux et des contraintes du marché de l’IT. Je vise l’excellence pour présenter les meilleures solutions à nos clients, toujours avec le Smile!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fondateur