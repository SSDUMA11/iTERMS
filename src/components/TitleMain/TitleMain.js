import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import styles from './titleMain.module.scss';
import '../../fonts/fonts.scss';
///IMG
import plane from "./pictures/Paper_plane.svg"
import Hero from "./pictures/Hero_image.svg"
import Line from "./pictures/line.svg"
import Cookie from "./pictures/Cookie.svg"
import Document from "./pictures/Document.svg"
import Lock from "./pictures/Lock.svg"
import MarkerTitle from "./pictures/MarkerTitle.svg"

const TitleMain = () => {
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
    const titleAnimation ={
        hidden:{
            x: -100,
            opacity:0
        },
        visible:custom =>({
            x: 0,
            opacity:1,
            transition:{delay: custom * 0.4}
        })
    }
    const animationLock ={
        hidden:{
            x: 0,
            opacity:1,
        },
        visible:({
            x:5,
            y:5,
            opacity:1,
            transition:{
                duration:1, 
                repeat: Infinity, 
                repeatType:"reverse"
            }
        })
    }
    const animationCookie ={
        hidden:{
            x: 0,
            opacity:1,
        },
        visible:({
            x:4,
            y:-5,
            opacity:1,
            transition:{
                duration:1, 
                repeat: Infinity, 
                repeatType:"reverse"
            }
        })
    }
    const animationDocument ={
        hidden:{
            x: 0,
            opacity:1,
        },
        visible:({
            x:-4,
            y:4,
            opacity:1,
            transition:{
                duration:1, 
                repeat: Infinity, 
                repeatType:"reverse"
            }
        })
    }
    const animationPlane ={
        hidden:{
            x: -20,
            opacity:1,
        },
        visible:({
            x:15,
            y:5,
            opacity:1,
            transition:{
                duration:2, 
                repeat: Infinity, 
                repeatType:"reverse"
            }
        })
    }
    const animationHero ={
        hidden:{
            x: 0,
            opacity:1,
        },
        visible:({
            x:5,
            y:5,
            opacity:1,
            transition:{
                duration:2, 
                repeat: Infinity, 
                repeatType:"reverse"
            }
        })
    }

    return (
        <motion.div 
        initial="hidden"
        whileInView="visible"  
        className={styles.first__screen}>
            <div className={styles.first__screen__img}>
                {isSmallScreen ? '' : <motion.img custom={1} variants={animationHero} src={Hero} alt='' className={styles.hero__img}/>}
                <div className={styles.line__plane}>
                    <motion.img custom={1} variants={animationLock} src={Lock} alt='' className={styles.lock}/>
                    
                    {isSmallScreen ? <motion.img custom={1} variants={animationHero} src={Hero} alt='' className={styles.hero__img}/> : ''}

                    <motion.img custom={1} variants={animationCookie}          
                    src={Cookie} alt='' className={styles.cookie}/>

                    <motion.img custom={1} variants={animationDocument} src={Document} alt='' className={styles.document}/>
                    <img src={Line} alt='' className={styles.line}/>

                    <motion.img custom={1} variants={animationPlane} src={plane} alt='' className={styles.plane}/>

                </div>
            </div>
            <div className={styles.block__title__containere}>
                <motion.div         
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2, once:true}}   
                className={styles.block__title}>
                    <motion.p custom={1} variants={titleAnimation} className={styles.disclaimer}>{isSmallScreen ? 'AI-Powered' : 'Powered By AI'}</motion.p>
                    <motion.h1 custom={1} variants={titleAnimation}>The smartest, fastest way to Legal Aggrements</motion.h1>
                    {isSmallScreen ? <img src={MarkerTitle} alt='' className={styles.marker__title}/> 
                    : <motion.p custom={2} variants={titleAnimation} className={styles.subtitle}>Generate your <b>Privacy Policy, Terms of Use or Cookie Policy</b> for <span>free</span></motion.p>}
                    <motion.div custom={3} variants={titleAnimation} className={styles.button}>
                        <button className={styles.started__btn}>{isSmallScreen ? 'Generate' : 'Generate for free'}</button>
                        <a href='*'> Learn more <span className={styles.arrow}></span></a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}
  
export default TitleMain