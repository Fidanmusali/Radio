import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageContext, { LanguageSwicher } from '../../../../assets/Language';
import { RxHamburgerMenu } from "react-icons/rx";
import './style.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    const { language } = useContext(LanguageContext);

    const lang1 = {
        ru: 'Главная',
        en: 'Home',
        az: 'Ev'
    };
    const lang2 = {
        ru: 'Проекты',
        en: 'Projects',
        az: 'Layihələr'
    };
    const lang3 = {
        ru: 'Акции',
        en: 'Stock',
        az: 'Səhm'
    };
    const lang4 = {
        ru: 'Контакты',
        en: 'Contacts',
        az: 'Əlaqələr'
    };

    return (
        <nav>
            <div className="nav">
                <div className={`navBar ${showNavbar ? "active" : ""}`}>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>{lang1[language]}</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/projects'>{lang2[language]}</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/stock'>{lang3[language]}</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/contact'>{lang4[language]}</NavLink>
                </div>
                <div className="divNavbar">
                    <div className="navbar-icon" onClick={handleShowNavbar}>
                        <RxHamburgerMenu />
                    </div>
                    <div className="lang-switch">
                        <LanguageSwicher />
                    </div>
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
