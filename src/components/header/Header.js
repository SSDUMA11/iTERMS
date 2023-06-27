import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import '../../i18n';
import styles from './header.module.scss';
import '../../fonts/fonts.scss';
///component
import Main from '../../Pages/Main/Main';
import PolicyDetails from '../../Pages/PolicyDetails/PolicyDetails';
import BlogDetail from '../../Pages/BlogDetail/BlogDetail';
import Contact from '../../Pages/Contact/Contact';
import Pricing from '../../Pages/Pricing/Pricing';
import Blog from '../../Pages/Blog/Blog';
import Oops from '../../Pages/Oops/Oops';
import SignUp from '../../Pages/SignUp/SignUp';
import SignIn from '../../Pages/SignIn/SignIn';
import ResetYourPassword from '../../Pages/ResetYourPassword/ResetYourPassword';

const Header = () => {
  ///is responsible for translating the component 
  const { i18n, t } = useTranslation(['header']);
  ///switch language
  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en');
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  ///burger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  ///the table when the screen width is less than 769px
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 769);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  ///closes the menu burger
  const handleNavLinkClick = () => {
    if (isSmallScreen) {
      closeMenu();
    }
  };

  ///button accordion login and logout
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = () => {
    setActiveIndex((prevIndex) => (prevIndex === null ? 1 : null));
  };
  return (
    <BrowserRouter>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.menu}>
            <div className={styles.header__logo}>
              <div className={styles.header__row}>
                <NavLink to="/" onClick={closeMenu}>
                  iTerms
                </NavLink>
              </div>
            </div>

            <div
              className={`${styles.menu_btn} ${isMenuOpen ? styles.active : ''}`}
              onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <nav className={`${styles.header__menu} ${isMenuOpen ? styles.active : ''}`}>
            <ul className={styles.header__menu__list}>
              <li className={styles.menu__item}>
                <NavLink to="/generate" onClick={handleNavLinkClick}>
                  {t('generate')}
                </NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="*" onClick={handleNavLinkClick}>
                  {t('contactUs')}
                </NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/pricing" onClick={handleNavLinkClick}>
                  {t('pricing')}
                </NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/blog" onClick={handleNavLinkClick}>
                  {t('blog')}
                </NavLink>
              </li>
              {/* button LogIn &  SignUp */}
              <li>
                {isSmallScreen ? (
                  <div className={styles.accordion__tab}>
                    <button
                      aria-expanded={activeIndex === 1}
                      onClick={toggleAccordion}
                    >
                      <span className={styles.accordion__title}>{t('account')}</span>
                      <span className={styles.icon} aria-hidden="true"></span>
                    </button>
                    {activeIndex === 1 && (
                      <div
                        className={`${styles.accordion__content} ${styles.open}`}
                      >
                        <ul className={styles.item}>
                          <li>
                            <NavLink to="/signIn" onClick={handleNavLinkClick}>
                              {t('BtnLogIn')}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/signUp" onClick={handleNavLinkClick}>
                              {t('BtnSignUp')}
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  ''
                )}
              </li>
            </ul>

            <div className={styles.header__languages}>
              <select
                value={localStorage.getItem('i18nextLng')}
                onChange={handleLanguageChange}
              >
                <option value="ua" className={styles.ua}>
                  Ua
                </option>
                <option value="en" className={styles.en}>
                  En
                </option>
              </select>
            </div>
          </nav>

          <div className={styles.header__btn}>
            <button className={styles.header__log__in__btn}>
              <NavLink to="/signIn" onClick={handleNavLinkClick}>
                {t('BtnLogIn')}
              </NavLink>
            </button>
            <button className={styles.header__sign__up__btn}>
              <NavLink to="/signUp" onClick={handleNavLinkClick}>
                {t('BtnSignUp')}
              </NavLink>
            </button>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/generate" element={<PolicyDetails />} />
        <Route path="/blogDetail" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/resetYourPassword" element={<ResetYourPassword />} />
        <Route path="*" element={<Oops />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;