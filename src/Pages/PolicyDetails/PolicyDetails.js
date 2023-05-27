import React from 'react'
import { motion } from "framer-motion"
import './PolicyDetails.scss';
import '../../fonts/fonts.scss';
///IMG
import MadeforYourBusiness from "./pictures/MadeforYourBusiness.svg"
import Customizable from "./pictures/Customizable.svg"
import FreeWebHosting from "./pictures/FreeWebHosting.svg"
///components
import Slider from '../../components/slider/Slider';
import TrustedProvisions from '../../components/TrustedProvisions/TrustedProvisions';
import Questions from '../../components/questions/Questions';
import BlockFooter from '../../components/BlockFooter/BlockFooter'
import Footer from '../../components/footer/Footer';


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
const cardsAnimationLeft ={
    hidden:{
       x: -100,
       opacity:0
    },
    visible:custom =>({
        x: 0,
        opacity:1,
        transition:{delay: custom * 1}
    })
}
const cardsAnimationRidth ={
    hidden:{
       x: 100,
       opacity:0
    },
    visible:custom =>({
        x: 0,
        opacity:1,
        transition:{delay: custom * 1}
    })
}
const PolicyDetails = () => {
  return (
    <div className='policyDetails'>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once:true}}  
        className="first-screen">
            <div className="page__blok__terms__conditions" __container>
                <motion.div custom={1} variants={titleAnimation} className="disclaimer">
                    <p>flexible pricing</p>
                </motion.div>

                <motion.div custom={1} variants={titleAnimation} className="terms__conditions__title">
                    <p>Terms & Conditions</p>
                </motion.div>

                <motion.div custom={2} variants={titleAnimation} className="terms__conditions__text">
                    <p>Seamlessly generate and administer professional Terms & Conditions that are compliant with international legislation.</p>
                </motion.div>

                <motion.div custom={3} variants={titleAnimation} className="page__btn">
                    <button className="generate__btn">Generate</button>
                    <div className="learn__more" >
                        <a href="*" > Learn more <span className='arrow'></span></a>
                    </div> 
            </motion.div>
        </div>

        <motion.div custom={4} variants={titleAnimation} className="advanced__features__title" __container>
            <p>Explore Advanced Features</p>
        </motion.div>
    </motion.div>

    <main
     className="page">
        <div className="page__container">
            <div className="advanced__features__blok">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2, once:true }}
                 variants={cardsAnimationLeft} custom={1} className="cards__one">
                    <div className="cards__one__img">
                        <img src={MadeforYourBusiness} alt=""/>
                    </div>
                    <div className="cards__one__text" >
                        <h2>Tailor-Made For Your Business</h2>
                        <p>Safeguard the interests of your content. Generate precision Terms & Conditions policies designed especially for your website, app, blog, SaaS, or eCommerce site.</p>
                    </div>
                </motion.div>
                    
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2, once:true}} 
                variants={cardsAnimationRidth} custom={1} className="cards__one">
                    <div className="cards__one__text">
                        <h2>Fully Customizable</h2>
                        <p>Don't settle for generic Terms & Conditions. With iTerms, fully customize your requirements' appearance to compliment your website or mobile app design aesthetics to enhance your credibility.</p>
                    </div>
                    <div className="cards__two__img">
                        <img src={Customizable} alt=""/>
                    </div>
                </motion.div>

                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2, once:true}}
                 variants={cardsAnimationLeft} custom={1} className="cards__one">
                    <div className="cards__three__img">
                        <img src={FreeWebHosting} alt=""/>
                    </div>
                    <div className="cards__one__text"t>
                        <h2>Web Hosting</h2>
                        <p>iTerms is dedicated to providing you with seamless business solutions, which is why we're hosting your Legal Agreement on our servers.</p>
                    </div>
                </motion.div>
            </div>

            <div className="online__terms">
                <h2>Online Terms & Conditions Generator</h2> 
                <h2>You Can Trust</h2>
                <div className="online__terms__generator">
                    <div className="agreements">
                        <h3>Numerous Terms & Conditions Agreements</h3>
                        <p>Regardless of the industry you operate in, iTerms has Terms & Conditions solutions made just for you:</p>
                        <ul className="list">
                            <li className="list__item">Blog</li>
                            <li className="list__item">Website</li>
                            <li className="list__item">Mobile App</li>
                            <li className="list__item">Ecommerce site</li>
                            <li className="list__item">Online shop/store</li>
                            <li className="list__item">SaaS</li>
                        </ul>
                        <p>Trusted by thousands of companies worldwide, Termly`s intuitive software generates terms and conditions for any business in minutes. Don`t put your business at risk when protection is free.</p>
                    </div>

                    <div className="business__safeguard">
                        <h3>Safeguard Your Business Interests With Terms & Conditions</h3>
                        <p>Operate your business without having to question whether your interests are protected. With iTerms, limit your liability and protect your livelihood against potential legal action.</p>
                        <ul className="list">
                            <li className="list__item">Terms of use</li>
                            <li className="list__item">Intellectual property rights</li>
                            <li className="list__item">Digital Millennium Copyright Act notice and policy</li>
                            <li className="list__item">Prohibited activities</li>
                            <li className="list__item">Termination clause</li>
                            <li className="list__item">Governing law</li>
                        </ul>
                        <p>Protect your content and try the iTerms Terms & Conditions generator today! </p>
                    </div>
                </div>

                <button className="online__terms__btn">Generate</button>

            </div>

            <div className="explore__iTerms__blok">
                <div class="disclaimer__explore__iTerms">
                    <p>Intuitively Made For Your Business</p>
                    <h2>Explore iTerms Solutions </h2>
                </div>
                <div className="explore__iTerms__text">
                    <p>Regardless of your requirements, iTerms has a solution ready for you to utilize.</p>
                </div>
            </div>
            <Slider/>
        </div>
    </main>

    <TrustedProvisions/>
    <Questions/>
    <BlockFooter/>

    <Footer/>
    </div>
  )
}

export default PolicyDetails