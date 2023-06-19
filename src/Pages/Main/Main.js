import { useState, useEffect} from 'react';
import './main.scss';
import '../../fonts/fonts.scss';

///components
import TitleMain from '../../components/TitleMain/TitleMain'
import BlockAI from '../../components/BlockAI/BlockAI';
import VideoMain from '../../components/VideoMain/VideoMain'
import Slider from '../../components/slider/Slider';
import TrustedProvisions from '../../components/TrustedProvisions/TrustedProvisions';
import SliderCustomers from '../../components/sliderCustomers/SliderComments';

import WhatNew from '../../components/WhatNew/WhatNew'
import Questions from '../../components/questions/Questions'
import Footer from '../../components/footer/Footer'
import MarkerMain from '../../components/MarkerMain/MarkerMain'


const Main = () => {
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
    
    <div className='page__main'>
      <TitleMain/>


      <BlockAI/>

      <VideoMain/>
      
      <div className='fourth__screen__main'>
        <div className='__container'>
          <div className='background__text top'>Solutions</div>
            <div className='fourth__title'>
              <div className='title__block'>
                <p className='disclaimer'>{isSmallScreen ? 'for your business' :  'Intuitively Made For Your Business'}</p>
                <h2>{isSmallScreen ? 'Explore of our Solutions':'Explore iTerms Solutions'}</h2>
              </div>
              <div className='subtitle__text'>
                <p className='subtitle'>{isSmallScreen ? 'Create a free terms and conditions agreement (aka terms of use or terms of service) for your website or app.' : 'Regardless of your requirements, iTerms has a solution ready for you to utilize.'}</p>
              </div>
            </div>
        </div>
       <Slider/>
      </div>

      <MarkerMain/>

      <TrustedProvisions/>

      <SliderCustomers/>

      <div className='fifth__screen__main'>
        <div className='__container'>
          <div className='fourth__title'>
            <div className='title__block'>
              <p className='disclaimer'>{isSmallScreen ? 'Latest blog articles' : 'Keep Up With the Latest'}</p>
              <h2>{isSmallScreen ? 'What\'s New?' : 'Discover What\'s New'}</h2>
            </div>
            <div className='subtitle__text'>
              <p className='subtitle'>{isSmallScreen ? 'More than 140,000 businesses use iTerms. Join our community of amazing companies!' : 'Learn from the experts at iTerms to ensure you stay on top of industry legalities and changing legal landscapes at all times.'}</p>
            </div>
          </div>
        </div>
        <WhatNew/>
      </div>

      <Questions/>
      <Footer/>
    </div>
    
  )
}

export default Main