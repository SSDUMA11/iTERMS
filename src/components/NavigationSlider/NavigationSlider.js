import React from 'react';
import 'swiper/scss/navigation';
import './navigationSlider.scss';
import '../../fonts/fonts.scss';

const NavigationSlider = () => {
  return (
    <div className="showcaseSlider_nav">
      <button  className="swiper-button-prev showcaseSlider-prev"></button>
      <button className="swiper-button-next showcaseSlider-next"></button>
    </div>
  );
};

export default NavigationSlider;
