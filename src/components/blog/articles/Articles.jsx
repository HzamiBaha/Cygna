import React from 'react'
import { Link } from 'react-router-dom';
import { Data } from '../BlogData'
import "./articles.css";
const Articles = () => {
    return (
        <div className="articles">
            <h3 className="articles-title" style={{color:"black"}}>
                Notre Blog
            </h3>
            <div className="articles-wrapper">
                {Data.map((item, index) => (
                    
                    <div key={index} className='articles-item'>
                        <div style={{backgroundImage : `url(${item.image})`}} className='item-image' />
                        <div className="item-info">
                            <h4 className="item-title">{item.name}</h4>
                            <p className="item-preview">{item.preview}</p>
                            <Link className='item-link' to={`/Article/${item.id}`}> savoir plus</Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Articles