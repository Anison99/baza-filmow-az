import React from 'react';
import LogoBigBanner from './logo-film-big.svg';
import './Banner.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Banner = () => {
    return (
        <header>
            <div className="head-text">
                <img src={LogoBigBanner} alt="Logo" className="center" /> 
                <div className="text-on-image">
                    <h1>FILM BASE</h1>
                </div>
            </div>      
        </header>
        );
}

export default Banner;