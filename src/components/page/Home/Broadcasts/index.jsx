import React, { useContext } from 'react';
import './style.css';
import LanguageContext from '../../../../assets/Language';
import { Swipers } from './Swipers';
import RadioPlayer from './RadioPlayer';

const Broadcasts = () => {
    const { language } = useContext(LanguageContext);
    const lang1 = {
        ru: 'Трансляции',
        en: 'Broadcasts',
        az: 'Verilişlər'
    };
    return (
        <div className='broadcasts'>
            <h2>{lang1[language]}</h2>
            <div className="swiper">
                <Swipers/>
            </div>
            <div className="player">
                <RadioPlayer/>
            </div>
        </div>
    );
}

export default Broadcasts;