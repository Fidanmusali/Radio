import React, { useContext } from 'react'
import './style.css'
import LanguageContext from '../../../../assets/Language'
import l1 from "/public/img/1.png"
import l2 from "/public/img/2.png"
import l3 from "/public/img/3.png"
import l4 from "/public/img/4.png"


const Leading = () => {
    const { language } = useContext(LanguageContext);
    const lang1 = {
        ru: "Ведущие радиостанции",
        en: 'Leading radio stations',
        az: "Aparıcı radio stansiyaları"
    }

    const lang2 = {
        ru: "Ольга Подъячева",
        en: "Olga Podyacheva",
        az: "Olqa Podyaçeva"
    }

    const lang3 = {
        ru: "Ольга Ян",
        en: "Olga Yan",
        az: "Olqa Yan"
    }

    const lang4 = {
        ru: "Наталья Истомина",
        en: "Natalia Istomina",
        az: "Natalya Istomina"
    }
    const lang5 = {
        ru: "Ольга Ларина",
        en: "Olga Larina",
        az: "Olqa Larina"
    }

    return (
        <div className='leading'>
            <h2>{lang1[language]}</h2>
            <div className="leadingGrp">
                <div className="leading1">
                    <img src={l1} alt="" />
                    <h3>{lang2[language]}</h3>
                </div>
                <div className="leading1">
                    <img src={l2} alt="" />
                    <h3>{lang3[language]}</h3>
                </div>
                <div className="leading1">
                    <img src={l3} alt="" />
                    <h3>{lang4[language]}</h3>
                </div>
                <div className="leading1">
                    <img src={l4} alt="" />
                    <h3>{lang5[language]}</h3>
                </div>
            </div>
        </div>
    )
}

export default Leading