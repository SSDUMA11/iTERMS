import  React,{ useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import styles from './videoMain.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
import video from './video/pexels-darlene.mp4';

const VideoMain = () => {
  const { t } = useTranslation(['videoMain']);
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
  const videoAnimation ={
    hidden:{
      x: -1000,
      opacity:1,
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.1, once:true}} 
      className={styles.main__video__containere}>
      <div className={styles.block__title}>
        <p className={styles.disclaimer}>{isSmallScreen ? t ('disclaimerOne'): t ('disclaimerTwo')}</p>
        <h2>{t ('title')}</h2>
        <p className={styles.subtitle}>{isSmallScreen ? t ('subtitleOne'): t ('subtitleTwo')}</p>
      </div>

      <div className={styles.video__block}>
        <motion.video custom={1} variants={videoAnimation} className={styles.video} autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </motion.video>
        
        <div className={styles.line__video}>
          <div className={styles.numer__video}>
            {isSmallScreen ? '': <div className={styles.line__video__two}></div>}
            <div className={`${styles.numer__block} ${styles.block__one}`}>
              <div className={styles.numer}>1</div>
              <p>{isSmallScreen ? t ('itemSmallOne'): t ('itemBigOne')}</p>
            </div>

            <div className={`${styles.numer__block} ${styles.block__two}`}>
              <div className={styles.numer}>2</div>
              <p>{isSmallScreen ? t ('itemSmallTwo'): t ('itemBigTwo')}</p>
            </div> 

            <div className={`${styles.numer__block} ${styles.block__three}`}>
              <div className={styles.numer}>3</div>
              <p>{isSmallScreen ? t ('itemSmallThree'): t ('itemBigThree')}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default VideoMain;