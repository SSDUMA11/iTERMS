import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './trustedProvisions.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
///IMG
import Businesses from './pictures/Businesses.webp';
import CompliantPageviews from './pictures/CompliantPageviews.webp';
import TermsConditions from './pictures/TermsConditions.webp';

const TrustedProvisions = () => {
  ///is responsible for translating the component
  const { t } = useTranslation(['trustedProvisions']);

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
    <main className={styles.legal__safeguards}>
      <div className={styles.legal__safeguards__container}>  
        <div className={styles.block__text}>
          <div className={styles.block__title}>
            <p className={styles.disclaimer}>{isSmallScreen ? t ('disclaimerOne'): t ('disclaimerTwo')}</p>
            <h2 className={styles.title}>{isSmallScreen ? t ('titleOne'): t ('titleTwo')}</h2>
            <p className={styles.text}>{isSmallScreen ? t ('subtitleOne'): t ('subtitleTwo')}</p>
          </div>

          <div className={styles.cards}>
            <div className={styles.policies__created}>
              <img src={TermsConditions} alt=""/>
              <h3>100,000+</h3>
              <p>{t ('policiesCreated')}</p>
            </div>

            <div className={styles.businesses}>
              <img src={Businesses} alt=""/>
              <h3>140,000+</h3>
              <p>{t ('businesses')}</p>
            </div>

            <div className={styles.compliant__pageviews}>
              <img src={CompliantPageviews} alt=""/>
              <h3>60 Million+</h3>
              <p>{t ('compliantPageviews')}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TrustedProvisions;