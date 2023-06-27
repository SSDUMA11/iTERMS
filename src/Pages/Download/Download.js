import React from 'react';
import './download.scss';
import '../../fonts/fonts.scss';
import download from './pictures/Download.svg';

const Download = () => {
  return (
    <div className="wrapper">
      <div className="first-screen"></div>
      <div className="wrapper__container">
        <div className="cards__welcome">
          <div className="blok__welcome">
            <div className="welcome__img">
              <img src={download} alt="Download"/>
            </div>
    
            <div className="welcome__title">
              <p>Your Download is Rady?</p>
            </div>
    
            <div className="welcome__text">
              <p>Use the link below to download Terms Condition. This link may be used up to 3 times before it expires. </p>
            </div>
                
            <button className="welcome__btn">Download</button>
          </div>
    
          <div className="more__help">
            <p>Need more help?</p> 
            <a href="">We`re here to help you out</a>
          </div>
    
          <div className="unsubscribe">
            <p>If these emails get annoying, please feel free to <a href="#">unsubscribe</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;