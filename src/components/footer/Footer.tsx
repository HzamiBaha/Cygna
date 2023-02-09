import { color } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css";


const Footer = (props) => {
    return (
        <div className="footer-wrap" style={{ background: props.background }}>
            <div className="footer">
                <div className="footer-left">
                    <div className="footer-navigation" >
                        <div className="footer-navigation__title" style={{ color: props.color }}>
                            Navigation
                        </div>
                        <ul className="footer-navigation__links" >
                            <li className='nav__item h6' style={{ color: props.color }}>
                                Home
                            </li>
                            <li className='nav__item h6' style={{ color: props.color }}>
                                Nos Fondateurs
                            </li>
                            <li className='nav__item h6' style={{ color: props.color }}>
                                Expertise
                            </li>
                            <li className='nav__item h6' style={{ color: props.color }}>
                                A Propos
                            </li>
                            <li className='nav__item h6' style={{ color: props.color }}>
                                nous rejoindre
                            </li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <div className="footer-contact__title" style={{ color: props.color }}>
                            Contact
                        </div>
                        <div className="footer-contact__info" style={{ color: props.color }}>
                            <div className="mail" style={{ color: props.color }}>
                                Mail : contact@cygna.fr
                            </div>
                            <div className="tel" style={{ color: props.color }}>
                                Téléphone : 06.35.38.21.16
                            </div>
                            <div className="adresse" style={{ color: props.color }}>
                                Adresse : 439 Rue Gabriel Péri. 92700, Colombes
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-Newsletter__title" style={{ color: props.color }}>
                        Newsletter
                    </div>
                    <div className="footer-Newsletter__info" style={{ color: props.color }}>
                        vous accompagne avec le sourire dans vos différents projets de digitalisation
                    </div>
                    <div className="footer-newsletter_input" >
                        <form action="submit" className='newsletter_form'>
                            <input type="email" placeholder='Ecrivez votre email' className='mail-input' />
                            <input type="submit" className='mail-submit' style={{ background: props.button, color: props.icon }} />
                        </form>

                    </div>
                </div>
            </div>
            <div className="copyrights">
                <div className="legal-links">
                    <Link to={"/Politique-de-confidentialité"} className="legal">
                        Politique de confidentialité
                    </Link>
                    <p className="legal-devider">
                        |
                    </p>
                    <Link to={'/Mentions-légales'} className="legal">
                        Mentions légales
                    </Link>
                  
                </div>
                <p className="legal">

                    © CYGNA – 2021
                </p>
            </div>
        </div>
    )
}

export default Footer