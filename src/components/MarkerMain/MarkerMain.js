import { useState, useEffect } from 'react';
import './MarkerMain.scss';
import '../../fonts/fonts.scss';
///IMG
import Compatible from "./pictures/Compatible.svg"
import Embed from "./pictures/Embed.svg"
import GDPR from "./pictures/GDPR.svg"
import HTML from "./pictures/HTML.svg"
import Hosted from "./pictures/Hosted.svg"
import Payment from "./pictures/Payment.svg"
import Unlimited from "./pictures/Unlimited.svg"
import Updated from "./pictures/Updated.svg"
import Cards_one from "./pictures/Cards_one.svg"
import Cards_two from "./pictures/Cards_two.svg"
import Cards_three from "./pictures/Cards_three.svg"
import Cards_four from "./pictures/Cards_four.svg"
import Cards_five from "./pictures/Cards_five.svg"
import Marker_line from "./pictures/Marker_line.svg"
import Marker from "./pictures/marker.svg"
///components
import SwitchMonth from '../Switch/SwitchMonth'



const MarkerMain = () => {

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
    <div>
        <div className='block__marker'>
            <div className='img__group__one'>
                {isSmallScreen ? '': <img src={Cards_two} alt='' className='cards_two'/>}
                {isSmallScreen ? '': <img src={Cards_three} alt='' className='cards_three'/>}
                {isSmallScreen ? <img src={Cards_five} alt='' className='cards_five'/>: ''}
            </div>

            <div className='text__group'>
                <div className='marker__title'>
                    <div className='title__block'>
                        <p className='disclaimer'>{isSmallScreen ? 'make sure':'Validate Our Credibility'}</p>
                        <h2>{isSmallScreen ? 'Compare with competitors':'Compare Industry Competitors'}</h2>
                    </div>
                    <p className='subtitle align'>{isSmallScreen ? 'Create a free terms and conditions agreement (aka terms of use or terms of service) for your website or app' :'iTerms offers industry-leading solutions for businesses for a fraction of the price, with no hidden fees.'}</p>
                </div>

                {isSmallScreen ? <SwitchMonth/> : ''}

                <div className='marker__price'>
                    <img src={Marker_line} alt='' className='marker__line'/>
                    <img src={Marker} alt='' className='marker'/>
                    <p className='price'><sup>$</sup>6<sup>95</sup></p>
                    <h3>{isSmallScreen ? 'First month offer':'Unlimited access'}</h3>
                    {isSmallScreen ? <a href='/pricing'> See pricing <span className='arrow'></span></a> : <p>for any documents</p>} 
                </div>

                <div className='box__cards'>
                    <div className='cards'>
                        <img src={GDPR} alt=''/>
                        <p>GDPR, CCPA, CalOPPA</p>
                    </div>
                    <div className='cards'>
                        <img src={Embed} alt=''/>
                        <p>Easy Embed on Your Site</p>
                    </div>
                    <div className='cards'>
                        <img src={Hosted} alt=''/>
                        <p>Securely Hosting Policies</p>
                    </div>
                    <div className='cards'>
                        <img src={Updated} alt=''/>
                        <p>Frequent Updates</p>
                    </div>
                    <div className='cards'>
                        <img src={Payment} alt=''/>
                        <p>Industry-leadingpricing</p>
                    </div>
                    <div className='cards'>
                        <img src={Compatible} alt=''/>
                        <p>US/EU Law Compatible</p>
                    </div>
                    <div className='cards'>
                        <img src={HTML} alt=''/>
                        <p>HTML/Word Formats</p>
                    </div>
                    <div className='cards'>
                        <img src={Unlimited} alt=''/>
                        <p>Unlimited Downloads</p>
                    </div>
                </div>
            </div>

            <div className='img__group__two'> 
                {isSmallScreen ? '' : <img src={Cards_one} alt='' className='cards_one'/>}
                {isSmallScreen ? '' : <img src={Cards_four} alt='' className='cards_four'/>}
                {isSmallScreen ? <img src={Cards_two} alt='' className='cards_two'/> : ''}
            </div>
        </div>
    </div>
  )
}

export default MarkerMain

