import React, {useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import styles from './policyDetails.module.scss';
import '../../fonts/fonts.scss';
///IMG
import MadeforYourBusiness from './pictures/MadeforYourBusiness.webp';
import Customizable from './pictures/Customizable.webp';
import FreeWebHosting from './pictures/FreeWebHosting.webp';
///components
import Slider from '../../components/slider/Slider';
import TrustedProvisions from '../../components/TrustedProvisions/TrustedProvisions';
import Questions from '../../components/questions/Questions';
import Footer from '../../components/footer/Footer';
import { MyContext } from '../../App';
import { useContext } from 'react';


const PolicyDetails = () => {
  
  ///is responsible for translating the component
  const { t } = useTranslation(['policyDetails']);

  const [isSmallScreen, setIsSmallScreen] = useContext(MyContext);///the table when the screen width is less than 769px 
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
  const cardsAnimationLeft ={
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
  const cardsAnimationRidth ={
    hidden:{
      x: 100,
      opacity:0,
    },
    visible:custom =>({
      x: 0,
      opacity:1,
      transition:{delay: custom * 0.4},
    }),
  };
  return (
    <div className={styles.policy__details}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once:true}}  
        className={styles.first__screen}>
        <div className={styles.blok__title__container}>
          <motion.div custom={1} variants={titleAnimation} className={styles.disclaimer}>
            <p>{t ('disclaimer')}</p>
          </motion.div>

          <motion.div custom={1} variants={titleAnimation} className={styles.title}>
            <h1>{t ('title')}</h1>
          </motion.div>

          <motion.div custom={2} variants={titleAnimation} className={styles.subtitle}>
            <p>{isSmallScreen ? t ('subtitleOne'): t ('subtitleTwo')}</p>
          </motion.div>

          <motion.div custom={3} variants={titleAnimation} className={styles.page__btn}>
            <button className={styles.generate__btn}>{t ('button')}</button>
            <div className={styles.learn__more}>
              <a href="*" >{t ('a')}<span className={styles.arrow}></span></a>
            </div> 
          </motion.div>
        </div>

        <motion.div custom={4} variants={titleAnimation} className={styles.advanced__features__title__container}>
          <h2>{isSmallScreen ? t ('titleTwoSmall'): t ('titleTwoBig')}</h2>
        </motion.div>
      </motion.div>

      <main className={styles.page}>
        <div className={styles.page__container}>
          <div className={styles.advanced__features__blok}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{amount: 0.2, once:true }}
              variants={cardsAnimationLeft} custom={1} className={styles.cards__one}>
              <div className={styles.cards__one__img}>
                <img src={MadeforYourBusiness} alt=""/>
              </div>
              <div className={styles.cards__one__text}>
                <h2>{isSmallScreen ? t ('cardsOneTitleSmall'): t ('cardsOneTitleBig')}</h2>
                <p>{isSmallScreen ? t ('cardsOneTextSmall'): t ('cardsOneTextBig')}</p>
              </div>
            </motion.div>
                    
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{amount: 0.2, once:true}} 
              variants={cardsAnimationRidth} custom={1} className={`${styles.cards__one} ${styles.reverse}`}>
              <div className={styles.cards__one__text}>
                <h2>{isSmallScreen ? t ('cardsTwoTitleSmall'): t ('cardsTwoTitleBig')}</h2>
                <p>{isSmallScreen ? t ('cardsTwoTextSmall'): t ('cardsTwoTextBig')}</p>
              </div>
              <div className={styles.cards__two__img}>
                <img src={Customizable} alt=""/>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{amount: 0.2, once:true}}
              variants={cardsAnimationLeft} custom={1} className={styles.cards__one}>
              <div className={styles.cards__three__img}>
                <img src={FreeWebHosting} alt=""/>
              </div>
              <div className={styles.cards__one__text}>
                <h2>{isSmallScreen ? t ('cardsThreeTitleSmall'): t ('cardsThreeTitleBig')}</h2>
                <p>{isSmallScreen ? t ('cardsThreeTextSmall'): t ('cardsThreeTextBig')}</p>
              </div>
            </motion.div>
          </div>

          <div className={styles.online__terms}>
            <h2>{isSmallScreen ? t ('titleThreeSmall'): t ('titleThreeBig')}</h2>
            <div className={styles.online__terms__generator}>
              <div className={styles.agreements}>
                <h3>{isSmallScreen ? t ('titleListOneSmall'): t ('titleListOneBig')}</h3>
                <p>{isSmallScreen ? t ('subtitleListOneSmall'): t ('subtitleListOneBig')}</p>
                <ul className={styles.list}>
                  <li className={styles.list__item}>{t ('itemOneOne')}</li>
                  <li className={styles.list__item}>{t ('itemOneTwo')}</li>
                  <li className={styles.list__item}>{t ('itemOneThree')}</li>
                  <li className={styles.list__item}>{t ('itemOneFour')}</li>
                  <li className={styles.list__item}>{t ('itemOneFive')}</li>
                  <li className={styles.list__item}>{t ('itemOneSix')}</li>
                </ul>
                <p>{t ('textListOne')}</p>
              </div>

              <div className={styles.business__safeguard}>
                <h3>{isSmallScreen ? t ('titleListTwoSmall'): t ('titleListTwoBig')}</h3>
                <p>{isSmallScreen ? t ('subtitleListTwoSmall'): t ('subtitleListTwoBig')}</p>
                <ul className={styles.list}>
                  <li className={styles.list__item}>{t ('itemTwoOne')}</li>
                  <li className={styles.list__item}>{t ('itemTwoTwo')}</li>
                  <li className={styles.list__item}>{t ('itemTwoThree')}</li>
                  <li className={styles.list__item}>{t ('itemTwoFour')}</li>
                  <li className={styles.list__item}>{t ('itemTwoFive')}</li>
                  <li className={styles.list__item}>{t ('itemTwoSix')}</li>
                </ul>
                <p>{isSmallScreen ? t ('textListTwoSmall'): t ('textListTwoBig')}</p>
              </div>
            </div>

            <button className={styles.online__terms__btn}>{t ('buttonTwo')}</button>

          </div>

          <div className={styles.explore__iTerms__blok}>
            <div className={styles.disclaimer__explore__iTerms}>
              <p>{isSmallScreen ? t ('disclaimerTwoSmall'): t ('disclaimerTwoBig')}</p>
              <h2>{isSmallScreen ? t ('titleFourSmall'): t ('titleFourBig')}</h2>
            </div>
            <div className={styles.explore__iTerms__text}>
              <p>{isSmallScreen ? t ('subheadingSmall'): t ('subheadingBig')}</p>
            </div>
          </div>
          <Slider/>
        </div>
      </main>

      <TrustedProvisions/>
      <Questions/>
      <Footer/>
    </div>
  );
};

export default PolicyDetails;