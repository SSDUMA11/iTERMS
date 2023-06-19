import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import styles from  './blockAI.module.scss';
import '../../fonts/fonts.scss';
///IMG
import scrin from "./pictures/scrin.svg"
import scrin_two from "./pictures/scrin_two.svg"


const BlockAI = () => {
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

    ///Animation
    const imgAnimation ={
        hidden:{
            x: -100,
            opacity:0
        },
        visible:custom =>({
            x: 0,
            opacity:1,
            transition:{
                delay: custom * 0.4,
                duration:2,}
        })
    }
    const textAnimation ={
        hidden:{
            x: 3100,
            opacity:0
        },
        visible:custom =>({
            x: 0,
            opacity:1,
            transition:{
                delay: custom * 0.4,
                duration:1,}
        })
    }

  return (
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once:true}}
        className={styles.block__main}>
            {isSmallScreen ? '' : <div className={styles.background__text}>AI</div>}
            <div className={styles.possibilities}>
                <motion.div custom={1} variants={imgAnimation} className={styles.scrin__img}>
                   {isSmallScreen ? <img src={scrin_two} alt=''/> : <img src={scrin} alt=''/> }
                    {isSmallScreen ? <div className={styles.background__text}>AI</div> : ''}
                </motion.div>

                <motion.div custom={2} variants={textAnimation} className={styles.block__title}>
                    <div className={styles.title}> 
                        <p className={styles.disclaimer}>{isSmallScreen ? 'take a look': 'Discover Possibilities'}</p>
                        <h2>{isSmallScreen ? 'AI + ITerms to do better': 'Streamline Your Purpose with AI'}</h2>
                        <p className={styles.subtitle}>{isSmallScreen ? 'Create a seamless payment experience for your customers while using leading technology that adapts to any business, industry, platform, or shopper journey. You\'ll be up and running quickly, able to add payment methods easily and increase your conversion rates. Enjoy flexible features to fit your business with a single integration:': 'Streamline cost-effective solutions for your business. Generate legally compliant documents seamlessly with customizable agreements and policies for your website or mobile app anytime, anywhere with iTerms.'}</p>
                    </div>

                    <div className={styles.block__list}>
                        {isSmallScreen ?
                            <ul className={styles.list}>
                                <li className={styles.list__item}>Confirmed by a lawyer </li>
                                <li className={styles.list__item}>Legal updates with AI</li>
                                <li className={styles.list__item}>The cheapest among competitors</li>
                                <li className={styles.list__item}>Clear and understandable</li>
                                <li className={styles.list__item}>We host it for you</li>
                            </ul>
                            :
                            <ul className={styles.list}>
                                <li className={styles.list__item}>Unlimited downloads for 9.95 a one-time fee </li>
                                <li className={styles.list__item}>All legal agreements confirmed by a practicing lawyer</li>
                                <li className={styles.list__item}>EU/US and main privacy laws covered</li>
                                <li className={styles.list__item}>Automatic legal updates powered by AI</li>
                                <li className={styles.list__item}>Industry-leading competitive pricing </li>
                                <li className={styles.list__item}>Securely host your policies on our platform</li>
                                <li className={styles.list__item}>Easy embed policy on your domain</li>
                                <li className={styles.list__item}>Suitable for most Web/Mobile apps</li>
                            </ul>
                        }
                    </div>

                    <div className={styles.block__btn}>
                        <button className={styles.generate__btn}>Generate</button>
                        <div className={styles.learn__more}>
                            <a href="*" >Learn more <span className={styles.arrow}></span></a>
                        </div> 
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default BlockAI