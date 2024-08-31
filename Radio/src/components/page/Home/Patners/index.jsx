import React, { useContext } from 'react'
import s1 from "/public/img/s1.png"
import s2 from "/public/img/s2.png"
import s3 from "/public/img/s3.png"
import LanguageContext from '../../../../assets/Language'
import './style.css'


const Patners = () => {
    const { language } = useContext(LanguageContext)
    const lang1 = {
        ru: "Партнеры",
        en: "Partners",
        az: "Tərəfdaşlar"
    }
    return (
        <div className='patners'>
            <div className="patner-case">
                <h2>{lang1[language]}</h2>
                <div className="patnerImg">
                    <img src={s1} alt="" />
                    <img src={s3} alt="" />
                    <img className='s2' src={s2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Patners