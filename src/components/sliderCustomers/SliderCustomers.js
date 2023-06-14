import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import './sliderCustomers.scss';
import '../../fonts/fonts.scss';
import {slides} from './Customers'


const SliderCustomers  = () => {
    
  return (
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
 
  )
}

export default SliderCustomers
