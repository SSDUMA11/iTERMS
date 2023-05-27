import React from 'react'
import './emailTemplate.scss';
import '../../fonts/fonts.scss';
import Welcome from "./pictures/Welcome.svg"


const EmailTemplate = () => {
  return (
    <div className="wrapper">
    <div className="first-screen"></div>
    <div className="wrapper__container">
        <div className="cards__welcome">
            <div className="blok__welcome">
                <div className="welcome__img">
                    <img src={Welcome} alt="Welcome"/>
                </div>

                <div className="welcome__title">
                    <p>Welcome!</p>
                </div>

                <div className="welcome__text">
                    <p>We're excited to have you get started. First, you need to confirm your account. Just press the button below.</p>
                </div>
            
                <button className="welcome__btn">Confirm Account</button>

                <div className="welcome__text">
                    <p>If that doesn't work, copy and paste the following link in your browser:</p>
                </div>

                <div className="welcome__link">
                    <a href="https://bit.li.utlddssdstueincx">https://bit.li.utlddssdstueincx</a>
                </div>

                <div className="welcome__text">
                    <p>If you have any questions, just reply to this email—we're always happy to help out.</p>
                </div>

                <div className="welcome__text">
                    <p>Cheers,</p>
                    <p>iTerms Team</p>
                </div>
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

export default EmailTemplate