import React from 'react'
import './TrustedProvisions.scss';
import '../../fonts/fonts.scss';
///IMG
import Businesses from "./pictures/Businesses.svg"
import CompliantPageviews from "./pictures/CompliantPageviews.svg"
import TermsConditions from "./pictures/TermsConditions.svg"

const TrustedProvisions = () => {
  return (
    <>
        <main className="legal__safeguards">
            <div className="legal__safeguards__container">  
                <div className="legal__safeguards__text">
                    <div className="legal__safeguards__title">
                        <div className="disclaimer__legal__safeguards">
                            <p className='disclaimer'>Trusted Provisions</p>
                            <div className="disclaimer__media">
                                <p>Can Trust</p>
                            </div>
                        </div>

                        <div className="title__legal__safeguards">
                            <div className="title__legal__safeguards__media">
                                <h2>Legal Protection You</h2>
                                <p>Create a free terms and conditions agreement (aka terms of use or terms of service) for your website or app</p>
                            </div>
                            <h2 className='title'>Secure Legal Safeguards</h2>
                            <p className='text'>Attorney-certified compliance solutions for your convenience and protection.</p>
                        </div> 
                    </div>

                    <div className="cards__legal__safeguards">
                        <div className="policies__created">
                            <img src={TermsConditions} alt=""/>
                            <h3>100,000+</h3>
                            <p>Policies Created</p>
                        </div>

                        <div className="businesses">
                            <img src={Businesses} alt=""/>
                            <h3>140,000+</h3>
                            <p>Businesses</p>
                        </div>

                        <div className="compliant__pageviews">
                            <img src={CompliantPageviews} alt=""/>
                            <h3>60 Million+</h3>
                            <p>Compliant Pageviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default TrustedProvisions