import React, { useContext } from 'react'
import './style.css'
import p1 from "/public/img/player1.png"
import p2 from "/public/img/player2.png"
import LanguageContext from '../../../../../assets/Language'

const RadioPlayer = () => {
    const { language } = useContext(LanguageContext)
    const lang1 = {
        ru: "Слушайте любимые радиостанции онлайн в одном приложении, сохраняйте понравившиеся в закладки и наслаждайтесь музыкой на любой вкус. Высокое качество звука, удобный интерфейс, ничего лишнего всё это совершенно бесплатно.",
        en: "Listen to your favorite radio stations online in one application, save your favorites as bookmarks and enjoy music for every taste. High sound quality, user-friendly interface, nothing superfluous - all this is completely free.",
        az: "Sevimli radio stansiyalarınızı bir proqramda onlayn dinləyin, sevimli radiolarınızı əlfəcin kimi qeyd edin və hər zövqə uyğun musiqidən həzz alın. Yüksək səs keyfiyyəti, istifadəçi dostu interfeys, artıq heç nə yoxdur - bütün bunlar tamamilə pulsuzdur."
    }

    const lang2 = {
        ru: "В приложении представлены эфирные федеральные радиостанции и радиостанции вашего региона. Выбирайте радио из обширного каталога.Добавляйте любимые станции в «избранное». Возвращайтесь к недавно прослушанным радиостанциям в специальной вкладке.слушайте любимую музыку в фоновом режиме",
        az: "Tətbiq bölgənizdəki federal radio stansiyaları və radio stansiyalarını təqdim edir. Geniş kataloqdan radio seçin.Sevimli stansiyalarınızı sevimlilərinizə əlavə edin. Xüsusi nişanda son dinlənmiş radio stansiyalarına qayıdın. Fəaliyyətinizdən yayınma:fonda sevdiyiniz musiqiyə qulaq asın",
        en: "The application presents on-air federal radio stations and radio stations in your region. Choose a radio from an extensive catalog. Add your favorite stations to your favorites. Return to recently listened to radio stations in a special tab. Don't be distracted from your activities: listen to your favorite music in the background"

    }
const lang3={
    ru:"Радио «Железо ФМ» представляет проект команды молодости и позитива «16» (16 плюс минус). Чем живет юное поколение Железногорска, какую музыку слушает и какие планы строят на будущее?",
    en:"“Radio “Zhelezo FM” presents the project of the team of youth and positivity “16” (16 plus minus). How do the young generation of Zheleznogorsk live, what music do they listen to and what plans do they make for the future?",
    az:"“Radio” Jelezo FM” gənclik və pozitivlik komandasının “16” layihəsini təqdim edir (16 plus minus). Jeleznoqorskun gənc nəsli necə yaşayır, hansı musiqiyə qulaq asırlar və gələcək üçün hansı planlar qururlar?"

}

const lang4={
    ru:'Об этом вы узнаете в радиошоу «16», совместный проект радио "Железо ФМ" и "Детского и юношеского клуба журналистов". Программа выходит каждую субботу в 18:00. Хронометраж: 5 минут.',
    az:'Bu barədə "Jelezo FM" radiosu və "Jurnalistlərin Uşaq və Gənclər Klubu"nun birgə layihəsi olan "16" radio şousunda öyrənəcəksiniz. Veriliş hər şənbə saat 18:00-da yayımlanır. Vaxt: 5 dəqiqə.',
    en:'You will learn about this in the radio show “16”, a joint project of the radio “Zhelezo FM” and the “Children and Youth Club of Journalists”. The program airs every Saturday at 18:00. Timing: 5 minutes.'
}

    return (
        <div className='radio-player'>
            <div className="player1">
                <div className="part1">
                    <img src={p1} alt="" />
                    <p>{lang1[language]}</p>
                </div>
                <p>{lang2[language]}</p>
            </div>

            <div className="player1">
                <div className="part1">
                    <img src={p2} alt="" />
                    <p>{lang3[language]}</p>
                </div>
                <p>{lang4[language]}</p>

            </div>
        </div>
    )
}

export default RadioPlayer