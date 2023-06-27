import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import styles from './pricing.module.scss';
import '../../fonts/fonts.scss';
///components
import PricingTable from '../../components/PricingTable/PricingTable';
import PricingTableMedia from '../../components/PricingTableMedia/PricingTableMedia';
import TrustedProvisions from '../../components/TrustedProvisions/TrustedProvisions';
import Questions from '../../components/questions/Questions';
import Footer from '../../components/footer/Footer';
import SwitchMonth from '../../components/Switch/SwitchMonth';

const Pricing = () => {
  ///is responsible for translating the component
  const { t } = useTranslation(['pricing']);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 570); ///the table when the screen width is less than 570px

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 570);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div>
      <main className={styles.pricing__page}>
        <div className={styles.pricing__container}>
          <div className={styles.pricing__block__title}>
            <p className={styles.pricing__disclaimer}>{t ('disclaimer')}</p>
            <h1 className={styles.pricing__title}>{t ('title')}</h1>
            <p className={styles.pricing__text}>{t ('subtitle')}</p>
          </div>
          <SwitchMonth/>
          {isSmallScreen ? <PricingTableMedia /> : <PricingTable />}
        </div>
      </main>

      <TrustedProvisions/>
      <Questions/>
      <Footer/>
      
    </div>
  );
};

export default Pricing;