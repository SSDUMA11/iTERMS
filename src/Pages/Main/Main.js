import React,{ useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from  './main.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';

///components
import TitleMain from '../../components/TitleMain/TitleMain';
import BlockAI from '../../components/BlockAI/BlockAI';
import VideoMain from '../../components/VideoMain/VideoMain';
import Slider from '../../components/slider/Slider';
import TrustedProvisions from '../../components/TrustedProvisions/TrustedProvisions';
import SliderCustomers from '../../components/sliderCustomers/SliderComments';
import WhatNew from '../../components/WhatNew/WhatNew';
import Questions from '../../components/questions/Questions';
import Footer from '../../components/footer/Footer';
import MarkerMain from '../../components/MarkerMain/MarkerMain';


const Main = () => {
  const { t } = useTranslation(['main']);
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

  return (
    <div className={styles.page__main}>

      <TitleMain/>
      <BlockAI/>
      <VideoMain/>

      <div className={styles.title__slider__block}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.2, once:true}}
          custom={2} 
          variants={titleAnimation} 
          className={styles.__container}>
          <div className={styles.background__text}>Solutions</div>
          <div className={styles.title__block}>
            <div className={styles.title}>
              <p className={styles.disclaimer}>{isSmallScreen ? t ('disclaimerOneSmall'): t ('disclaimerOneBig')}</p>
              <h2>{isSmallScreen ? t ('titleOneSmall'): t ('titleOneBig')}</h2>
            </div>
            <div className={styles.subtitle__text}>
              <p className={styles.subtitle}>{isSmallScreen ? t ('subtitleOneSmall'): t ('subtitleOneBig')}</p>
            </div>
          </div>
        </motion.div>

        <Slider/>

      </div>

      <MarkerMain/>
      <TrustedProvisions/>
      <SliderCustomers/>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once:true}}
        custom={2} 
        variants={titleAnimation}
        className={styles.title__cards__block}>
        <div className={styles.__container}>
          <div className={styles.title__block}>
            <div className={styles.title}>
              <p className={styles.disclaimer}>{isSmallScreen ? t ('disclaimerTwoSmall'): t ('disclaimerTwoBig')}</p>
              <h2>{isSmallScreen ? t ('titleTwoSmall'): t ('titleTwoBig')}</h2>
            </div>
            <div className={styles.subtitle__text}>
              <p className={styles.subtitle}>{isSmallScreen ? t ('subtitleTwoSmall'): t ('subtitleTwoBig')}</p>
            </div>
          </div>
        </div>
        <motion.div custom={1} variants={titleAnimation}>
          <WhatNew/>
        </motion.div>
        

      </motion.div>

      <Questions/>
      <Footer/>

    </div>
  );
};

export default Main;