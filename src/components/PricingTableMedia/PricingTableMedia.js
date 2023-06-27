import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './pricingTableMedia.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';

const PricingTableMedia = () => {
  const { t } = useTranslation(['pricingTable']);

  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  
  const toggleAccordion1 = () => {
    setActiveIndex1((prevIndex) => (prevIndex === null ? 1 : null));
  };
  
  const toggleAccordion2 = () => {
    setActiveIndex2((prevIndex) => (prevIndex === null ? 1 : null));
  };

  return (
    <div className={styles.pricing__container}>
      <div className={styles.block__pro}>
        <div className={styles.most__popular}>
          <p>{t ('mostPopular')}</p>
        </div>
        <div className={styles.block__table}>
          <span className={styles.for__startups}>{t ('forStartups')}</span>
          <h3>{t ('pro')}</h3>
          <p><sup>$</sup>1<sup>95</sup><span>{t ('month')}</span></p>
          <button>{t ('buttonOne')}</button>
        </div>

        <div className={styles.accordion__tab}>
          <button
            aria-expanded={activeIndex1 === 1}
            onClick={toggleAccordion1}>   
            <span className={styles.accordion__title}>{t ('seeAll')}</span>
            <span className={styles.icon} aria-hidden="true"></span>
          </button>
          {activeIndex1 === 1 && (
            <div className={`${styles.accordion__content} ${styles.open}`}>
              <h3>{t ('legalPolicies')}</h3>
              <ul className={styles.item__pro}>
                <li>{t ('GDPR')}</li>
                <li>{t ('remarketing')}</li>
                <li>{t ('ads')}</li>
                <li>{t ('analytics')}</li>
                <li>{t ('processors')}</li>
              </ul>

              <h3>{t ('website')}</h3>
              <ul className={styles.item__pro}>
                <li>{t ('hosted')}</li>
                <li>{t ('embed')}</li>
                <li>{t ('updates')}</li>
              </ul>

              <h3>{t ('customizeDownload')}</h3>
              <ul className={styles.item__pro}>
                <li>{t ('TXT')}</li>
                <li>{t ('HTML')}</li>
                <li>{t ('DOCX')}</li>
                <li>{t ('customLog')}</li>
                <li>{t ('customFont')}</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className={styles.block__basic}>
        <div className={styles.block__table}>
          <span className={styles.for__businesses}>{t ('forBusinesses')}</span>
          <h3>{t ('basic')}</h3>
          <p><sup>$</sup>0<span>{t ('oneTime')}</span></p>
          <button>{t ('buttonTwo')}</button>
        </div>
        <div className={styles.accordion__tab}>
          <button
            aria-expanded={activeIndex2 === 1}
            onClick={toggleAccordion2}>
            <span className={styles.accordion__title}>{t ('seeAll')}</span>
            <span className={styles.icon} aria-hidden="true"></span>
          </button>
          {activeIndex2 === 1 && (
            <div className={`${styles.accordion__content} ${styles.open}`}>
              <h3>{t ('legalPolicies')}</h3>
              <ul className={styles.item__basic}>
                <li className={styles.included}>{t ('GDPR')}</li>
                <li className={styles.included}>{t ('remarketing')}</li>
                <li className={styles.included}>{t ('ads')}</li>
                <li className={styles.included}>{t ('analytics')}</li>
                <li className={styles.included}>{t ('processors')}</li>
              </ul>

              <h3>{t ('website')}</h3>
              <ul className={styles.item__basic}>
                <li className={styles.not_included}>{t ('hosted')}</li>
                <li className={styles.not_included}>{t ('embed')}</li>
                <li className={styles.not_included}>{t ('updates')}</li>
              </ul>

              <h3>{t ('customizeDownload')}</h3>
              <ul className={styles.item__basic}>
                <li className={styles.included}>{t ('TXT')}</li>
                <li className={styles.not_included}>{t ('HTML')}</li>
                <li className={styles.not_included}>{t ('DOCX')}</li>
                <li className={styles.not_included}>{t ('customLog')}</li>
                <li className={styles.not_included}>{t ('customFont')}</li>
              </ul>
            </div>
          )}  
        </div> 
      </div>
    </div>
  );
};

export default PricingTableMedia;