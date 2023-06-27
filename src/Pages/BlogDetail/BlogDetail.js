import  React,{ useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import styles from  './blogDetail.module.scss';
import '../../fonts/fonts.scss';
///IMG
import Facebook from './pictures/Facebook.webp';
import Pinterest from './pictures/Pinterest.webp';
import Twitter from './pictures/Twitter.webp';
import linkedin from './pictures/eva_linkedin-outline.webp';
///components
import WhatNew from '../../components/WhatNew/WhatNew';
import Footer from '../../components/footer/Footer';

const BlogDetail = () => {
  ///is responsible for translating the component
  const { t } = useTranslation(['blogDetail']);

  ///page navigation
  const contentsRef = useRef(null);
  const whatYouNeedRef = useRef(null);
  const stepByStepRef = useRef(null);
  const conclusionRef = useRef(null);

  const handleContentClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={styles.background}></div>
      <main className={styles.page}>
        <div className={styles.page__container}>
          <div className={styles.page__text}>
            <aside className={styles.contents}>
              <h2>{t ('contents')}</h2>
              <ol className={styles.contents__list}>
                <li className={styles.list__item}><button onClick={() => handleContentClick(contentsRef)}>{t ('itemOne')}</button>  
                  <ol>
                    <li className={styles.list__item}><button onClick={() => handleContentClick(whatYouNeedRef)}>{t ('itemTwo')}</button></li>
                    <li className={styles.list__item}><button onClick={() => handleContentClick(stepByStepRef)}>{t ('itemThree')}</button></li>
                    <li className={styles.list__item}><button onClick={() => handleContentClick(conclusionRef)}>{t ('itemFour')}</button></li>
                  </ol> 
                </li>
              </ol>
            </aside>

            <div className={styles.contents__text}>
              <div className={styles.contents__foto}></div>

              <h2 ref={contentsRef}>{t ('itemOne')}</h2>
              <p>{t ('paragraphOneOne')}</p>
              <p>{t ('paragraphOneTwo')}</p>

              <div className={styles.block}>
                <h3 ref={whatYouNeedRef}>{t ('itemTwo')}</h3>
                <ul>
                  <li>{t ('less')}</li>
                  <li>{t ('shopify')}</li>
                  <li>{t ('iPhone')}</li>
                  <li>{t ('eessAccounting')}</li>
                  <li>{t ('printer')}</li>
                </ul>
              </div>

              <div className={styles.block}>
                <h3 ref={stepByStepRef}>{t ('itemThree')}</h3>
                <p>{t ('paragraphThreeOne')}</p>

                <h4>{t ('titleOne')}</h4>
                <p>{t ('paragraphThreeTwo')}</p>
                <p>{t ('paragraphThreeThree')}</p>
                <p>{t ('paragraphThreeFour')}</p>

                <h4>{t ('titleTwo')}</h4>
                <p>{t ('paragraphThreeFive')}</p>
                <p>{t ('paragraphThreeSix')}</p>
                <p>{t('paragraphThreeSeven')}</p>
                <p>{t ('paragraphThreeEight')}</p>

                <h4>{t ('titleThree')}</h4>
                <p>{t ('paragraphThreeNine')}</p>
                <p>{t ('paragraphThreeTen')}</p>
                <p>{t ('paragraphThreeEleven')}</p>
              </div>

              <div className={styles.block}>
                <h3 ref={conclusionRef}>{t ('itemFour')}</h3>
                <p>{t ('paragraphFourOne')}</p>
                <p>{t ('paragraphFourTwo')}</p>
                <p>{t('paragraphFourThree')}</p>
                <p>{t ('paragraphFourFour')}</p>
              </div>
                    
              <div className={styles.share}>
                <p>{t ('share')}</p>
                <a href="https://www.facebook.com" target="blank"><img src={Facebook} alt=""/></a>
                <a href="https://twitter.com" target="blank"><img src={Twitter} alt=""/></a>
                <a href="https://www.pinterest.com" target="blank"><img src={Pinterest} alt=""/></a>
                <a href="https://ua.linkedin.com/" target="blank"><img src={linkedin} alt=""/></a>
              </div>
            </div>
          </div>

          <div className={styles.related__post}>
            <h2>{t ('relatedPost')}</h2>
            <WhatNew/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default BlogDetail;