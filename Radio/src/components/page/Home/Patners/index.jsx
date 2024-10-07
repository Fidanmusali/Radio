import React, { useContext } from 'react'
import s1 from "/public/img/s1.png"
import s2 from "/public/img/s2.png"
import s3 from "/public/img/s3.png"
import pat1 from "/public/img/pat1.png"
import pat2 from "/public/img/pat2.png"
import pat3 from "/public/img/pat3.png"

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
                    <img src={pat1} alt="" />
                    <img src={pat3} alt="" />
                    <img className='s2' src={pat2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Patners