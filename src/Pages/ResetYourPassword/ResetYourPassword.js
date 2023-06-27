import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './resetYourPassword.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
///OMG
import resetPassword from './pictures/Reset_Password.webp';


const ResetYourPassword = () => {
  const { t } = useTranslation(['resetYourPassword']);
  return (
    <div className={styles.page}>
      <div className={styles.first__screen}></div>
      <div className={styles.wrapper__container}>
        <div className={styles.cards__welcome}>
          <div className={styles.blok__welcome}>
            <div className={styles.welcome__img}>
              <img src={resetPassword} alt=""/>
            </div>
    
            <div className={styles.welcome__title}>
              <h3>{t ('title')}</h3>
            </div>
    
            <div className={styles.welcome__text}>
              <p>{t ('subtitle')}</p>
            </div>
                
            <button className={styles.welcome__btn}>{t ('button')}</button>
          </div>
    
          <div className={styles.more__help}>
            <p>{t ('text')}</p> 
            <a href="*">{t ('linkOne')}</a>
          </div>
    
          <div className={styles.unsubscribe}>
            <p>{t ('textTwo')}<a href="*">{t ('linkTwo')}</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetYourPassword;