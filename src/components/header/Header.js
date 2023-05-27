import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import '../../i18n'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Main from '../../Pages/Main/Main';
import Generate from '../../Pages/Generate/Generate';
import Contact from '../../Pages/Contact/Contact';
import Pricing from '../../Pages/Pricing/Pricing';
import Blog from '../../Pages/Blog/Blog';
import Oops from '../../Pages/Oops/Oops';
import SignUp from '../../Pages/SignUp/SignUp';
import SignIn from '../../Pages/SignIn/SignIn';
import './header.scss';
import '../../fonts/fonts.scss';

const Header = () => {
const {i18n, t} = useTranslation(["header"])
useEffect (() => {
    if(localStorage.getItem("i18nextLng")?.length > 2){
        i18next.changeLanguage("en");
    }
},[])

const handleLanguageChange = (e) =>{
    i18n.changeLanguage(e.target.value);
} 

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const MenuBtnClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
      };

  return (
    <BrowserRouter>
    <header className='header'>
        <div className="header__container">
            <div className="menu">
                <div className="header__logo">
                    <div className="header__row">
                        <NavLink to="/" onClick={closeMenu}>iTerms</NavLink>
                    </div>
                </div>
 
                <div className="menu-btn" onClick={MenuBtnClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <nav className={`header__menu ${isMenuOpen ? 'active' : ''}`}>
                <ul className="header__menu__list">
                    <li className="menu__item">
                        <NavLink  to="/generate" onClick={closeMenu}>{t ("generate")}</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink  to="/contact" onClick={closeMenu}>{t ("contactUs")}</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/pricing" onClick={closeMenu}>{t ("pricing")}</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/blog" onClick={closeMenu}>{t ("blog")}</NavLink>
                    </li>  
                </ul> 
 
                <div className="header__languages">
                    <select value={localStorage.getItem("i18nextLng")} onChange={handleLanguageChange}>
                        <option value='ua' className="ua">Ua</option> 
                        <option value='en' className="en" selected >En</option>
                    </select>
                </div>
            </nav> 

            <div className="header__btn">
               <button className="header__log__in__btn"><NavLink to="/signIn">{t ("BtnLogIn")}</NavLink></button> 
               <button className="header__sign__up__btn"> <NavLink to="/signUp">{t ("BtnSignUp")}</NavLink></button>
            </div>
        </div>
    </header>

    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/generate' element={<Generate />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='*' element={<Oops />} />
    </Routes>

    </BrowserRouter>
  )
}

export default Header