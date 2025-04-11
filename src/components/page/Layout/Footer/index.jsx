import React, { useContext } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LanguageContext from '../../../../assets/Language';
import logo2 from "/public/img/logo2.png"
import "./style.css"

const Footer = () => {
    const { language } = useContext(LanguageContext)
    const lang1 = {
        ru: 'Радио "ЖелезоFM" 99,0 мГц',
        az: 'Radio "ZhelezoFM" 99.0 MHz',
        en: 'Radio "ZhelezoFM" 99.0 MHz'
    }
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo2} alt="" />
            </div>
            <div className="social-media">
                <Link className='sc-a' to="https://t.me/radiobot"><FaTelegramPlane /></Link>
                <Link className='sc-a' to="https://www.instagram.com/radioradio_official/?hl=en"><FaInstagram /></Link>
                <Link className='sc-a' to="mailto:fidanmusali05@gmail.com"><BiLogoGmail /></Link>
                <Link className='sc-a' ><FaWhatsapp /></Link>

            </div>
            <div className="last">
                <p>{lang1[language]}</p>
            </div>
        </div>
    )
}

export default Footer