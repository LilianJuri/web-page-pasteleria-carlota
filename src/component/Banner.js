// import { Component } from "react";
import './Banner.css';
import backgroundImage from '../img/background-cake-banner-top.jpg';

const Banner = () => {
    return(
    <div className="banner-top">
        <img src={backgroundImage} className='background-image-banner' alt="img-banner-top" />
    </div>
    )
}

export default Banner;