import { useState, useEffect } from 'react';
import styles from './footer.module.scss';
import '../../fonts/fonts.scss';

const Footer = () => {
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
        <footer className={styles.footer} >
            <div className='footer__container'>
                <div className={styles.footer__title}>
                    <div className={styles.footer__text}>
                        <div className={styles.disclaimer}>{isSmallScreen ? 'Latest blog articles' : 'Get Started Within Minutes'}</div>

                        <h2>{isSmallScreen ? 'Ready to protect your business?' :'Are You Ready to protect your business?'}</h2>

                        <p className={styles.subtitle}>{isSmallScreen ? 'More than 140,000 businesses use iTerms. Join our community.' : 'Sign up for our account packages and start generating legal agreements suited to your business needs.'}</p>
                    </div>

                    <div className={styles.footer__btn}>
                        <button className={styles.button}>{isSmallScreen ? 'Sign me Up!' : 'Get started for free'}</button>
                        <a href='*'> Learn more <span className={styles.arrow}></span></a>
                    </div>
                </div>

                <div className={styles.footer__info}>
                    <div className={styles.info__block}>
                        <div className={styles.box}>
                            <h3 className={styles.footer__iTerms}>iTerms</h3>
                            {isSmallScreen ? <a href='/generate'  className={styles.iTerms__info}>Terms & Conditions</a> : ''}
                            {isSmallScreen ? <a href='*' className={styles.iTerms__info}>Privacy Policy</a> : ''}
                            {isSmallScreen ? <a href='*' className={styles.iTerms__info}>Disclaimer</a> : ''}
                            {isSmallScreen ? <div className={styles.version}>
                                <a href='*' className={styles.iTerms__info}>English version</a>
                            </div> : ''}
                            {isSmallScreen ? '' : <p className={styles.iTerms__text}>More than 140,000 businesses use iTerms. Join our community.</p> }
                        </div>
                       
                        <div className={styles.box}>
                            <h3>Company</h3>
                            <a href='*' >How It Works</a>
                            <a href='*'>Reviews</a>
                            <a href='*'>Contact us</a>
                            <a href='/blog'>Blog</a>
                        </div>

                        <div className={styles.box}>
                            <h3>Products</h3>
                            <a href='*'>Solutions</a>
                            <a href='*'>Trust & Safety</a>
                            <a href='*'>Payment</a>
                            <a href='*'>Help</a>
                        </div>

                        <div className={styles.box}>
                            <h3>Support</h3>
                            <a href='*'>Help</a>
                            <a href='*'>Pricing</a>
                            <a href='*'>Payment</a>
                            <a href='*'>Help</a> 
                        </div>
                    </div>
                </div>

                <address className={styles.footer__address}>
                    <p>© 2021 Terms Inc. All rights reserved</p>
                    {isSmallScreen ? '' : <a href='/generate'  className={styles.iTerms__info}>Terms & Conditions</a>}
                    {isSmallScreen ? '' :<a href='*' className={styles.iTerms__info}>Privacy Policy</a>}
                    {isSmallScreen ? '' :<a href='*' className={styles.iTerms__info}>Disclaimer</a>}
                    {isSmallScreen ? '' :<a href='*' className={styles.iTerms__info}>English version</a>}
                </address>
            </div>
        </footer>
    )
}

export default Footer