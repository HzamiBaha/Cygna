import React from 'react'
import Header from '../../header/Header'
import Footer from '../footer/Footer'
import "./legal.css";

const Legal = () => {
    return (
        <>
            <Header />
            <div className="privacy">
                <h1 className='privacy-title' style={{color:"black"}}> Mentions légales </h1>
                <h3 className="subtitle" style={{color:"black"}}>
                    Editeur du site
                </h3>
                <p className="desc">
                    Le site web de Cygna est édité par la société Cygna, SAS au capital de 1000€, immatriculée au Registre du Commerce et des Sociétés sous le numéro 882721475, dont le siège social est situé à 439 Rue Gabriel Péri, 92700 Colombes.
                </p>
                <h3 className="subtitle" style={{color:"black"}}>
                    Directeur de la publication
                </h3>
                <p className="desc">
                    Le directeur de la publication du site web de Cygna est Ahmed Chakroun.
                </p>
                <h3 className="subtitle" style={{color:"black"}}>
                    Hébergeur
                </h3>
                <p className="desc">
                    Le site web de Cygna est hébergé par OVH, dont le siège social est situé à 2 rue Kellermann 59100 Roubaix-France.
                </p>
                <h3 className="subtitle" style={{color:"black"}}>
                    Protection des données personnelles
                </h3>
                <p className="desc">
                    Les informations collectées sur le site web de Cygna sont traitées conformément à la politique de confidentialité de Cygna.
                </p>
                <h3 className="subtitle" style={{color:"black"}}>
                    Propriété intellectuelle
                </h3>
                <p className="desc">
                    Le contenu du site web de Cygna, incluant, sans s'y limiter, les textes, photographies, images, icônes, sons, vidéos, logiciels et tout autre élément, est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation, diffusion ou utilisation, totale ou partielle, du contenu du site web de Cygna est interdite sans l'autorisation préalable de Cygna.
                </p>
                <h3 className="subtitle" style={{color:"black"}}>
                    Responsabilité
                </h3>
                <p className="desc">
                    Cygna ne peut être tenue responsable des erreurs, inexactitudes ou omissions portant sur les informations diffusées sur le site web.
                </p>
                <h3 className="subtitle" style={{color:"black"}}>
                    Modification des Mentions Légales
                </h3>
                <p className="desc">
                    Cygna se réserve le droit de modifier les présentes Mentions Légales à tout moment. Il est donc conseillé de consulter régulièrement la page pour prendre connaissance des éventuelles mises à jour.
                </p>
                <h3 className="subtitle" style={{color:"black"}}>
                    Contactez-nous
                </h3>
                <p className="desc">
                    Si vous avez des questions ou des préoccupations quant à cette politique de confidentialité, veuillez nous contacter à l'adresse e-mail suivante :
                </p>
                <a href="mailto:contact@cygna.fr" className="email"> contact@cygna.fr </a>






            </div>
            <Footer background="rgb(207, 182, 236)" color="#41079F" icon="#FDEF97" button="#41079F" />

        </>
    )
}

export default Legal