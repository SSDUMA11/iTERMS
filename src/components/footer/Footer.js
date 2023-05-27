import React from 'react';
import './footer.scss';
import '../../fonts/fonts.scss';

const Footer = () => {
  return (
        <footer className="footer" >
            <div className="footer__container">
                <div className="footer__title">
                    <div className="footer__text">
                        <div className="footer__disclaimer">Get Started Within Minutes</div>
                        <p className="disclaimer__media">Latest blog articles</p>

                        <h2><span>Are You </span> Ready to protect your business?</h2>

                        <p className="media__none">Sign up for our account packages and start generating legal agreements suited to your business needs.</p>

                        <p className="text__media">More than 140,000 businesses use iTerms. Join our community.</p>
                    </div>

                    <div className="footer__btn">
                        <button className="started__btn">Get started for free</button>
                        <button className="started__btn__media">Sign me Up!</button>
                        <a href='*'> Learn more <span className='arrow'></span></a>
                    </div>
                </div>

                <div className="footer__info">
                    <div className="info__block">
                        <div className="box">
                            <h3 className="footer__iTerms">iTerms</h3>
                            <p className="media__none">More than 140,000 businesses use iTerms. Join our community.</p>
                            <a className="media__info">Terms & Conditions</a>
                            <a className="media__info">Privacy Policy</a>
                            <a className="media__info">Disclaimer</a>

                            <div className="version">
                                <a className="media__info">English version</a>
                            </div> 
                        </div>
                       
                        <div className="box">
                            <h3>Company</h3>
                            <a href>How It Works</a>
                            <a href>Reviews</a>
                            <a href>Contact us</a>
                            <a href>Blog</a>
                        </div>

                        <div className="box">
                            <h3>Products</h3>
                            <a href='*'>Solutions</a>
                            <a href='*'>Trust & Safety</a>
                            <a href='*'>Payment</a>
                            <a href='*'>Help</a>
                        </div>

                        <div className="box">
                            <h3>Support</h3>
                            <a href='*'>Help</a>
                            <a href='*'>Pricing</a>
                            <a href='*'>Payment</a>
                            <a href='*'>Help</a> 
                        </div>
                    </div>
                </div>

                <address className="footer__address">
                    <p>© 2021 Terms Inc. All rights reserved</p>
                    <a className="media__none">Terms & Conditions</a>
                    <a className="media__none">Privacy Policy</a>
                    <a className="media__none">Disclaimer</a>
                    <a className="media__none">English version</a> 
                </address>
            </div>
        </footer>
    )
}

export default Footer