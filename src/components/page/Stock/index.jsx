import React, { useContext } from 'react'
import LanguageContext from '../../../assets/Language'
import p1 from "/public/img/p1.png"
import p2 from "/public/img/p2.png"
import "./style.css"


const Stock = () => {
  const { language } = useContext(LanguageContext)
  const lang1 = {
    ru: "Акции",
    en: "Stock",
    az: "Səhm"
  }

  const lang2 = {
    ru: 'Совсем скоро мы будем отмечать День космонавтики.К этому событию мы проведем викторину на призы телеканала «Первый космический" в сети кабельного оператора СИГНАЛ.Стартуем 7 апреля!Разыгрываем:Термосы, кружки, пауэрбанки.Все с логотипом телеканала "Первый Космический".12 апреля разыграем главные призы - светодиодные ночники "Луна" так же с логотипом "Первый космический".Вопросы викторины, как вы наверно уже догадались, будут касаться космической темы.Ну кто смотрит телеканал "Первый космический" с легкостью ответит на все вопросы.Играть будем в утреннем шоу "С той ноги" с 8 до 10 утра и в программе "Плей-лист на заказ" с 12 до 15 часов.Новый час — новая игра!Призов хватит всем!',

    en: 'Very soon we will celebrate Cosmonautics Day. For this event, we will hold a quiz for prizes from the First Space TV channel on the network of the cable operator SIGNAL. We start on April 7!We are playing: Thermoses, mugs, power banks. All with the logo of the First Space TV channel.On April 12, we will draw the main prizes - LED night lights "Moon" also with the "First Space" logo. The quiz questions, as you probably already guessed, will concern the space theme. Well, whoever watches the First Space TV channel will easily answer all the questions.We will play in the morning show “From That Leg” from 8 to 10 am and in the “Playlist to Order” program from 12 to 15 o’clock.New hour - new game!There are enough prizes for everyone!',


    az: 'Tezliklə biz Kosmonavtika Gününü qeyd edəcəyik. Bu tədbir üçün SIGNAL kabel operatorunun şəbəkəsində birinci kosmik telekanaldan hədiyyələr üçün viktorina keçirəcəyik.Biz oynayırıq: Termoslar, kupalar, power banklar Hamısı First Space TV kanalının loqosu ilə.Aprelin 12-də biz əsas hədiyyələri - "Birinci Kosmos" loqosu olan "Ay" LED gecə işıqlarını qazanacağıq. Yaxşı, First Space telekanalına baxan bütün suallara rahatlıqla cavab verəcək.Səhər saat 8-dən 10-a kimi “O ayaqdan” səhər şousunda, saat 12-dən 15-ə kimi “Sifariş üçün pleylist” proqramında oynayacağıq.Yeni saat - yeni oyun!Hər kəs üçün kifayət qədər hədiyyələr var!'
  }


  const lang3 = {
    ru: 'Игры в прямом эфире радио ZHELEZO 99.0 FM продолжаются!Призы предоставил наш партнер телеканал «Приключения HD»Каждый вечер с воскресенья по четверг (с 18 по 23 ноября) – внимательно смотри телеканал «Приключения HD» в кабельной сети провайдера «Сигнал» в пакете программ "Базовый".А с 19 по 24 ноября дозванивайтесь в утреннее шоу #СтойНоги по телефону 8(47148)777-17, отвечайте на наши вопросы и выигрывайте наборы для путешествий с символикой канала «Приключения HD»',

    en: 'Games live on radio ZHELEZO 99.0 FM continue! Prizes were provided by our partner TV channel “Adventures HD” Every evening from Sunday to Thursday (from November 18 to 23) - carefully watch the TV channel “Adventures HD” on the cable network of the provider “Signal” in the program package “Basic”. And from November 19 to 24, call the morning show #StayLegs at 8 (47148) 777-17, answer our questions and win travel kits with the symbols of the HD Adventures channel',

    az: 'ZHELEZO 99.0 FM radiosunda canlı oyunlar davam edir. Hədiyyələr partnyorumuz “Adventures HD” telekanalı tərəfindən təqdim olunur. provayderi “Əsas” proqram paketində “Siqnal” Və 19-24 noyabr tarixlərində 8 (47148) 777-17 nömrəsi ilə #StayLegs səhər şousuna zəng edin, suallarımızı cavablandırın və HD Adventures kanalının simvolları olan səyahət dəstlərini qazanın.'
  }

  const lang4 = {
    ru: '31 марта радио "Железо ФМ " исполнилось 5 лет. Первый юбилей коллектив радио со своими самыми верными радиослушателями и друзьями отметили в английском пабе. Ведущий вечера, наш друг, Дмитрий Шворнев на сцене создал атмосферу торжества, где заслуженные награды получили авторы лучших радийных проектов и наши спонсоры. Руководители радиостанции поздравили коллектив с первой значимой датой и рассказали о планах на будущее, новых проектах и переезде на новую студию. На празднике звучала живая музыка. Гремел наш один из самых удачных проектов "Живые". У ребят появились настоящие поклонники и каждую песню пели хором! Ведущие радио Ольга Ян и Наталья Птицына подготовили игры и вручали подарки самым активным. Праздник получился душевным и ярким! Спасибо всем!',

    en: `On March 31, Zhelezo FM radio turned 5 years old. The radio team celebrated its first anniversary with its most loyal radio listeners and friends in an English pub. The host of the evening, our friend, Dmitry Shvornev created a festive atmosphere on stage, where the authors of the best radio projects and our sponsors received well-deserved awards. The radio station's managers congratulated the team on their first significant date and told them about their plans for the future, new projects and moving to a new studio. Live music was played at the celebration. One of our most successful projects, "Zhivye", thundered. The guys have real fans and sang every song in chorus! Radio hosts Olga Yan and Natalia Ptitsyna prepared games and presented gifts to the most active ones. The celebration turned out to be heartfelt and bright! Thank you all!`,

    az: 'Martın 31-də "Jelezo FM" radiosunun 5 yaşı tamam oldu. Radio komandası birinci ildönümünü ən sadiq radio dinləyiciləri və dostları ilə ingilis pubında qeyd etdi. Gecənin aparıcısı, dostumuz Dmitri Şvornev səhnədə bayram ab-havası yaratdı, burada ən yaxşı radio layihələrinin müəllifləri və sponsorlarımız layiqli mükafatlar aldılar. Radiostansiyanın menecerləri kollektivi ilk əlamətdar tarix münasibətilə təbrik edib, gələcək planlarından, yeni layihələrdən və yeni studiyaya köçməkdən danışıblar. Şənlikdə canlı musiqi səsləndi. Ən uğurlu layihələrimizdən biri olan “Live” gurultulu oldu. Uşaqların əsl pərəstişkarları var idi və hər mahnını xorda oxudular! Radio aparıcıları Olqa Yan və Natalya Ptitsyna oyunlar hazırlayıb, ən fəal olanlara hədiyyələr təqdim ediblər. Tətil ruhlu və parlaq oldu! Hər kəsə təşəkkürlər!'
  }

  return (
    <div className='stock'>
      <h2>{lang1[language]}</h2>
      <div className="stockGrp">
        <div className="stock1">
          <div className="stock-img1">
            <img src={p1} alt="" />
          </div>
          <div className="stock-info">
            <p>{lang2[language]}</p>
          </div>
        </div>

        <div className="stock1">
          <div className="stock-img1">
            <img src={p2} alt="" />
          </div>
          <div className="stock-info">
            <p>{lang3[language]}</p>
          </div>
        </div>

        <div className="stock1">
          <p>{lang4[language]}</p>
        </div>

      </div>
    </div>
  )
}

export default Stock