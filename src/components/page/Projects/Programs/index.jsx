import React, { useContext } from 'react'
import './style.css'
import LanguageContext from '../../../../assets/Language'

const Programs = () => {
    const { language } = useContext(LanguageContext);
    const lang1 = {
        ru: "Проекты",
        en: "Projects",
        az: "Layihələr"
    }
    const lang2 = {
        ru: "Программы",
        en: "Programs",
        az: "Proqramlar"
    }

    const lang3 = {
        ru: "Информационная программа «Новости на радио Железо ФМ»",
        en: "Information program “News on Radio Zhelezo FM”",
        az: '"Radio Jelezo FM-də xəbərlər" məlumat proqramı'
    }
    const lang4 = {
        ru: "Прогноз погоды",
        en: "Weather forecast",
        az: 'Hava proqnozu'
    }
    const lang5 = {
        ru: "Плей - лист на заказ",
        en: "Playlist to order",
        az: 'Sifariş vermək üçün pleylist'
    }
    const lang6 = {
        ru: "Шоу Шепелявых",
        en: "Lisp Show",
        az: 'Lisp Şou'
    }
    const lang7 = {
        ru: "Моя машина",
        en: "My car",
        az: "Mənim maşınım"
    }
    const lang8 = {
        ru: "Тематическая программа 'Кошелек'",
        en: "Thematic program 'Wallet'",
        az: '"Cüzdan" tematik proqramı'
    }
    const lang9 = {
        ru: "Тематическая программа «Там на неведомых дорожках»",
        en: "Thematic program “There on unknown paths”",
        az: '"Orada naməlum yollarda" tematik proqram'
    }
    const lang10 = {
        ru: "Афиша.Выходным быть!",
        en: "Poster. Have a day off!",
        az: "Poster. İstirahət gününüz olsun!"
    }
    const lang11={
        ru:"Программы утреннего эфира",
        en:"Morning broadcast programs",
        az:"Səhər verilişləri"
    }
    const lang12={
        ru:'Юмористическая программа "Зарядка"',
        en:'Humorous program "Charging"',
        az:'Yumoristik proqram "Şarj edir"'
    }
    const lang13={
        ru:'Гость из народа',
        en:'Guest from the people',
        az:'Xalqdan qonaq'
    }
    const lang14={
        ru:"Рубрика",
        en:"Rubric",
        az:"Rublika"
    }
    const lang15={
        ru:"Ночь в движении",
        en:"Night on the move",
        az:"Gecə hərəkətdə"
    }
    return (
        <div className='proj-programs'>
            <h2>{lang1[language]}</h2>
            <div className="programGrp">
                <div className="program1">
                    <h3>{lang2[language]}</h3>
                    <li>{lang3[language]}</li>
                    <li>{lang4[language]}</li>
                    <li>{lang5[language]}</li>
                    <li>{lang6[language]}</li>
                    <li>{lang7[language]}</li>
                    <li>{lang8[language]}</li>
                    <li>{lang9[language]}</li>
                    <li>{lang10[language]}</li>
                </div>
                <div className="morningBroad-rubric">
                    <div className="morning-broadcast">
                        <h3>{lang11[language]}</h3>
                        <li>{lang12[language]}</li>
                        <li>{lang13[language]}</li>
                    </div>
                    <div className="rublic">
                        <h3>{lang14[language]}</h3>
                        <li>{lang15[language]}</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs