import React from 'react'
import './ResetYourPassword.scss';
import '../../fonts/fonts.scss';
import resetPassword from "./pictures/Reset_Password.svg"


const ResetYourPassword = () => {
  return (
    <div className='wrapper'>
    <div className="first-screen"></div>
        <div className="wrapper__container">
            <div className="cards__welcome">
                <div className="blok__welcome">
                    <div className="welcome__img">
                        <img src={resetPassword} alt=""/>
                    </div>
    
                    <div className="welcome__title">
                        <p>Reset Your Password</p>
                    </div>
    
                    <div className="welcome__text">
                        <p>Need to reset your password? No problem! Just click the button below and `ll be on your way. If you did not make this request, please ignore this email.</p>
                    </div>
                
                    <button className="welcome__btn">Reset your password</button>
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
  )
}

export default ResetYourPassword