import React, { useState } from 'react';
import './PricingTableMedia.scss';
import '../../fonts/fonts.scss';

const PricingTableMedia = () => {
    const [activeIndex1, setActiveIndex1] = useState(null);
    const [activeIndex2, setActiveIndex2] = useState(null);
  
    const toggleAccordion1 = () => {
      setActiveIndex1((prevIndex) => (prevIndex === null ? 1 : null));
    };
  
    const toggleAccordion2 = () => {
      setActiveIndex2((prevIndex) => (prevIndex === null ? 1 : null));
    };

  return (
    <div className='pricing__container'>
        <div className='block__pro'>
            <div className='most__popular'>
                <p>Most popular</p>
            </div>
            <div className='block__table'>
                <span className='for__startups'>For startups</span>
                <h3>Pro+</h3>
                <p>
                    <sup>$</sup>1<sup>95</sup>
                    <span>/month</span>
                </p>
                <button>Choose Plan</button>
            </div>

            <div className="accordion-tab">
                <button
                 aria-expanded={activeIndex1 === 1}
                 onClick={toggleAccordion1}>   
                    <span className="accordion-title">See all features</span>
                    <span className="icon" aria-hidden="true"></span>
                </button>
                {activeIndex1 === 1 && (
                    <div className={`accordion-content open`}>
                        <h3>Content of Legal Policies</h3>
                        <ul className='item__pro'>
                            <li>GDPR, CCPA, CalOPPA</li>
                            <li>Any Remarketing Tools</li>
                            <li>Any Ads Tools</li>
                            <li>Any Analytics Tools</li>
                            <li>Any Payment Processors</li>
                        </ul>

                        <h3>Integrate to Website</h3>
                        <ul className='item__pro'>
                            <li>Hosted Policies</li>
                            <li>Embed On Your Site</li>
                            <li>Regular Doc Updates</li>
                        </ul>

                        <h3>Customize & Download</h3>
                        <ul className='item__pro'>
                            <li>TXT Format</li>
                            <li>HTML File (.html)</li>
                            <li>DOCX File (.doc)</li>
                            <li>Custom Logo on Document</li>
                            <li>Custom Font on Document</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>

        <div className='block__basic'>
          <div className='block__table'>
                <span className='for__businesses'>For businesses</span>
                <h3>Basic</h3>
                <p>
                <sup>$</sup>0<span>/one-time</span>
                </p>
                <button>Continue Free </button>
            </div>
            <div className="accordion-tab">
                <button
                aria-expanded={activeIndex2 === 1}
                onClick={toggleAccordion2}>
                    <span className="accordion-title">See all features</span>
                    <span className="icon" aria-hidden="true"></span>
                </button>
                {activeIndex2 === 1 && (
                    <div className={`accordion-content open`}>
                        <h3>Content of Legal Policies</h3>
                        <ul className='item__basic'>
                            <li className='included'>GDPR, CCPA, CalOPPA</li>
                            <li className='included'>Any Remarketing Tools</li>
                            <li className='included'>Any Ads Tools</li>
                            <li className='included'>Any Analytics Tools</li>
                            <li className='included'>Any Payment Processors</li>
                        </ul>

                        <h3>Integrate to Website</h3>
                        <ul className='item__basic'>
                            <li className='not_included'>Hosted Policies</li>
                            <li className='not_included'>Embed On Your Site</li>
                            <li className='not_included'>Regular Doc Updates</li>
                        </ul>

                        <h3>Customize & Download</h3>
                        <ul className='item__basic'>
                            <li className='included'>TXT Format</li>
                            <li className='not_included'>HTML File (.html)</li>
                            <li className='not_included'>DOCX File (.doc)</li>
                            <li className='not_included'>Custom Logo on Document</li>
                            <li className='not_included'>Custom Font on Document</li>
                        </ul>
                    </div>
                )}  
            </div> 
        </div>
    </div>
  );
};

export default PricingTableMedia;