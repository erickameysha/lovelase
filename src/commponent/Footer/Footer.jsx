import React from 'react';
import {Link} from "react-router-dom";
import instagram from './FooterIcon/instagram.png'
import faceBook from './FooterIcon/facebook.png'
import './footer.css'
const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'container'}>
                <div>
                <p>
                Мы в соц.Сетях
            </p>
                <div>
                    <a href="https://www.instagram.com"><img src={instagram} alt="Instagram"/></a>
                    <a href="https://www.instagram.com"><img src={faceBook} alt="Instagram"/></a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;