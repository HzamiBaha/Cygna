import React from 'react';
import "./header.css";
import logo from "../../assets/logoCygna.webp";

import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from 'react';

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")
    return (
        <header className='header'>
            <div className={Toggle ? "header-lines-long" : "header-lines"} />
            <nav className='nav'>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu "}>
                    <ul className='nav__list'>
                        <li className='nav__item h6'>
                            <a href="/#fondateur">
                                Nos Fondateurs
                            </a>
                        </li>
                        <li className='nav__item h6'>
                            <a href="/#Expertise">
                                Expertise
                            </a>
                        </li>
                        <li className='nav__item h6 nav__logo_hidden' >
                            <a href="/">
                                <img src={logo} width={'100px'} alt="cygna-logo" />
                            </a>
                        </li>
                        <li className='nav__item h6'>
                            <a href='/#about'>
                                A Propos
                            </a>
                        </li>
                        <li className='nav__item h6'>
                            <a href='/#rejoindre'>
                                nous rejoindre
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="/"><img src={logo} width={'100px'} alt="cygna-logo" className="nav__logo" /> </a>
                <button className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <DensityMediumIcon className='toggle-icon'></DensityMediumIcon>
                </button>
            </nav>
        </header>
    )
}

export default Header