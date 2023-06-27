import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './pricingTable.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
///IMG
import doneG from './pictures/DoneG.webp';
import doneP from './pictures/DoneP.webp';
import creditCard from './pictures/creditCard.webp';

const PricingTable = () => {
  const { t } = useTranslation(['pricingTable']);
  return (
    <div className={styles.pricing__table}>
      <table className={styles.table}>
        <thead className={styles.table__head}>
          <tr>
            <th className={styles.credit__card}><img src={creditCard} alt="credit Card"/></th>
            <th className={styles.pro}>
              <div className={styles.most__popular}><p>{t ('mostPopular')}</p></div>
              <div className={styles.block__table}>
                <span className={styles.for__startups}>{t ('forStartups')}</span>
                <h3>{t ('pro')}</h3>
                <p><sup>$</sup>1<sup>95</sup><span>{t ('month')}</span></p>
                <button>{t ('buttonOne')}</button>
              </div>
            </th>
            <th className={styles.basic}>
              <div className={styles.block__table}>
                <span className={styles.for__businesses}>{t ('forBusinesses')}</span>
                <h3>{t ('basic')}</h3>
                <p><sup>$</sup>0<span>{t ('oneTime')}</span></p>
                <button>{t ('buttonTwo')}</button>
              </div>
            </th>
          </tr>
        </thead>  
        <tbody className={styles.table__body}>
          <tr>
            <td className={`${styles.first__column} ${styles.item}`}>{t ('legalPolicies')}</td>
            <td className={`${styles.second__column} ${styles.white}`}></td>
            <td></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('GDPR')}</td>
            <td className={styles.second__column}><img src={doneG} alt="done"/></td>
            <td><img src={doneP} alt="done"/></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('remarketing')}</td>
            <td className={`${styles.second__column} ${styles.white}`}><img src={doneG} alt="done"/></td>
            <td><img src={doneP} alt="done"/></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('ads')}</td>
            <td className={styles.second__column}><img src={doneG} alt="done"/></td>
            <td><img src={doneP} alt="done"/></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('analytics')}</td>
            <td className={`${styles.second__column} ${styles.white}`}><img src={doneG} alt="done"/></td>
            <td><img src={doneP} alt="done"/></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('processors')}</td>
            <td className={styles.second__column}><img src={doneG} alt="done"/></td>
            <td><img src={doneP} alt="done"/></td>
          </tr> 
          <tr>
            <td className={`${styles.first__column} ${styles.item}`}>{t ('website')}</td>
            <td className={`${styles.second__column} ${styles.white}`}></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('hosted')}</td>
            <td className={styles.second__column}><img src={doneG} alt="done"/></td>
            <td><span className={styles.dash}></span></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('embed')}</td>
            <td className={`${styles.second__column} ${styles.white}`}><img src={doneG} alt="done"/></td>
            <td><span className={styles.dash}></span></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('updates')}</td>
            <td className={styles.second__column}><img src={doneG} alt="done"/></td>
            <td><span className={styles.dash}></span></td>
          </tr> 
          <tr>
            <td className={`${styles.first__column} ${styles.item}`}>{t ('customizeDownload')}</td>
            <td className={`${styles.second__column} ${styles.white}`}></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('TXT')}</td>
            <td className={styles.second__column}><img src={doneG} alt="done"/></td>
            <td><img src={doneP} alt="done"/></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('HTML')}</td>
            <td className={`${styles.second__column} ${styles.white}`}><img src={doneG} alt="done"/></td>
            <td><span className={styles.dash}></span></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('DOCX')}</td>
            <td className={styles.second__column}><img src={doneG} alt="done"/></td>
            <td><span className={styles.dash}></span></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('downloads')}</td>
            <td className={`${styles.second__column} ${styles.white}`}><img src={doneG} alt="done"/></td>
            <td><span className={styles.dash}></span></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('customLog')}</td>
            <td className={styles.second__column}><img src={doneG} alt="done"/></td>
            <td><span className={styles.dash}></span></td>
          </tr>
          <tr>
            <td className={styles.first__column}>{t ('customFont')}</td>
            <td className={`${styles.second__column} ${styles.white}`}><img src={doneG} alt="done"/></td>
            <td><span className={styles.dash}></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;