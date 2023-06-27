import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/scss';
import 'swiper/css/scrollbar';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import styles from './categories.module.scss';
import '../../fonts/fonts.scss';
import PropTypes from 'prop-types';

const Categories = ({getCategoryCount, filterResult}) => {
  ///is responsible for translating the component
  const { t } = useTranslation(['posts']);

  ///The aside block changes when the screen width is less than 501px.
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 501);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 501);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {isSmallScreen ?
        <aside className={styles.swiper__aside}>
          <h2>{t ('categories')}</h2>
          <Swiper className={styles.swiper}
            modules={[Scrollbar]}
            grabCursor={true}
            spaceBetween={30}
            slidesPerView={'auto'}
            speed={700}
            centeredSlides={true}
            loop={true}
            scrollbar={{
              hide: true}}>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Accounts')}>
                {t ('accounts')} ({getCategoryCount('Accounts')})
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Bookkeeping')}>
                {t ('bookkeeping')} ({getCategoryCount('Bookkeeping')})
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Business')}>
                {t ('business')} ({getCategoryCount('Business')})
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Business Advice')}>
                {t ('businessAdvice')} ({getCategoryCount('Business Advice')})
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Cash')}>
                {t ('cash')} ({getCategoryCount('Cash')})
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Collection')}>
                {t ('collection')} ({getCategoryCount('Collection')})
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Contracts')}>
                {t ('contracts')} ({getCategoryCount('Contracts')})
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Invoices')}>
                {t ('invoices')} ({getCategoryCount('Invoices')})
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Ecommerce')}>
                {t ('ecommerce')} ({getCategoryCount('Ecommerce')})
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Misc')}>
                {t ('misc')} ({getCategoryCount('Misc')})
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Entrepreneur Interviews')}>
                {t ('entrepreneurInterviews')} ({getCategoryCount('Entrepreneur Interviews')})
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.category__item}>
              <button onClick={() => filterResult('Freelancer')}>
                {t ('freelancer')} ({getCategoryCount('Freelancer')})
              </button>
            </SwiperSlide>
          </Swiper>
        </aside> 
        : 
        <aside className={styles.sticky__aside}>
          <h2>{t ('categories')}</h2>
          <ul className={styles.category__list}>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Accounts')}>
                {t ('accounts')} ({getCategoryCount('Accounts')})
              </button>
            </li>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Bookkeeping')}>
                {t ('bookkeeping')} ({getCategoryCount('Bookkeeping')})
              </button>
            </li>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Business')}>
                {t ('business')} ({getCategoryCount('Business')})
              </button>
            </li>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Business Advice')}>
                {t ('businessAdvice')} ({getCategoryCount('Business Advice')})
              </button>
            </li>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Cash')}>
                {t ('cash')} ({getCategoryCount('Cash')})
              </button>
            </li>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Collection')}>
                {t ('collection')} ({getCategoryCount('Collection')})
              </button>
            </li>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Contracts')}>
                {t ('contracts')} ({getCategoryCount('Contracts')})
              </button>
            </li>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Invoices')}>
                {t ('invoices')} ({getCategoryCount('Invoices')})
              </button>
            </li>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Ecommerce')}>
                {t ('ecommerce')} ({getCategoryCount('Ecommerce')})
              </button>
            </li>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Misc')}>
                {t ('misc')} ({getCategoryCount('Misc')})
              </button>
            </li>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Entrepreneur Interviews')}>
                {t ('entrepreneurInterviews')} ({getCategoryCount('Entrepreneur Interviews')})
              </button>
            </li>
            <li className={styles.category__item}>
              <button onClick={() => filterResult('Freelancer')}>
                {t ('freelancer')} ({getCategoryCount('Freelancer')})
              </button>
            </li>
          </ul>
        </aside>
      }
    </>
  );
};

Categories.propTypes = {
  getCategoryCount: PropTypes.func.isRequired,
  filterResult: PropTypes.array.isRequired,
};

export default Categories;