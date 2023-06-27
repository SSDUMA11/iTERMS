import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import styles from './questions.module.scss';
import '../../fonts/fonts.scss';
import {question} from './Question';

const Questions = () => {
  ///is responsible for translating the component
  const { t } = useTranslation(['questions']);
  const questionsOdj = t('question',{returnObjects:true} );

  /// the code updates the category property of each object in the questionsObj array with the corresponding category value from the question array.
  question.forEach((question, idx) => {
    questionsOdj[idx].category = question.category;
  });

  ///responsible for managing the active state of the accordion items, allowing only one item to be expanded at a time.
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  ///Table of Contents
  const [data, setData] = useState(questionsOdj);

  const filterResult = (catItem) => {
    let result = questionsOdj;
    if (catItem !== 'all') {
      result = questionsOdj.filter((curData) => {
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

  ///Animation
  const cardsAnimation ={
    hidden:{
      x: 200,
      opacity:0,
    },
    visible:custom =>({
      x: 0,
      opacity:1,
      transition:{
        delay: custom * 0.2,
        duration:1,
      },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once:true}}
      custom={1} 
      variants={cardsAnimation} 
      className={styles.questions__container}>
      <div className={styles.questions__title}>
        <p className={styles.disclaimer}>{isSmallScreen ? t ('disclaimerSmall'): t ('disclaimerBig')}</p>
        <h2>{isSmallScreen ? t ('titleSmall'): t ('titleBig')}</h2>
        <p className={styles.subtitle}>{isSmallScreen ?  t ('subtitleSmall'): t ('subtitleBig')}</p>
      </div>

      <div className={styles.questions__block}>
        <div className={styles.questions__contents}>
          <h3>{t ('contents')}</h3>
          {isSmallScreen ?
            <div className={styles.contents}>
              <select onChange={(e) => filterResult(e.target.value)}>
                <option value="all">{t ('general')}</option>
                <option value="Trust & Safety">{t('trustSafety')}</option>
                <option value="Payment">{t ('payment')}</option>
                <option value="Help">{t ('help')}</option>
                <option value="Contacts">{t ('contacts')}</option>
              </select>
            </div>
            :
            <ul className={styles.content__list}>
              <li><button onClick={() => setData(questionsOdj)}>{t ('general')}</button></li>
              <li><button onClick={() => filterResult('Trust & Safety')}>{t('trustSafety')}</button></li>
              <li><button onClick={() => filterResult('Payment')}>{t ('payment')}</button></li>
              <li><button onClick={() => filterResult('Help')}>{t ('help')}</button></li>
              <li><button onClick={() => filterResult('Contacts')}>{t ('contacts')}</button></li>
            </ul>
          }
        </div>
               
        <div className={styles.accordion}>
          {data.map((user, index) => (
            <div key={user.id} className={styles.accordion__item}>
              <button
                aria-expanded={activeIndex === index ? 'true' : 'false'}
                onClick={() => toggleAccordion(index)}>
                <span className={styles.accordion__title}>{user.title}</span>
                <span className={styles.icon} aria-hidden="true"></span>
              </button>
              <div className={`${styles.accordion__content} ${activeIndex === index ? 'open' : ''}`}>
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
    </motion.div>
  );
};

export default Questions;