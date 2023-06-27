import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from  './blockAI.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
///IMG
import scrin from './pictures/scrin_1.webp';
import scrin_two from './pictures/scrin_two.webp';


const BlockAI = () => {
  const { t } = useTranslation(['blockAI']);
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
  const imgAnimation ={
    hidden:{
      x: -100,
      opacity:0,
    },
    visible:custom =>({
      x: 0,
      opacity:1,
      transition:{
        delay: custom * 0.2,
        duration:1},
    }),
  };
  const textAnimation ={
    hidden:{
      x: 3100,
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
      className={styles.block__main}>
      {isSmallScreen ? '' : <div className={styles.background__text}>AI</div>}
      <div className={styles.possibilities}>
        <motion.div custom={1} variants={imgAnimation} className={styles.scrin__img}>
          {isSmallScreen ? <img src={scrin_two} alt=""/> : <img src={scrin} alt=""/> }
          {isSmallScreen ? <div className={styles.background__text}>AI</div> : ''}
        </motion.div>

        <motion.div custom={2} variants={textAnimation} className={styles.block__title}>
          <div className={styles.title}> 
            <p className={styles.disclaimer}>{isSmallScreen ? t ('disclaimerOne'): t ('disclaimerTwo')}</p>
            <h2>{isSmallScreen ? t ('titleOne'): t ('titleTwo')}</h2>
            <p className={styles.subtitle}>{isSmallScreen ? t ('subtitleOne'): t ('subtitleTwo')}</p>
          </div>

          <div className={styles.block__list}>
            {isSmallScreen ?
              <ul className={styles.list}>
                <li className={styles.list__item}>{t ('itemSmallOne')}</li>
                <li className={styles.list__item}>{t ('itemSmallTwo')}</li>
                <li className={styles.list__item}>{t ('itemSmallThree')}</li>
                <li className={styles.list__item}>{t ('itemSmallFour')}</li>
                <li className={styles.list__item}>{t ('itemSmallFive')}</li>
              </ul>
              :
              <ul className={styles.list}>
                <li className={styles.list__item}>{t ('itemBigOne')}</li>
                <li className={styles.list__item}>{t ('itemBigTwo')}</li>
                <li className={styles.list__item}>{t ('itemBigThree')}</li>
                <li className={styles.list__item}>{t ('itemBigFour')}</li>
                <li className={styles.list__item}>{t ('itemBigFive')}</li>
                <li className={styles.list__item}>{t ('itemBigSix')}</li>
                <li className={styles.list__item}>{t ('itemBigSeven')}</li>
                <li className={styles.list__item}>{t ('itemBigEight')}</li>
              </ul>
            }
          </div>

          <div className={styles.block__btn}>
            <button className={styles.generate__btn}>{t ('button')}</button>
            <div className={styles.learn__more}>
              <a href="*">{t ('a')}<span className={styles.arrow}></span></a>
            </div> 
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlockAI;