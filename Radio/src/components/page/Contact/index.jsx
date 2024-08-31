import React, { useContext } from 'react'
import LanguageContext from '../../../assets/Language'
import "./style.css"

const Contact = () => {
  const { language } = useContext(LanguageContext)
  const lang1={
    ru:"Контакты",
    en:"Contact",
    az:"Əlaqələr"
  }
  const lang2={
    ru:"Адрес: г.Железногорск,ул.Ленина,д.61",
    en:"Address: Zheleznogorsk, Lenin St., 61",
    az:"Ünvan: Jeleznoqorsk, Lenin küçəsi, 61"
  }

  const lang3={
    ru:"Реклама на радио:(47148) 777-17",
    en:"Radio advertising:(47148) 777-17",
    az:"Radio reklamı: (47148) 777-17"
  }

  const lang5={
    ru:"Телефон эфира: (47148) 777-17",
    an:"Phone number: (47148) 777-17",
    az:"Efir telefon nömrəsi: (47148) 777-17"
  }

  return (
    <div className='contact'>
      <h2>{lang1[language]}</h2>
      <div className="contactGrp">
        <div className="phone-contact">
          <p className='adress'>{lang2[language]}</p>
          <p className='reklam'>{lang3[language]}</p>
          <p>{lang5[language]}</p>
        </div>
        <div className="contact-social-media">

        </div>
      </div>
    </div>
  )
}

export default Contact