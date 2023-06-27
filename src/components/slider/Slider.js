import  React,{ useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import styles from  './slider.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
import {slides} from './Slides';
///components
import NavigationSlider from '../NavigationSlider/NavigationSlider';

const Slider = () => {

  const { t } = useTranslation(['slider']);
  const slidesOdj = t('slides',{returnObjects:true} );
  slides.forEach((slide, idx) => {
    slidesOdj[idx].img = slide.img;
  });

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
  const sliderAnimation ={
    hidden:{
      x: 200,
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
    <motion.div  
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once:true}}
      custom={2} 
      variants={sliderAnimation}>
      <Swiper 
        className={styles.swiper}
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
            <div className={styles.block}>
              <div className={styles.cards__img}>
                <img src={user.img} alt="img"/>
              </div>
              <div className={styles.cards__text}>
                <h3>{user.title}</h3>
                {isSmallScreen ? <p>{user.textSmall}</p>: <p>{user.text}</p>}
              </div>
            </div>
            <div className={styles.cards__btn}>
              <button>Generate</button>
              <a href="*" > Learn more <span className={styles.arrow}></span></a>
            </div>
          </SwiperSlide>
        ))}
        <NavigationSlider/>
      </Swiper>
    </motion.div>
  );
};

export default Slider;
