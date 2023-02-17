import React from 'react'
import { Link } from 'react-router-dom';
import { Data } from '../BlogData'
import "./articles.css";
const Articles = () => {
    return (
        <div className="articles">
            <h3 className="articles-title">
                Notre Blog
            </h3>
            <div className="articles-wrapper">
                {Data.map((item, index) => (
                    <div className='articles-item'>
                        <img src={item.image} alt="" className='item-image' />
                        <h4 className="item-title">{item.name}</h4>
                        <p className="item-preview">{item.preview}</p>
                        <Link className='item-link' to={`Articles/${item.id}`}> savoir plus</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Articles