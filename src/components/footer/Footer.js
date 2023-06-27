import React,{ useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import styles from './footer.module.scss';
import '../../fonts/fonts.scss';

const Footer = () => {
  const { t } = useTranslation(['footer']);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 769); ///the table when the screen width is less than 769px

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 769);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <footer className={styles.footer} >
      <div className="footer__container">
        <div className={styles.footer__title}>
          <div className={styles.footer__text}>
            <div className={styles.disclaimer}>{isSmallScreen ? t ('disclaimerOne'): t ('disclaimerTwo')}</div>

            <h2>{isSmallScreen ? t ('titleOne'): t ('titleTwo')}</h2>

            <p className={styles.subtitle}>{isSmallScreen ? t ('subtitleOne'): t ('subtitleTwo')}</p>
          </div>

          <div className={styles.footer__btn}>
            <button className={styles.button}>{isSmallScreen ? t ('buttonOne'): t ('buttonTwo')}</button>
            <a href="*">{t ('a')}<span className={styles.arrow}></span></a>
          </div>
        </div>

        <div className={styles.footer__info}>
          <div className={styles.info__block}>
            <div className={styles.box}>
              <h3 className={styles.footer__iTerms}>iTerms</h3>
              {isSmallScreen ? <a href="/generate"  className={styles.iTerms__info}>{t ('termsConditions')}</a> : ''}
              {isSmallScreen ? <a href="*" className={styles.iTerms__info}>{t ('privacyPolicy')}</a> : ''}
              {isSmallScreen ? <a href="*" className={styles.iTerms__info}>{t ('disclaimer')}</a> : ''}
              {isSmallScreen ? <div className={styles.version}>
                <a href="*" className={styles.iTerms__info}>{t ('versionEn')}</a>
              </div> : ''}
              {isSmallScreen ? '' : <p className={styles.iTerms__text}>{t ('text')}</p>}
            </div>
                       
            <div className={styles.box}>
              <h3>{t ('company')}</h3>
              <a href="*" >{t ('howItWorks')}</a>
              <a href="*">{t ('reviews')}</a>
              <a href="*">{t ('contactUs')}</a>
              <a href="/blog">{t ('blog')}</a>
            </div>

            <div className={styles.box}>
              <h3>{t ('products')}</h3>
              <a href="*">{t ('solutions')}</a>
              <a href="*">{t ('trustSafety')}</a>
              <a href="*">{t ('payment')}</a>
              <a href="*">{t ('help')}</a>
            </div>

            <div className={styles.box}>
              <h3>{t ('support')}</h3>
              <a href="*">{t ('help')}</a>
              <a href="*">{t ('pricing')}</a>
              <a href="*">{t ('payment')}</a>
              <a href="*">{t ('help')}</a>
            </div>
          </div>
        </div>

        <address className={styles.footer__address}>
          <p>{t ('address')}</p>
          {isSmallScreen ? '' : <a href="/generate"  className={styles.iTerms__info}>{t ('termsConditions')}</a>}
          {isSmallScreen ? '' :<a href="*" className={styles.iTerms__info}>{t ('privacyPolicy')}</a>}
          {isSmallScreen ? '' :<a href="*" className={styles.iTerms__info}>{t ('disclaimer')}</a>}
          {isSmallScreen ? '' :<a href="*" className={styles.iTerms__info}>{t ('versionEn')}</a>}
        </address>
      </div>
    </footer>
  );
};

export default Footer;