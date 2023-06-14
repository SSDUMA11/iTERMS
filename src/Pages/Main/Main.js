import React from 'react'
import './main.scss';
import '../../fonts/fonts.scss';

///IMG
// import plane from "./pictures/Paper_plane.svg"
// import Hero from "./pictures/Hero_image.svg"
// import Line from "./pictures/line.svg"
// import Cookie from "./pictures/Cookie.svg"
// import Document from "./pictures/Document.svg"
// import Lock from "./pictures/Lock.svg"
import scrin from "./pictures/scrin.svg"
import Rectangle from "./pictures/Rectangle.svg"


///components
import Slider from '../../components/slider/Slider';
import TrustedProvisions from '../../components/TrustedProvisions/TrustedProvisions';
import SliderCustomers from '../../components/sliderCustomers/SliderCustomers';
import StarRating from '../../components/StarRating/StarRating';
import WhatNew from '../../components/WhatNew/WhatNew'
import Questions from '../../components/questions/Questions'
import Footer from '../../components/footer/Footer'
import MarkerMain from '../../components/MarkerMain/MarkerMain'


const Main = () => {


  return (
    
    <div className='page__main'>
      <div className='first__screen__main'>
        <div className='first__screen__img'>
          {/* <img src={Line} alt='' className='line'/>
          <img src={Hero} alt='' className='hero__img'/>
          <img src={Lock} alt='' className='lock'/>
          <div className='plane'>
            <img src={plane} alt='' className='plane' />
          </div>
          <img src={Cookie} alt='' className='cookie'/>
          <img src={Document} alt='' className='document'/> */}
        
          <div className='block__title'>
            <p className='disclaimer'>Powered By AI</p>
            <h1>The smartest, fastest way to Legal Aggrements</h1>
            <div className='title__btn'>
              <button className="started__btn">Get started for free</button>
              <a href='*'> Learn more <span className='arrow'></span></a>
            </div>
          </div>
        </div>
      </div>

      <div className='second__screen__main'>
        <div className='background__text'>AI</div>
        <div className='possibilities'>
          <div className='scrin__img'>
            <img src={scrin} alt=''/>
          </div>

          <div className='second__block'>
            <div className='second__title'> 
              <p className='disclaimer'>Discover Possibilities</p>
              <h2>Streamline Your Purpose with AI</h2>
              <p className='subtitle'>Streamline cost-effective solutions for your business. Generate legally compliant documents seamlessly with customizable agreements and policies for your website or mobile app anytime, anywhere with iTerms.</p>
            </div>
            <div className='second__list'>
              <ul className='list'>
                <li className='list__item'>Unlimited downloads for 9.95 a one-time fee </li>
                <li className='list__item'>All legal agreements confirmed by a practicing lawyer</li>
                <li className='list__item'>EU/US and main privacy laws covered</li>
                <li className='list__item'>Automatic legal updates powered by AI</li>
                <li className='list__item'>Industry-leading competitive pricing </li>
                <li className='list__item'>Securely host your policies on our platform</li>
                <li className='list__item'>Easy embed policy on your domain</li>
                <li className='list__item'>Suitable for most Web/Mobile apps</li>
              </ul>
            </div>

            <div className="page__btn">
              <button className="generate__btn">Generate</button>
              <div className="learn__more" >
                <a href="*" >Learn more <span className='arrow'></span></a>
              </div> 
            </div>
          </div>
        </div>
      </div>

      <div className='third__screen__main __container'>
        <div className='third__title'>
          <p className='disclaimer'>Easy & Cost-Effective</p>
          <h2>How it works?</h2>
          <p className='subtitle'>Numerous legal agreements accessible at the touch of your fingerprints for your website or mobile app.</p>
        </div>

        <div className='video__main'>
          {/* video */}
          <div className='video'></div>
        
          <div className='line__video'>
            <div className='numer__video'>

                <div className='numer__block'>
                  <div className='numer'>1 </div>
                  <p>Choose Your Desired Policy </p>
                </div>

                <div className='numer__block'>
                  <div className='numer'>2</div>
                  <p>Collaborate withour AI Assistant</p>
                </div> 

                <div className='numer__block'>
                  <div className='numer'>3</div>
                  <p>Collect Your Legal Document</p>
                </div>
            </div>
          </div>
        </div>
      </div>   

      <div className='fourth__screen__main'>
        <div className='__container'>
          <div className='background__text top'>Solutions</div>
            <div className='fourth__title'>
              <div className='title__block'>
              <p className='disclaimer'>Intuitively Made For Your Business</p>
              <h2>Explore iTerms Solutions </h2>
            </div>
            <div className='subtitle__text'>
              <p className='subtitle'>Regardless of your requirements, iTerms has a solution ready for you to utilize.</p>
            </div>
          </div>
        </div>
       <Slider/>
      </div>

      <MarkerMain/>

      <TrustedProvisions/>
      <div className='fourth__screen__main'>
        <div className='__container'>
          <div className='background__text top left'>
            <img src={Rectangle} alt=''/>
            <img src={Rectangle} alt=''/>
          </div>
            <div className='fourth__title'>
              <div className='title__block'>
              <p className='disclaimer'>Your Protection Is Our Success</p>
              <h2>Our Customers Are Saying </h2>
            </div>
            <div className='subtitle__text'>
              <p className='subtitle'>Ensured Compliance, guaranteed customer satisfaction.</p>
            </div>
          </div>
        </div>

        <SliderCustomers/>
        <StarRating/>
      </div>

      <div className='fifth__screen__main'>
        <div className='__container'>
          <div className='fourth__title'>
            <div className='title__block'>
              <p className='disclaimer'>Keep Up With the Latest</p>
              <h2>Discover What's New</h2>
            </div>
            <div className='subtitle__text'>
              <p className='subtitle'>Learn from the experts at iTerms to ensure you stay on top of industry legalities and changing legal landscapes at all times.</p>
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