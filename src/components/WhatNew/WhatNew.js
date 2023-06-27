import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './what_new.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
import picture from './pictures/post.webp';

const WhatNew = () => {
  ///is responsible for translating the component
  const { t } = useTranslation(['whatNew']);
  const newsOdj = t('news',{returnObjects:true} );
  return (
    <div className={styles.new__container}>
      <div className={styles.posts__new}>
        {newsOdj.map(user =>(
          <div className={styles.post} key={user.id}>
            <div className={styles.post__img}>
              <img src={picture} alt="img" />
            </div>
            <div className={styles.post__title}>
              <p>{user.title}</p>
            </div>
            <div className={styles.post__text}>
              <p>{user.text}</p>
            </div>
            <div className={styles.post__btn}>
              <a href="/blogDetail">
                {t ('readMore')}<span className={styles.arrow}></span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.button}><a href="/blog">{t ('readMore')}</a></button>
    </div>
  );
};

export default WhatNew;