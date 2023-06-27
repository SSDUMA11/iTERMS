import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/scss';
import styles from './sliderComments.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
import {slides} from './Customers';
///IMG
import Stars from './pictures/Stars.webp';
import Rectangle from './pictures/Rectangle.webp';
///components
import StarRating from '../StarRating/StarRating';
import NavigationSlider from '../NavigationSlider/NavigationSlider';

const SliderComments  = () => {
  ///is responsible for translating the component
  const { t } = useTranslation(['sliderComments']);
  const slidesOdj = t('slides',{returnObjects:true} );
  slides.forEach((slide, idx) => {
    slidesOdj[idx].img = slide.img;
  });
  ///
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

  ///Animation
  const titleAnimation ={
    hidden:{
      x: -200,
      opacity:0,
    },
    visible:custom =>({
      x: 0,
      opacity:1,
      transition:{
        delay: custom * 0.2,
        duration:1,
      },
    }),
  };

  const sliderAnimation ={
    hidden:{
      x: 200,
      opacity:0,
    },
    visible:custom =>({
      x: 0,
      opacity:1,
      transition:{
        delay: custom * 0.4,
        duration:1,
      },
    }),
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once:true}}
      className={styles.slider}>
      <motion.div custom={1} variants={titleAnimation} className={styles.title__container}>
        <div className={styles.background__text}>
          <img src={Rectangle} alt=""/>
          <img src={Rectangle} alt=""/>
        </div>
        <div className={styles.title}>
          <div className={styles.title__block}>
            <p className={styles.disclaimer}>{isSmallScreen ? t ('disclaimerOne'): t ('disclaimerTwo')}</p>
            <h2>{isSmallScreen ? t ('titleOne'): t ('titleTwo')}</h2>
          </div>
          <div className={styles.subtitle__block}>
            <p className={styles.subtitle}>{isSmallScreen ? t ('subtitleOne'): t ('subtitleTwo')}</p>
          </div>
        </div>
      </motion.div>

      <motion.div custom={1} variants={sliderAnimation}>
        <Swiper className={styles.swiper}
          modules={[Navigation, Pagination]}
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={'auto'}
          speed={800}
          centeredSlides={true}
          loop={true}
          navigation = {{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
            clickable: true,
          }}>

          {slidesOdj.map(user =>(
            <SwiperSlide key={user.id} className={styles.swiper_slide}>
              <div className={styles.block__name}>
                <div className={styles.cards__img}>
                  <img src={user.img} alt="img"/>
                </div>
                <div className={styles.cards__name}>
                  <h3>{user.name}</h3>
                  <p>{user.status}</p>
                </div>
              </div>
              <div className={styles.block__text}>
                <p>{user.text} </p>
                <div className={styles.rating}>{user.rating}<img src={Stars} alt="img"/></div>
              </div>
            </SwiperSlide>
          ))}
          <NavigationSlider/>
        </Swiper>
      </motion.div>
      <StarRating/>
    </motion.div>
  );
};
export default SliderComments;
