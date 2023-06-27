import React from 'react';
import { NavLink} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './oops.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
///IMG
import oopsTwo from './pictures/404.webp';


const Oops = () => {
  ///is responsible for translating the component
  const { t } = useTranslation(['Oops']);
    
  return (
    <div className={styles.first__screen__404}>
      <main className={styles.page}>
        <div className={styles.page__container}>

          <div className={styles.oops__img}>
            <img src={oopsTwo} alt="404"/>
          </div>

          <div className={styles.oops__text}>
            <h2>{t ('oops')}</h2>
            <p>{t ('oopsText')}</p>
            <button className={styles.button}><NavLink to="/">{t ('oopsBtn')}</NavLink></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Oops;