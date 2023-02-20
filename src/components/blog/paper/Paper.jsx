import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../home/header/Header';
import { Data } from '../BlogData'
import './paper.css';
import avatar from "../../../assets/ahmed.webp"
import Footer from '../../common/footer/Footer';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { FacebookRounded, LinkedIn, Twitter, CopyAllOutlined } from '@mui/icons-material';
import { Helmet } from "react-helmet";
import { color } from '@mui/system';

const Paper = () => {
    const { id } = useParams()
    const url = `https://cygna.fr/#/Article/${id}`
    const article = Data.find((article) => article.id === id);
    const index = Data.indexOf(article)
    const length = Data.length
    const nextArticle = () => {
        let next = 0
        if (index < length - 1) {
            next = index + 1
        }
        else {
            next = 0
        }
        return Data[next]
    }
    console.log(nextArticle().id)

    return (
        <>
            <Helmet>
                <title>{article.name}</title>
        
            </Helmet>


            <Header />
            <div className='article'>

                <p className="ticket"> Article</p>
                <h2 className="article-name">{article.name}</h2>
                <p className="article-preview"> {article.preview} </p>
                <img src={article.image} className="article-image" />
                <div className="article-media">
                    <div className="article-auther md">
                        <img src={avatar} alt="" className='auther-photo' />
                        <div className="auther-info">
                            <p className="auther-name"> Moez chniter </p>
                            <p className="post-date"> 17 fervrier 2023 : 19:30</p>
                        </div>
                    </div>
                    <div className="share-buttons">
                        <button className="share-button copy" onClick={() => { navigator.clipboard.writeText(url) }} > <CopyAllOutlined />copy link</button>
                        <div className="social">
                            <div className="share-button">
                                <FacebookShareButton url={url} style={{ display: "flex", color: "#4E475A" }}>
                                    <FacebookRounded />
                                </FacebookShareButton>
                            </div>
                            <div className="share-button">
                                <LinkedinShareButton url={url} style={{ display: "flex", color: "#4E475A" }}>
                                    <LinkedIn />
                                </LinkedinShareButton>
                            </div>
                            <div className="share-button">

                                <TwitterShareButton url={url} style={{ display: "flex", color: "#4E475A" }}>
                                    <Twitter />
                                </TwitterShareButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-content">
                    <div className="section-left">
                        <div className="table-content">
                            <p className="section-title">
                                Table de contenu
                            </p>
                            <div className="content-links">
                                {article.sections.map((item, index) => (
                                    <a href={`/#${item.title}`} key={index} className="content-link">
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <p className="section-title related">
                            Lire Aprés
                        </p>
                        <div className='articles-item'>
                            <img src={nextArticle().image} alt="" className='item-image' />
                            <h4 className="item-title">{nextArticle().name}</h4>
                            <p className="item-preview">{nextArticle().preview}</p>
                            <Link className='item-link' to={`/Article/${nextArticle().id}`}> savoir plus</Link>
                        </div>
                        <Link className='bite' to={`/blog`}> Charger plus </Link>

                    </div>
                    <div className="article-auther sm">
                        <img src={avatar} alt="" className='auther-photo' />
                        <div className="auther-info">
                            <p className="auther-name"> Moez chniter </p>
                            <p className="post-date"> 17 fervrier 2023 : 19:30</p>
                        </div>
                    </div>
                    <div className="section-right">
                        {article.sections.map((item, index) => (
                            <div key={index} className="content-section">
                                <h4 id={item.title} className="content-title">
                                    {item.title}
                                </h4>
                                <p key={index} className="content">
                                    {item.content}
                                </p>
                            </div>

                        ))}
                    </div>

                </div>
            </div>
            <Footer background="rgb(207, 182, 236)" color="#41079F" icon="#FDEF97" button="#41079F" />

        </>
    )
}

export default Paper