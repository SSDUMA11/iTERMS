import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './titleMain.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
///IMG
import plane from './pictures/Paper_plane.webp';
import Hero from './pictures/Hero_image.webp';
import Line from './pictures/line.webp';
import Cookie from './pictures/Cookie.webp';
import Document from './pictures/Document.webp';
import Lock from './pictures/Lock.webp';
import MarkerTitle from './pictures/MarkerTitle.webp';

const TitleMain = () => {
  ///is responsible for translating the component
  const { t } = useTranslation(['titleMain']);

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
      x: -100,
      opacity:0,
    },
    visible:custom =>({
      x: 0,
      opacity:1,
      transition:{delay: custom * 0.4},
    }),
  };
  const markAnimation ={
    hidden:{
      y: 20,
      opacity:0,
    },
    visible:custom =>({
      x: 0,
      opacity:1,
      transition:{delay: custom * 0.4},
    }),
  };
  const animationLock ={
    hidden:{
      x: 0,
      opacity:1,
    },
    visible:({
      x:5,
      y:5,
      opacity:1,
      transition:{
        duration:1, 
        repeat: Infinity, 
        repeatType:'reverse',
      },
    }),
  };
  const animationCookie ={
    hidden:{
      x: 0,
      opacity:1,
    },
    visible:({
      x:4,
      y:-5,
      opacity:1,
      transition:{
        duration:1, 
        repeat: Infinity, 
        repeatType:'reverse',
      },
    }),
  };
  const animationDocument ={
    hidden:{
      x: 0,
      opacity:1,
    },
    visible:({
      x:-4,
      y:4,
      opacity:1,
      transition:{
        duration:1, 
        repeat: Infinity, 
        repeatType:'reverse',
      },
    }),
  };
  const animationPlane ={
    hidden:{
      x: -20,
      opacity:1,
    },
    visible:({
      x:15,
      y:5,
      opacity:1,
      transition:{
        duration:2, 
        repeat: Infinity, 
        repeatType:'reverse',
      },
    }),
  };
  const animationHero ={
    hidden:{
      x: 0,
      opacity:1,
    },
    visible:({
      x:5,
      y:5,
      opacity:1,
      transition:{
        duration:2, 
        repeat: Infinity, 
        repeatType:'reverse',
      },
    }),
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"  
      className={styles.first__screen}>
      <div className={styles.first__screen__img}>
        {isSmallScreen ? '' : <motion.img custom={1} variants={animationHero} src={Hero} alt="" className={styles.hero__img}/>}
        <div className={styles.line__plane}>
          <motion.img custom={1} variants={animationLock} src={Lock} alt="" className={styles.lock}/>
                    
          {isSmallScreen ? <motion.img custom={1} variants={animationHero} src={Hero} alt="" className={styles.hero__img}/> : ''}

          <motion.img custom={1} variants={animationCookie}          
            src={Cookie} alt="" className={styles.cookie}/>

          <motion.img custom={1} variants={animationDocument} src={Document} alt="" className={styles.document}/>
          <img src={Line} alt="" className={styles.line}/>

          <motion.img custom={1} variants={animationPlane} src={plane} alt="" className={styles.plane}/>

        </div>
      </div>
      <div className={styles.block__title__containere}>
        <motion.div         
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once:true}}   
          className={styles.block__title}>
          <motion.p custom={1} variants={titleAnimation} className={styles.disclaimer}>{isSmallScreen ? t ('disclaimerOne'): t ('disclaimerTwo')}</motion.p>
          <motion.h1 custom={1} variants={titleAnimation}>{t ('title')}</motion.h1>
          {isSmallScreen ? <motion.img custom={2} variants={markAnimation} src={MarkerTitle} alt="" className={styles.marker__title} /> 
            : <motion.p custom={2} variants={titleAnimation} className={styles.subtitle}>{t ('subtitleOne')}<b>{t ('subtitleTwo')}</b> {t ('for')} <span>{t ('free')}</span></motion.p>}
          <motion.div custom={3} variants={titleAnimation} className={styles.button}>
            <button className={styles.started__btn}>{isSmallScreen ? t ('buttonOne'): t ('buttonTwo')}</button>
            <a href="*">{t ('a')}<span className={styles.arrow}></span></a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
  
export default TitleMain;