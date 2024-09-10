import React, { useContext } from 'react'
import LanguageContext from '../../../assets/Language'
import { SiGmail } from "react-icons/si";
import { FaPaperPlane } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

import { BiLogoVk } from "react-icons/bi";

import "./style.css"
import { Link } from 'react-router-dom'

const Contact = () => {
  const { language } = useContext(LanguageContext)
  const lang1 = {
    ru: "Контакты",
    en: "Contact",
    az: "Əlaqələr"
  }
  const lang2 = {
    ru: "Адрес: г.Железногорск,ул.Ленина,д.61",
    en: "Address: Zheleznogorsk, Lenin St., 61",
    az: "Ünvan: Jeleznoqorsk, Lenin küçəsi, 61"
  }

  const lang3 = {
    ru: "Реклама на радио:(47148) 777-17",
    en: "Radio advertising:(47148) 777-17",
    az: "Radio reklamı: (47148) 777-17"
  }

  const lang5 = {
    ru: "Телефон эфира: (47148) 777-17",
    en: "Phone number: (47148) 777-17",
    az: "Efir telefon nömrəsi: (47148) 777-17"
  }

  return (
    <div className='contact'>
      <h2>{lang1[language]}</h2>
      <div className="contactGrp">
        <div className="phone-contact">
          <p className='adress'>{lang2[language]}</p>
          <p className='adress'>{lang3[language]}</p>
          <p className='adress'>{lang5[language]}</p>
        </div>
        <div className="contact-social-media">
          <Link className='csm-a' to="mailto:fefm@signaltv.ru">
            <p className='sm-logo' ><SiGmail /></p>
            <p className='sm-name'>fefm@signaltv.ru</p>
          </Link>
          <Link className='csm-a' to="tel:+79524949069">
            <p className='sm-logo'><FaPaperPlane /></p>
            <p className='sm-name'> +7 952 494 9069</p>
          </Link>
          <Link className='csm-a' to="https://vk.com/zhelezo_fm">
            <p className='sm-logo'><BiLogoVk /></p>
            <p className='sm-name'>https://vk.com/zhelezo_fm</p></Link>
          <Link className='csm-a' to="https://zelezofm">
            <p className='sm-logo'><IoLogoInstagram /></p>
            <p className='sm-name'>zelezofm</p></Link>
          <Link className='csm-a' to="tel:+79524949069">
            <p className='sm-logo'><FaWhatsapp /></p>
            <p className='sm-name'>+7 952 494 9069</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Contact