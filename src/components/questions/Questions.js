import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import './questions.scss';
import '../../fonts/fonts.scss';
import {question} from './Question'

const Questions = () => {
    // const { t } = useTranslation(["Questions"])
    const [activeIndex, setActiveIndex] = useState(null);
      
    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };



    ///Table of Contents
    const [data, setData] = useState(question);
    const filterResult = (catItem) => {
        let result = question;
        if (catItem !== "all") {
            result = question.filter((curData) => {
                return curData.category === catItem;
            });
        }
        setData(result);
    };

    ///the table when the screen width is less than 769px
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 769); 

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
        <div className="questions__container">
            <div className="questions__title">
                {isSmallScreen ? <p className='questions__disclaimer'>Latest blog articles</p> : <p className='questions__disclaimer'>Solutions to Your Problems</p>}
                {isSmallScreen ? <h2>Questions? Look here</h2> : <h2>Do You Have any Questions?</h2>}
                {isSmallScreen ? <p className='questions__text'>More than 140,000 businesses use iTerms. Join our community of amazing companies!</p> : <p className='questions__text'>Take a look through our answers! Still, have questions?<br/> Please don't be afraid to contact our team at any time.</p>}
            </div>

            <div className='questions__block'>
                <div className='questions__contents'>
                    <h3>Table of Contents</h3>
                    {isSmallScreen ?
                        <div className="contents">
                            <select onChange={(e) => filterResult(e.target.value)}>
                                <option value="all">General</option>
                                <option value="Trust & Safety">Trust & Safety</option>
                                <option value="Payment">Payment</option>
                                <option value="Help">Help</option>
                                <option value="Contacts">Contacts</option>
                            </select>
                        </div>
                        :
                        <ul className='content__list'>
                            <li><button onClick={() => setData(question)}>General</button></li>
                            <li><button onClick={() => filterResult('Trust & Safety')}>Trust & Safety</button></li>
                            <li><button onClick={() => filterResult('Payment')}>Payment</button></li>
                            <li><button onClick={() => filterResult('Help')}>Help</button></li>
                            <li><button onClick={() => filterResult('Contacts')}>Contacts</button></li>
                        </ul>
                    }
                </div>
               
                <div className="accordion">
                    {data.map((user, index) => (
                        <div key={user.id} className="accordion-item">
                            <button
                            aria-expanded={activeIndex === index ? 'true' : 'false'}
                            onClick={() => toggleAccordion(index)}>
                                <span className="accordion-title">{user.title}</span>
                                <span className="icon" aria-hidden="true"></span>
                            </button>
                            <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
                                <p>{user.text}</p>
                                <h3>{user.subtitle}</h3>
                                <p>{user.textTwo}</p>
                                <h3>{user.subtitleTwo}</h3>
                                <p>{user.textThree}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Questions