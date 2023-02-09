import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import "./privacy.css";

const Privacy = () => {
    return (
        <>
            <Header />
            <div className="privacy">
                <h1 className='privacy-title' style={{color:"black"}}> Politique de confidentialité </h1>
                <p className="desc"> CYGNA, sise à 439 RUE GABRIEL PERI, 92700 COLOMBES, ayant le numéro de Siren 882721475, prend la protection de vos informations personnelles très au sérieux. Cette politique de confidentialité décrit les informations que nous collectons, comment elles sont utilisées et les mesures que nous prenons pour protéger votre vie privée. En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.</p>
                <h3 className="subtitle" style={{color:"black"}}>
                    Informations collectées
                </h3>
                <p className="desc">
                    Nous collectons les informations suivantes pour vous offrir nos services :
                </p>
                <p className="bullets">
                    <p className="desc">
                        • Informations d'identification, telles que votre nom, votre adresse e-mail, votre numéro de téléphone et votre adresse postale.
                    </p>
                    <p className="desc">
                        •  Informations de paiement, telles que les détails de votre carte de crédit ou de débit pour les transactions en ligne                    </p>
                    <p className="desc">
                        •  Informations de navigation, telles que votre adresse IP, les pages visitées sur notre site et les données de localisation.                    </p>
                </p>
                <h3 className="subtitle" style={{color:"black"}}>
                    Utilisation des informations
                </h3>
                <p className="desc">
                    Nous utilisons les informations collectées pour les finalités suivantes :
                </p>
                <p className="bullets">
                    <p className="desc">
                        • Pour vous fournir nos services et répondre à vos demandes.
                    </p>
                    <p className="desc">
                        •  Pour traiter les transactions et les paiements.
                    </p>
                    <p className="desc">
                        •  Pour vous envoyer des mises à jour sur nos produits et services.
                    </p>
                    <p className="desc">
                        •  Pour améliorer le contenu et la qualité de nos services.
                    </p>
                </p>
                <h3 className="subtitle" style={{color:"black"}}>
                    Partage des informations
                </h3>
                <p className="desc">
                    Nous ne vendons pas, ne louons ni ne partageons vos informations personnelles à des tierces parties, sauf dans les cas suivants :
                </p>
                <p className="bullets">
                    <p className="desc">
                        • Avec votre consentement explicite.
                    </p>
                    <p className="desc">
                        •  Pour traiter les transactions et les paiements.
                    </p>
                    <p className="desc">
                        •  Pour protéger les droits, la propriété ou la sécurité de CYGNA ou de ses utilisateurs.
                    </p>
                </p>
                <h3 className="subtitle" style={{color:"black"}}>
                    Sécurité des informations
                </h3>
                <p className="desc">
                    Nous prenons des mesures de sécurité administratives, techniques et physiques pour protéger vos informations personnelles contre la perte, le vol, l'utilisation abusive, la modification ou la destruction non autorisées. Malgré ces mesures, nous ne pouvons pas garantir une protection complète contre les violations de sécurité, et vous devez prendre des mesures supplémentaires pour protéger vos informations en ligne.
                </p>
                <h3 className="subtitle">
                    Mise à jour de la politique de confidentialité
                </h3>
                <p className="desc">
                    Nous pouvons mettre à jour cette politique de temps à autre pour refléter les changements dans nos pratiques ou pour nous conformer à des obligations légales. Toutes les mises à jour seront publiées sur notre site web.
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

export default Privacy