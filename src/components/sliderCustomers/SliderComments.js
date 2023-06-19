import { useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import './sliderComments.scss';
import '../../fonts/fonts.scss';
import {slides} from './Customers'
///IMG
import Rectangle from "./pictures/Rectangle.svg"
///components
import StarRating from '../StarRating/StarRating';

const SliderComments  = () => {
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

  return (
    <div className='slider__comments__main'>
      <div className='title__container'>
        <div className='background__text__slider'>
          <img src={Rectangle} alt=''/>
          <img src={Rectangle} alt=''/>
        </div>
        <div className='title'>
          <div className='title__block'>
            <p className='disclaimer'>{isSmallScreen ? 'Easy how to eat cookies' : 'Your Protection Is Our Success'}</p>
            <h2>{isSmallScreen ? 'What Customers Are Saying' : 'Our Customers Are Saying'}</h2>
          </div>
          <div className='subtitle__block'>
            <p className='subtitle'>{isSmallScreen ? 'Create a free terms and conditions agreement (aka terms of use or terms of service) for your website or app.' : 'Ensured Compliance, guaranteed customer satisfaction.'}</p>
          </div>
        </div>
      </div>
      <Swiper className="swiper__two"
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

        {slides.map(user =>(
            <SwiperSlide key={user.id} className="swiper-slide__two">
                <div className="block__name">
                    <div className="cards__img">
                        <img src={user.img} alt='img'/>
                    </div>
                    <div className="cards__name">
                        <h3>{user.name}</h3>
                        <p>{user.status}</p>
                    </div>
                </div>
                <div className='block__text'>
                  <p>{user.text} </p>
                  <div className='rating'>{user.rating}<img src={user.star} alt='img'/></div>
                </div>
            </SwiperSlide>
        ))}
         
        <div className='showcaseSlider-nav' >
            <button  className='swiper-button-prev showcaseSlider-prev'></button>
            <button className='swiper-button-next showcaseSlider-next'></button>
        </div>
      </Swiper>

      <StarRating/>
    </div>
  )
}

export default SliderComments
