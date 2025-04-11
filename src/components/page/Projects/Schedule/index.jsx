import React, { useContext } from 'react'
import LanguageContext from '../../../../assets/Language'
import "./style.css"


const Schedule = () => {
    const { language } = useContext(LanguageContext);
    const lang1 = {
        ru: "Расписание эфиров",
        en: "Broadcast schedule",
        az: "Yayım cədvəli"
    }
    const lang2 = {
        ru: "Понедельник",
        en: "Monday",
        az: "Bazar ertəsi"
    }
    const lang3 = {
        ru: "Вторник",
        en: "Tuesday",
        az: "Çərşənbə axşamı"
    }
    const lang4 = {
        ru: "Среда",
        en: "Wednesday",
        az: "Çərşənbə"
    }
    const lang5 = {
        ru: "Четверг",
        en: "Thursday",
        az: "Cümə axşamı"
    }
    const lang6 = {
        ru: "Пятница",
        en: "Friday",
        az: "Cümə"
    }
    const lang7 = {
        ru: "Суббота/Воскресенье",
        en: "Saturday/Sunday",
        az: "şənbə/bazar"
    }
    const lang8 = {
        ru: "С 8.00 до 10.00",
        en: "From 8.00 to 10.00",
        az: "8.00-dan 10.00-a kimi"
    }

    const lang9 = {
        ru: "С 1 2.00 до 15.00",
        en: "From 12.00 to 15.00",
        az: "12.00-dan 15.00-a kimi"
    }
    const lang10 = {
        ru: "С 12.00 до 16.00",
        en: "From 12.00 to 16.00",
        az: "12.00-dan 16.00-a kimi"
    }
    const lang11 = {
        ru: " Что бы узнавать о новых рубриках или эфирах вне расписания подписывайтесь на нас в телеграмм @fefm46",
        en: "To find out about new sections or broadcasts outside the schedule subscribe to us in telegram @fefm46",
        az: "Cədvəldən kənar yeni bölmələr və ya yayımlar haqqında məlumat əldə etmək üçün telegramda @fefm46 bizə abunə olun"


    }
    return (
        <div className='schedule'>
            <h2>{lang1[language]}</h2>
            <div className="schedule-grp">
                <div className="schedule1">
                    <h3>{lang2[language]}</h3>
                    <div className="sch-intro">
                        <p>{lang8[language]}</p>
                        <p>{lang9[language]}</p>
                    </div>
                </div>

                <div className="schedule1">
                    <h3>{lang3[language]}</h3>
                    <div className="sch-intro">
                        <p>{lang8[language]}</p>
                        <p>{lang9[language]}</p>
                    </div>
                </div>

                <div className="schedule1">
                    <h3>{lang4[language]}</h3>
                    <div className="sch-intro">
                        <p>{lang8[language]}</p>
                        <p>{lang9[language]}</p>
                    </div>
                </div>

                <div className="schedule1">
                    <h3>{lang5[language]}</h3>
                    <div className="sch-intro">
                        <p>{lang8[language]}</p>
                        <p>{lang9[language]}</p>
                    </div>
                </div>

                <div className="schedule1">
                    <h3>{lang6[language]}</h3>
                    <div className="sch-intro">
                        <p>{lang8[language]}</p>
                        <p>{lang9[language]}</p>
                    </div>
                </div>

                <div className="schedule1">
                    <h3>{lang7[language]}</h3>
                    <div className="sch-intro">
                        <p>{lang10[language]}</p>
                    </div>
                </div>

            </div>
            <div className="fm">
                <p>{lang11[language]}</p>

            </div>
        </div>
    )
}

export default Schedule