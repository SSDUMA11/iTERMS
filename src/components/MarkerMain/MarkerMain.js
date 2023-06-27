import React,{ useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './markerMain.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
///IMG
import Compatible from './pictures/Compatible.webp';
import Embed from './pictures/Embed.webp';
import GDPR from './pictures/GDPR.webp';
import HTML from './pictures/HTML.webp';
import Hosted from './pictures/Hosted.webp';
import Payment from './pictures/Payment.webp';
import Unlimited from './pictures/Unlimited.webp';
import Updated from './pictures/Updated.webp';
import Cards_one from './pictures/Cards_one.webp';
import Cards_two from './pictures/Cards_two.webp';
import Cards_three from './pictures/Cards_three.webp';
import Cards_four from './pictures/Cards_four.webp';
import Cards_five from './pictures/Cards_five.webp';
import Marker_line from './pictures/Marker_line.webp';
import Marker from './pictures/marker.webp';
///components
import SwitchMonth from '../Switch/SwitchMonth';

const MarkerMain = () => {
  const { t } = useTranslation(['markerMain']);
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
  const imgGroupOneAnimation ={
    hidden:{
      x: -1000,
      opacity:1,
    },
    visible:custom =>({
      x:0,
      y:0,
      opacity:1,
      transition:{
        delay: custom * 0.4,
        duration:1, 
      },
    }),
  };
  const imgGroupTwoAnimation ={
    hidden:{
      x: 1000,
      opacity:1,
    },
    visible:custom =>({
      x:0,
      y:0,
      opacity:1,
      transition:{
        delay: custom * 0.4,
        duration:1, 
      },
    }),
  };
  const titleAnimation ={
    hidden:{
      y: 100,
      opacity:0,
    },
    visible:custom =>({
      x: 0,
      opacity:1,
      transition:{
        delay: custom * 0.4,
        duration:1},
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once:true}}
      className={styles.block__marker}>
      <div className={styles.img__group__one}>
        {isSmallScreen ? '': <motion.img custom={1} variants={imgGroupOneAnimation} src={Cards_two} alt="" className={styles.cards_two}/>}
        {isSmallScreen ? '': <motion.img custom={1} variants={imgGroupOneAnimation} src={Cards_three} alt="" className={styles.cards_three}/>}
        {isSmallScreen ? <motion.img custom={1} variants={imgGroupOneAnimation} src={Cards_five} alt="" className={styles.cards_five}/>: ''}
      </div>

      <div className={styles.text__group}>
        <motion.div custom={1} variants={titleAnimation} className={styles.marker__title}>
          <div className={styles.title__block}>
            <p className={styles.disclaimer}>{isSmallScreen ? t ('disclaimerOne'): t ('disclaimerTwo')}</p>
            <h2>{isSmallScreen ? t ('titleOne'): t ('titleTwo')}</h2>
            <p className={styles.subtitle}>{isSmallScreen ? t ('subtitleOne'): t ('subtitleTwo')}</p>
          </div>
        </motion.div>

        {isSmallScreen ? <SwitchMonth/> : ''}

        <div className={styles.marker__price}>
          <img src={Marker_line} alt="" className={styles.marker__line}/>
          <img src={Marker} alt="" className={styles.marker}/>
          <p className={styles.price}><sup>$</sup>6<sup>95</sup></p>
          <h3>{isSmallScreen ? t ('priceTextSmall'): t ('priceTextBig')}</h3>
          {isSmallScreen ? <a href="/pricing">{t ('seePricing')} <span className={styles.arrow}></span></a> : <p>{t ('documents')}</p>} 
        </div>

        <div className={styles.box__cards}>
          <div className={styles.cards}>
            <img src={GDPR} alt=""/>
            <p>{t ('GDPR')}</p>
          </div>
          <div className={styles.cards}>
            <img src={Embed} alt=""/>
            <p>{t ('embed')}</p>
          </div>
          <div className={styles.cards}>
            <img src={Hosted} alt=""/>
            <p>{t ('hosted')}</p>
          </div>
          <div className={styles.cards}>
            <img src={Updated} alt=""/>
            <p>{t ('updated')}</p>
          </div>
          <div className={styles.cards}>
            <img src={Payment} alt=""/>
            <p>{t ('payment')}</p>
          </div>
          <div className={styles.cards}>
            <img src={Compatible} alt=""/>
            <p>{t ('compatible')}</p>
          </div>
          <div className={styles.cards}>
            <img src={HTML} alt=""/>
            <p>{t ('HTML')}</p>
          </div>
          <div className={styles.cards}>
            <img src={Unlimited} alt=""/>
            <p>{t ('unlimited')}</p>
          </div>
        </div>
      </div>

      <div className={styles.img__group__two}> 
        {isSmallScreen ? '' : <motion.img custom={1} variants={imgGroupTwoAnimation} src={Cards_one} alt="" className={styles.cards_one}/>}
        {isSmallScreen ? '' : <motion.img custom={1} variants={imgGroupTwoAnimation} src={Cards_four} alt="" className={styles.cards_four}/>}
        {isSmallScreen ? <motion.img custom={1} variants={imgGroupTwoAnimation} src={Cards_two} alt="" className={styles.cards_two}/> : ''}
      </div>
    </motion.div>
  );
};

export default MarkerMain;

